import { NextRequest, NextResponse } from 'next/server';

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

export async function POST(req: NextRequest) {
  const body = await req.json();
  const prompt = body.prompt || '';

  if (!prompt.trim()) {
    return NextResponse.json({ error: 'Prompt vide' }, { status: 400 });
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
        { role: 'user', content: prompt },
      ],
      max_tokens: 1024,
      temperature: 0.7,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Groq API error:', err);
    return NextResponse.json({ error: 'Erreur API' }, { status: 502 });
  }

  const data = await res.json();
  return NextResponse.json({
    result: data.choices?.[0]?.message?.content ?? '',
  });
}
