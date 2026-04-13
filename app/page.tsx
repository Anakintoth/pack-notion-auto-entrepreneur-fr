import AIWidget from './components/AIWidget';
import MobileNav from './components/MobileNav';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen noise">
      <ScrollReveal />

      {/* ═══ Navbar — glassmorphism ═══ */}
      <nav className="fixed top-0 w-full z-50 glass-strong">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🧾</span>
            <span className="text-xl font-bold tracking-tight">AutoKit</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors duration-200">Fonctionnalités</a>
            <a href="#ai" className="hover:text-white transition-colors duration-200">Assistant IA</a>
            <a href="#pricing" className="hover:text-white transition-colors duration-200">Tarifs</a>
            <a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden md:inline-block btn-primary !text-sm !px-5 !py-2.5 !rounded-lg"><span>Commencer</span></a>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* ═══ Hero — floating orbs + gradient mesh ═══ */}
      <section className="hero-bg relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-bg absolute inset-0 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="badge mb-8 reveal">
            🇫🇷 Conçu pour les auto-entrepreneurs français
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-[1.08] tracking-tight reveal reveal-d1">
            <span className="gradient-text">AutoKit</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-gray-200 mb-4 max-w-2xl mx-auto leading-relaxed reveal reveal-d2">
            Ton activité, organisée dès le premier jour
          </p>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto text-base leading-relaxed reveal reveal-d2">
            Le pack Notion tout-en-un pour gérer tes clients, factures et déclarations URSSAF — sans se perdre dans la paperasse. Avec un assistant IA intégré.
          </p>

          <div className="flex gap-4 justify-center flex-wrap reveal reveal-d3">
            <a href="#pricing" className="btn-primary"><span>🧾 Obtenir le pack</span></a>
            <a href="#ai" className="btn-secondary">Tester l&apos;IA</a>
          </div>

          {/* Stats bar */}
          <div className="mt-16 reveal reveal-d4">
            <div className="inline-flex items-stretch glass rounded-2xl overflow-hidden">
              <div className="stat-item px-8 py-5">
                <span className="stat-number">500+</span>
                <span className="stat-label">auto-entrepreneurs</span>
              </div>
              <div className="stat-item px-8 py-5">
                <span className="stat-number">4.9/5</span>
                <span className="stat-label">satisfaction</span>
              </div>
              <div className="stat-item px-8 py-5">
                <span className="stat-number">2 min</span>
                <span className="stat-label">pour démarrer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ UI Mockup showcase ═══ */}
      <section className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="card glow p-1.5 rounded-3xl reveal">
            <div className="rounded-2xl overflow-hidden" style={{ background: '#0A1628' }}>
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b" style={{ borderColor: '#2D6BE418', background: '#0D1F35' }}>
                <div className="w-3 h-3 rounded-full" style={{ background: '#f85149' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#d29922' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#3fb950' }} />
                <div className="ml-4 flex items-center gap-2 px-4 py-1 rounded-full text-xs text-gray-600" style={{ background: '#0A1628', border: '1px solid #2D6BE415' }}>
                  <span style={{ color: '#3fb950' }}>●</span> notion.so/autokit
                </div>
              </div>
              {/* Fake product UI */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="h-3 rounded-full w-40 mb-2" style={{ background: '#2D6BE420' }} />
                    <div className="h-2 rounded-full w-24" style={{ background: '#2D6BE410' }} />
                  </div>
                  <div className="h-8 w-28 rounded-lg" style={{ background: 'linear-gradient(135deg, #2D6BE430, #5B8FF020)', border: '1px solid #2D6BE425' }} />
                </div>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'CA du mois', val: '4 250 €', color: '#2D6BE4' },
                    { label: 'Factures envoyées', val: '12', color: '#5B8FF0' },
                    { label: 'En attente', val: '3', color: '#F97316' },
                    { label: 'URSSAF estimé', val: '522 €', color: '#10b981' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl p-4" style={{ background: `${stat.color}0A`, border: `1px solid ${stat.color}20` }}>
                      <div className="text-xs mb-2" style={{ color: `${stat.color}90` }}>{stat.label}</div>
                      <div className="text-lg font-bold" style={{ color: stat.color }}>{stat.val}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2.5">
                  {['Facture FAC-2026-042 — Studio Pixel — 1 500 €', 'Facture FAC-2026-041 — Agence Nord — 850 €', 'Devis DEV-2026-018 — TechFlow — En attente'].map((row, i) => (
                    <div key={i} className="flex items-center justify-between px-4 py-3 rounded-xl" style={{ background: '#2D6BE406', border: '1px solid #2D6BE410' }}>
                      <span className="text-xs text-gray-400">{row}</span>
                      <div className="h-2 w-2 rounded-full" style={{ background: i < 2 ? '#10b981' : '#F97316' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Features — bento grid ═══ */}
      <section id="features" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider" />
            <div className="badge mb-4">Fonctionnalités</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 reveal">Tout ce qu&apos;il vous faut</h2>
            <p className="text-gray-500 max-w-xl mx-auto reveal reveal-d1">Un seul pack Notion pour piloter toute ton activité d&apos;auto-entrepreneur, du premier client à la déclaration URSSAF.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="feature-card reveal reveal-d1">
              <div className="feature-icon">🗂️</div>
              <h3 className="font-bold text-lg mb-2">Tableau de bord tout-en-un</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Pilote ton activité depuis une vue centrale : CA en temps réel, prochaines échéances, clients actifs et indicateurs de performance.</p>
            </div>
            <div className="feature-card reveal reveal-d2">
              <div className="feature-icon">🧾</div>
              <h3 className="font-bold text-lg mb-2">Factures &amp; devis conformes</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Génère des factures professionnelles respectant toutes les mentions légales françaises — numérotation automatique, franchise TVA, conditions de paiement.</p>
            </div>
            <div className="feature-card reveal reveal-d3">
              <div className="feature-icon">📊</div>
              <h3 className="font-bold text-lg mb-2">Suivi CA &amp; alertes URSSAF</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Visualise ton chiffre d&apos;affaires cumulé, reçois des alertes automatiques avant les plafonds AE (77 700 € / 188 700 €) et calcule tes cotisations.</p>
            </div>
            <div className="feature-card reveal reveal-d4">
              <div className="feature-icon">📅</div>
              <h3 className="font-bold text-lg mb-2">Calendrier fiscal intégré</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Toutes tes échéances dans un seul endroit : déclarations bimestrielles URSSAF, CFE, TVA si applicable — avec rappels configurables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AI Demo section ═══ */}
      <section id="ai" className="py-28 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-divider" />
            <div className="badge mb-4">Assistant IA</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 reveal">L&apos;IA qui travaille pour toi</h2>
            <p className="text-gray-500 max-w-lg mx-auto reveal reveal-d1">
              Génère une facture conforme, calcule tes cotisations URSSAF, rédige un devis ou obtiens des conseils — en quelques secondes.
            </p>
          </div>
          <div className="reveal reveal-d2">
            <AIWidget />
          </div>
        </div>
      </section>

      {/* ═══ Pricing — animated gradient border on Pro ═══ */}
      <section id="pricing" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider" />
            <div className="badge mb-4">Tarifs</div>
            <h2 className="text-4xl font-bold mb-4 reveal">Simple et transparent</h2>
            <p className="text-gray-500 reveal reveal-d1">Commencez gratuitement. Évoluez quand vous êtes prêt.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

            {/* Free */}
            <div className="card text-center reveal reveal-d1">
              <h3 className="font-bold text-lg mb-2">Découverte</h3>
              <div className="text-4xl font-extrabold mb-1">
                0<span className="text-lg font-normal text-gray-500"> €</span>
              </div>
              <p className="text-gray-500 text-sm mb-8">Pour toujours</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2"><span style={{ color: '#2D6BE4' }}>✓</span> Pack Notion de base</li>
                <li className="flex items-center gap-2"><span style={{ color: '#2D6BE4' }}>✓</span> 5 générations IA / jour</li>
                <li className="flex items-center gap-2"><span style={{ color: '#2D6BE4' }}>✓</span> Modèles de factures</li>
                <li className="flex items-center gap-2"><span style={{ color: '#2D6BE4' }}>✓</span> Support communautaire</li>
              </ul>
              <a href="#" className="btn-secondary w-full block text-center !text-sm">Commencer</a>
            </div>

            {/* Pro — gradient border */}
            <div className="card gradient-border text-center relative glow reveal reveal-d2 md:-mt-5 md:pb-10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap" style={{ background: 'linear-gradient(135deg, #2D6BE4, #5B8FF0)', color: 'white', boxShadow: '0 4px 20px #2D6BE450' }}>
                ⚡ POPULAIRE
              </div>
              <h3 className="font-bold text-lg mb-2 mt-2">Freelance</h3>
              <div className="text-5xl font-extrabold mb-1">
                9.99<span className="text-lg font-normal text-gray-500"> €</span>
              </div>
              <p className="text-gray-500 text-sm mb-8">/ mois</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2"><span style={{ color: '#2D6BE4' }}>✓</span> Tout du plan Découverte</li>
                <li className="flex items-center gap-2"><span style={{ color: '#2D6BE4' }}>✓</span> Générations IA illimitées</li>
                <li className="flex items-center gap-2"><span style={{ color: '#2D6BE4' }}>✓</span> Export PDF &amp; archive</li>
                <li className="flex items-center gap-2"><span style={{ color: '#2D6BE4' }}>✓</span> Mises à jour fiscales 2026</li>
                <li className="flex items-center gap-2"><span style={{ color: '#2D6BE4' }}>✓</span> Support prioritaire</li>
              </ul>
              <a href="#" className="btn-primary w-full block text-center !text-sm"><span>Souscrire maintenant</span></a>
            </div>

            {/* Studio */}
            <div className="card text-center reveal reveal-d3">
              <h3 className="font-bold text-lg mb-2">Studio</h3>
              <div className="text-4xl font-extrabold mb-1">
                24.99<span className="text-lg font-normal text-gray-500"> €</span>
              </div>
              <p className="text-gray-500 text-sm mb-8">/ mois</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2"><span style={{ color: '#2D6BE4' }}>✓</span> Tout du plan Freelance</li>
                <li className="flex items-center gap-2"><span style={{ color: '#2D6BE4' }}>✓</span> Jusqu&apos;à 5 utilisateurs</li>
                <li className="flex items-center gap-2"><span style={{ color: '#2D6BE4' }}>✓</span> Personnalisation avancée</li>
                <li className="flex items-center gap-2"><span style={{ color: '#2D6BE4' }}>✓</span> Intégration comptable</li>
              </ul>
              <a href="#" className="btn-secondary w-full block text-center !text-sm">Contacter</a>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ Testimonials ═══ */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider" />
            <div className="badge mb-4">Témoignages</div>
            <h2 className="text-4xl font-bold reveal">Ils nous font confiance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card reveal reveal-d1">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">&ldquo;AutoKit m&apos;a sauvé des heures chaque mois. Mes factures sont impeccables et je ne rate plus une seule déclaration URSSAF.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: '#2D6BE420', color: '#7BAAF7' }}>C</div>
                <div>
                  <p className="font-semibold text-sm">Camille Rousseau</p>
                  <p className="text-xs text-gray-500">Graphiste freelance, Lyon</p>
                </div>
              </div>
            </div>
            <div className="card reveal reveal-d2">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">&ldquo;Enfin un outil pensé pour les vrais auto-entrepreneurs français. Simple, complet, opérationnel en moins de 5 minutes.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: '#5B8FF020', color: '#7BAAF7' }}>T</div>
                <div>
                  <p className="font-semibold text-sm">Thomas Leblanc</p>
                  <p className="text-xs text-gray-500">Développeur web, Bordeaux</p>
                </div>
              </div>
            </div>
            <div className="card reveal reveal-d3">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">&ldquo;Je gère tout depuis un seul espace Notion. Plus de fichiers Excel éparpillés — je me concentre sur mes clients, pas sur l&apos;admin.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0" style={{ background: '#F9731620', color: '#fb923c' }}>I</div>
                <div>
                  <p className="font-semibold text-sm">Inès Marchand</p>
                  <p className="text-xs text-gray-500">Coach développement personnel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider" />
            <div className="badge mb-4">FAQ</div>
            <h2 className="text-4xl font-bold reveal">Questions fréquentes</h2>
          </div>
          <div className="space-y-4">
            <details className="card group cursor-pointer reveal reveal-d1">
              <summary className="font-semibold list-none flex justify-between items-center gap-4">
                Ai-je besoin d&apos;un compte Notion payant pour utiliser AutoKit ?
                <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300 text-2xl flex-shrink-0">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">Non, AutoKit fonctionne avec le plan gratuit de Notion. Un simple compte gratuit suffit pour dupliquer et utiliser l&apos;intégralité du pack immédiatement.</p>
            </details>
            <details className="card group cursor-pointer reveal reveal-d2">
              <summary className="font-semibold list-none flex justify-between items-center gap-4">
                Le pack est-il conforme aux règles fiscales françaises 2026 ?
                <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300 text-2xl flex-shrink-0">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">Oui. AutoKit est conçu spécifiquement pour le régime auto-entrepreneur français avec les seuils URSSAF 2026, les taux de cotisations à jour (12,3% BIC, 21,2% BNC), la franchise en base de TVA et toutes les mentions légales obligatoires.</p>
            </details>
            <details className="card group cursor-pointer reveal reveal-d3">
              <summary className="font-semibold list-none flex justify-between items-center gap-4">
                Puis-je personnaliser le pack avec mon identité visuelle ?
                <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300 text-2xl flex-shrink-0">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">Absolument. Toutes les sections sont librement modifiables dans Notion : logo, couleurs, informations de ton entreprise, modèles de documents et formules de calcul.</p>
            </details>
            <details className="card group cursor-pointer reveal reveal-d4">
              <summary className="font-semibold list-none flex justify-between items-center gap-4">
                Comment fonctionne l&apos;assistant IA intégré ?
                <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300 text-2xl flex-shrink-0">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">L&apos;assistant IA est disponible directement sur cette page (section Assistant IA). Il génère des factures complètes, calcule tes cotisations URSSAF, rédige des devis professionnels et donne des conseils personnalisés — le tout en français et adapté au régime AE.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="py-28 px-6">
        <div className="max-w-2xl mx-auto text-center card glow gradient-border reveal">
          <div className="py-6">
            <span className="text-5xl mb-6 block">🧾</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Prêt à démarrer ?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto leading-relaxed">
              Rejoins 500+ auto-entrepreneurs qui ont digitalisé leur gestion avec AutoKit. Gratuit pour commencer.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#pricing" className="btn-primary"><span>🧾 Obtenir le pack</span></a>
              <a href="#ai" className="btn-secondary">Tester l&apos;IA</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="glass py-12 px-6 mt-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl">🧾</span>
            <span className="font-bold tracking-tight">AutoKit</span>
            <span className="text-xs text-gray-600 hidden sm:block ml-1">— pour auto-entrepreneurs</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGU</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-600">&copy; 2026 AutoKit. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
