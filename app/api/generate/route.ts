import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/generate
 *
 * Generates auto-entrepreneur-specific content via Groq LLM.
 *
 * Body (two modes):
 *  1. Simple:  { prompt: string }
 *  2. Typed:   { type: 'facture' | 'urssaf' | 'devis' | 'conseil', data: Record<string, string> }
 */

const SYSTEM_PROMPT = `Tu es un assistant expert en gestion d'auto-entreprise en France.
Tu aides les auto-entrepreneurs avec :
- La rédaction de factures conformes (mentions obligatoires, numérotation)
- Le calcul des cotisations URSSAF (taux selon l'activité : 12,3% BIC, 21,2% BNC, 6% micro-social libéral)
- Les plafonds de chiffre d'affaires AE (77 700€ prestation de services, 188 700€ vente de marchandises)
- Le calendrier fiscal : déclarations bimestrielles ou mensuelles URSSAF, CFE, TVA (si applicable)
- La franchise en base de TVA (seuils 2026)
- La gestion clients, devis et relances
- Les obligations légales : registre des recettes, assurance RC Pro, etc.

Réponds toujours en français, de manière claire, concise et pratique.
Si on te demande de générer une facture, produis un texte structuré prêt à copier.
Ne fournis pas de conseil juridique ou fiscal personnalisé — recommande un expert-comptable pour les cas complexes.`;

function buildTypedPrompt(type: string, data: Record<string, string>): string {
  switch (type) {
    case 'facture':
      return `Génère le texte complet d'une facture professionnelle pour un auto-entrepreneur français.
Client : ${data.client ?? 'Non renseigné'}
Prestation : ${data.prestation ?? 'Prestation de services'}
Montant : ${data.montant ?? '0'} €
Date : ${data.date ?? new Date().toLocaleDateString('fr-FR')}
N° facture : ${data.numero ?? 'FAC-2026-001'}
Inclure toutes les mentions légales obligatoires, la mention franchise TVA (art. 293 B CGI), et les conditions de paiement légales.`;

    case 'urssaf':
      return `Aide-moi à préparer ma déclaration URSSAF.
Période : ${data.periode ?? 'trimestre en cours'}
Chiffre d'affaires : ${data.ca ?? '0'} €
Type d'activité : ${data.activite ?? 'Prestation de services BIC'}
Calcule les cotisations exactes (taux 2026), la date limite, et les points de vigilance.`;

    case 'devis':
      return `Génère un modèle de devis professionnel pour un auto-entrepreneur français.
Client : ${data.client ?? 'Prospect'}
Prestation : ${data.prestation ?? 'Mission de conseil'}
Durée estimée : ${data.duree ?? 'À définir'}
Tarif : ${data.tarif ?? 'Non précisé'}
Le devis doit être professionnel, inclure une date de validité, les conditions d'acceptation et les mentions légales.`;

    case 'conseil':
      return `Donne-moi 5 conseils pratiques et actionnables pour optimiser ma gestion AE.
Secteur : ${data.secteur ?? 'Services intellectuels'}
CA annuel estimé : ${data.ca ?? '0'} €
Problématique : ${data.probleme ?? 'Organisation générale'}
Concentre-toi sur des actions concrètes applicables cette semaine.`;

    default:
      return '';
  }
}

export async function POST(req: NextRequest) {
  if (!process.env.GROQ_API_KEY) {
    console.error('[Autonomi] GROQ_API_KEY is not configured');
    return NextResponse.json({ error: 'Service non configuré. Contactez le support.' }, { status: 503 });
  }

  let body: { prompt?: string; type?: string; data?: Record<string, string> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide.' }, { status: 400 });
  }

  const rawPrompt: string = body.prompt ?? '';
  const type: string = body.type ?? '';
  const data: Record<string, string> = body.data ?? {};

  const userPrompt = type ? buildTypedPrompt(type, data) || rawPrompt : rawPrompt;

  if (!userPrompt.trim()) {
    return NextResponse.json({ error: 'Prompt vide.' }, { status: 400 });
  }

  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
      max_tokens: 1500,
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('[Autonomi] Groq API error:', err);
    return NextResponse.json({ error: 'Erreur lors de la génération. Réessayez dans quelques instants.' }, { status: 502 });
  }

  const groqData = await res.json();
  return NextResponse.json({
    result: groqData.choices?.[0]?.message?.content ?? '',
    type: type || 'prompt',
  });
}
