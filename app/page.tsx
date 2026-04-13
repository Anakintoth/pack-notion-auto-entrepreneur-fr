'use client';

import { useEffect } from 'react';

export default function Home() {
  /* ── Scroll reveal ── */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="min-h-screen noise">

      {/* ══════════════════════════════════════════
          NAVBAR — glassmorphism fixe
      ══════════════════════════════════════════ */}
      <nav className="fixed top-0 w-full z-50 glass-strong">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📋</span>
            <span className="text-lg font-bold tracking-tight">
              Indé<span className="gradient-text-accent">Kit</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features"     className="hover:text-white transition-colors duration-200">Fonctionnalités</a>
            <a href="#pricing"      className="hover:text-white transition-colors duration-200">Tarifs</a>
            <a href="#testimonials" className="hover:text-white transition-colors duration-200">Avis</a>
            <a href="#faq"          className="hover:text-white transition-colors duration-200">FAQ</a>
          </div>
          <a href="#pricing" className="btn-primary !text-sm !px-5 !py-2.5 !rounded-lg">
            <span>Démarrer gratuitement</span>
          </a>
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          HERO — orbs + mesh + gradient text
      ══════════════════════════════════════════ */}
      <section className="hero-bg relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-bg absolute inset-0 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">

          <div className="reveal-hero reveal-hero-d1 flex justify-center mb-8">
            <div className="badge-float">
              ✨ Nouveau — Pack complet auto-entrepreneur 2026
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[1.05] tracking-tight reveal-hero reveal-hero-d2">
            <span className="gradient-text">Pilotez votre AE</span>
            <br />
            <span className="text-white">depuis Notion.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-3 max-w-2xl mx-auto leading-relaxed reveal-hero reveal-hero-d3">
            Le système Notion tout-en-un pour les auto-entrepreneurs français.
          </p>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto text-base reveal-hero reveal-hero-d3">
            Factures conformes, cotisations URSSAF, CRM clients et calendrier fiscal — tout au même endroit, sans prise de tête.
          </p>

          <div className="flex gap-4 justify-center flex-wrap reveal-hero reveal-hero-d4">
            <a href="#pricing" className="btn-primary text-base">
              <span>📋 Obtenir le pack gratuit</span>
            </a>
            <a href="#features" className="btn-secondary text-base">Voir les fonctionnalités</a>
          </div>

          <div className="mt-16 flex justify-center gap-10 flex-wrap reveal-hero reveal-hero-d5">
            <div className="stat-item">
              <span className="stat-dot" style={{ background: '#6366f1' }} />
              2 400+ auto-entrepreneurs
            </div>
            <div className="stat-item">
              <span className="stat-dot" style={{ background: '#10b981' }} />
              4.9 / 5 ⭐ satisfaction
            </div>
            <div className="stat-item">
              <span className="stat-dot" style={{ background: '#8b5cf6' }} />
              0 complication comptable
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MOCKUP — interface Notion stylisée
      ══════════════════════════════════════════ */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto reveal">
          <div className="card glow p-1 rounded-2xl">
            <div className="rounded-xl overflow-hidden" style={{ background: '#0d0c1a' }}>
              {/* Barre de titre navigateur */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: '#6366f115' }}>
                <div className="w-3 h-3 rounded-full" style={{ background: '#f85149' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#d29922' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#3fb950' }} />
                <div className="flex-1 mx-4 px-3 py-1 rounded text-xs text-gray-600" style={{ background: '#6366f108' }}>
                  notion.so / IndéKit — Tableau de bord Auto-Entrepreneur
                </div>
              </div>

              {/* Corps Notion */}
              <div className="flex" style={{ minHeight: '360px' }}>
                {/* Sidebar */}
                <div className="w-48 border-r p-3 hidden md:block" style={{ borderColor: '#6366f112', background: '#0a0916' }}>
                  <p className="text-xs text-gray-600 uppercase tracking-widest px-2 mb-3 mt-1">Espace de travail</p>
                  <div className="space-y-0.5">
                    {[
                      { icon: '📊', label: 'Tableau de bord', active: true },
                      { icon: '🧾', label: 'Mes Factures',    active: false },
                      { icon: '👥', label: 'Clients & Leads', active: false },
                      { icon: '📅', label: 'Calendrier Fiscal',active: false },
                      { icon: '💰', label: 'Revenus & Charges',active: false },
                      { icon: '📝', label: 'Devis',           active: false },
                      { icon: '🏛️',  label: 'URSSAF Tracker', active: false },
                    ].map(({ icon, label, active }) => (
                      <div key={label} className={`notion-sidebar-item ${active ? 'active' : ''}`}>
                        <span>{icon}</span>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contenu principal */}
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">📊</span>
                    <h3 className="text-lg font-semibold text-gray-200">Tableau de bord — Avril 2026</h3>
                  </div>

                  {/* KPI cards */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: 'CA mensuel',       value: '4 850 €',  color: '#10b981' },
                      { label: 'Cotisations dues',  value: '1 115 €',  color: '#f59e0b' },
                      { label: 'Factures en attente', value: '2',      color: '#6366f1' },
                    ].map(({ label, value, color }) => (
                      <div key={label} className="rounded-lg p-3" style={{ background: `${color}0d`, border: `1px solid ${color}22` }}>
                        <p className="text-xs mb-1" style={{ color: `${color}aa` }}>{label}</p>
                        <p className="text-xl font-bold" style={{ color }}>{value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Barre de progression URSSAF */}
                  <div className="rounded-lg p-3 mb-4" style={{ background: '#6366f108', border: '1px solid #6366f118' }}>
                    <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                      <span>Plafond AE — Prestation de services</span>
                      <span style={{ color: '#a5b4fc' }}>58% atteint</span>
                    </div>
                    <div className="w-full h-2 rounded-full" style={{ background: '#6366f120' }}>
                      <div className="h-2 rounded-full" style={{ width: '58%', background: 'linear-gradient(90deg, #6366f1, #8b5cf6)' }} />
                    </div>
                  </div>

                  {/* Mini table factures */}
                  <div className="space-y-2">
                    {[
                      { ref: 'FAC-2026-042', client: 'Studio Lumière', montant: '1 200 €', status: 'Payée', statusColor: '#10b981' },
                      { ref: 'FAC-2026-043', client: 'Agence Pixel',   montant: '800 €',   status: 'En attente', statusColor: '#f59e0b' },
                    ].map(({ ref, client, montant, status, statusColor }) => (
                      <div key={ref} className="flex items-center justify-between rounded-lg px-3 py-2 text-xs" style={{ background: '#ffffff06' }}>
                        <span className="text-gray-500">{ref}</span>
                        <span className="text-gray-300">{client}</span>
                        <span className="font-semibold text-gray-200">{montant}</span>
                        <span className="chip" style={{ background: `${statusColor}18`, color: statusColor }}>{status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ══════════════════════════════════════════
          FEATURES — 4 cartes spécifiques AE
      ══════════════════════════════════════════ */}
      <section id="features" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Fonctionnalités</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Tout ce qu&apos;il faut pour{' '}
              <span className="gradient-text">gérer votre AE</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Des templates Notion pensés pour les obligations réelles de l&apos;auto-entrepreneur en France.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                emoji: '🧾',
                title: 'Générateur de factures conformes',
                desc: 'Créez des factures légalement conformes en 2 minutes. Numérotation automatique, mentions obligatoires, TVA ou franchise incluse. Export PDF en un clic.',
                accent: '#6366f1',
                delay: 'reveal-d1',
              },
              {
                emoji: '📊',
                title: 'Tableau de bord URSSAF & fiscal',
                desc: 'Suivez votre CA, calculez automatiquement vos cotisations URSSAF et anticipez vos impôts sur le revenu. Plus jamais de mauvaise surprise.',
                accent: '#8b5cf6',
                delay: 'reveal-d2',
              },
              {
                emoji: '👥',
                title: 'CRM Clients & pipeline commercial',
                desc: 'Gérez vos prospects, clients actifs, devis en cours et projets livrés depuis une seule base Notion. Relances automatiques via les rappels.',
                accent: '#10b981',
                delay: 'reveal-d3',
              },
              {
                emoji: '📅',
                title: 'Calendrier fiscal tout-en-un',
                desc: 'Toutes vos échéances en un coup d\'œil : déclarations URSSAF bimestrielles, CFE, TVA, liasse fiscale. Ne ratez plus jamais une date limite.',
                accent: '#f59e0b',
                delay: 'reveal-d4',
              },
            ].map(({ emoji, title, desc, accent, delay }) => (
              <div key={title} className={`feature-card reveal ${delay}`}>
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}
                  >
                    {emoji}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature secondaire — bannière */}
          <div className="mt-8 card reveal reveal-d5" style={{ background: 'rgba(99,102,241,0.06)', borderColor: '#6366f128' }}>
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <span className="text-5xl">🔄</span>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1">Mises à jour légales incluses à vie</h3>
                <p className="text-gray-400 text-sm">La législation évolue (plafonds AE, taux URSSAF, obligations TVA). Nous mettons le pack à jour à chaque changement — inclus dans votre accès.</p>
              </div>
              <a href="#pricing" className="btn-primary flex-shrink-0 !text-sm"><span>Accéder maintenant</span></a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ══════════════════════════════════════════
          PRICING — 3 paliers
      ══════════════════════════════════════════ */}
      <section id="pricing" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Tarifs</div>
            <h2 className="text-4xl font-bold mb-4">Simple et transparent</h2>
            <p className="text-gray-500">Commencez gratuitement. Évoluez quand vous êtes prêt.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

            {/* Découverte */}
            <div className="card text-center reveal reveal-d1">
              <div className="mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="font-bold text-xl mb-1">Découverte</h3>
              <p className="text-gray-500 text-sm mb-4">Pour tester le concept</p>
              <div className="text-5xl font-black mb-1 text-white">0 <span className="text-xl text-gray-500 font-normal">€</span></div>
              <p className="text-gray-600 text-xs mb-8">Pour toujours — sans carte bancaire</p>
              <ul className="space-y-3 mb-8 text-left">
                {[
                  'Tableau de bord simplifié',
                  '3 modèles de factures',
                  'Calculateur URSSAF basique',
                  'Calendrier fiscal 2026',
                ].map((f) => (
                  <li key={f} className="check-item">
                    <span className="check-icon">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="btn-secondary w-full block text-center !text-sm">Commencer gratuitement</a>
            </div>

            {/* Pro — carte mise en avant */}
            <div className="card gradient-border text-center relative glow reveal reveal-d2 md:-mt-6 md:pb-8">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold tracking-wide" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: 'white' }}>
                ✦ POPULAIRE
              </div>
              <div className="mb-6 mt-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="font-bold text-xl mb-1">Pro</h3>
              <p className="text-gray-500 text-sm mb-4">Pour gérer votre AE au quotidien</p>
              <div className="text-5xl font-black mb-1 text-white">9,99 <span className="text-xl text-gray-500 font-normal">€</span></div>
              <p className="text-gray-600 text-xs mb-8">/ mois — résiliable à tout moment</p>
              <ul className="space-y-3 mb-8 text-left">
                {[
                  'Tout le plan Découverte',
                  'Pack factures illimité + PDF',
                  'CRM clients & projets complet',
                  'Calculateur charges & impôts',
                  'Suivi plafond AE en temps réel',
                  'Mises à jour légales incluses',
                  'Support prioritaire sous 24h',
                ].map((f) => (
                  <li key={f} className="check-item">
                    <span className="check-icon" style={{ color: '#a5b4fc' }}>✓</span>
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="btn-primary w-full block text-center !text-sm"><span>Passer au Pro</span></a>
            </div>

            {/* Entreprise */}
            <div className="card text-center reveal reveal-d3">
              <div className="mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="font-bold text-xl mb-1">Entreprise</h3>
              <p className="text-gray-500 text-sm mb-4">Pour les AE en pleine croissance</p>
              <div className="text-5xl font-black mb-1 text-white">29,99 <span className="text-xl text-gray-500 font-normal">€</span></div>
              <p className="text-gray-600 text-xs mb-8">/ mois — facturation annuelle disponible</p>
              <ul className="space-y-3 mb-8 text-left">
                {[
                  'Tout le plan Pro',
                  'Espace multi-AE (jusqu\'à 3)',
                  'Onboarding personnalisé 1h',
                  'Accès aux formations vidéo',
                  'Intégration comptable sur mesure',
                  'Support téléphonique dédié',
                ].map((f) => (
                  <li key={f} className="check-item">
                    <span className="check-icon">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="btn-secondary w-full block text-center !text-sm">Nous contacter</a>
            </div>

          </div>

          <p className="text-center text-gray-600 text-xs mt-8">
            Paiement sécurisé par Stripe · Aucun engagement · Remboursé sous 14 jours si non satisfait
          </p>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ══════════════════════════════════════════
          TESTIMONIALS — 3 avis freelances français
      ══════════════════════════════════════════ */}
      <section id="testimonials" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Témoignages</div>
            <h2 className="text-4xl font-bold mb-3">
              2 400 auto-entrepreneurs nous font confiance
            </h2>
            <p className="text-gray-500 text-base">Ils ont simplifié leur gestion AE avec IndéKit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="card reveal reveal-d1">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">
                &ldquo;Avant IndéKit, je passais 3h par mois à ressaisir mes factures dans Excel. Maintenant c&apos;est 10 minutes. La vue plafond AE m&apos;a évité un dépassement l&apos;été dernier — ça vaut de l&apos;or !&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="avatar" style={{ background: '#6366f120', color: '#a5b4fc' }}>ML</div>
                <div>
                  <p className="font-semibold text-sm text-white">Marie L.</p>
                  <p className="text-xs text-gray-500">Graphiste freelance · Paris</p>
                </div>
              </div>
            </div>

            <div className="card reveal reveal-d2">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">
                &ldquo;J&apos;avais vraiment peur de me planter sur les déclarations URSSAF. Le calendrier fiscal et le calculateur m&apos;ont rendu ça limpide. Mon expert-comptable a été impressionné par mes tableaux.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="avatar" style={{ background: '#8b5cf620', color: '#c4b5fd' }}>TB</div>
                <div>
                  <p className="font-semibold text-sm text-white">Thomas B.</p>
                  <p className="text-xs text-gray-500">Développeur web · Bordeaux</p>
                </div>
              </div>
            </div>

            <div className="card reveal reveal-d3">
              <div className="stars mb-4">★★★★★</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed text-sm">
                &ldquo;Le CRM clients est une vraie révélation pour mon activité de conseil. Je vois d&apos;un coup d&apos;œil mes devis en cours, mes projets actifs et mes relances à faire. Je gagne facilement 5h par semaine.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="avatar" style={{ background: '#10b98120', color: '#6ee7b7' }}>SC</div>
                <div>
                  <p className="font-semibold text-sm text-white">Sophie C.</p>
                  <p className="text-xs text-gray-500">Consultante marketing · Lyon</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* ══════════════════════════════════════════
          FAQ — questions spécifiques AE
      ══════════════════════════════════════════ */}
      <section id="faq" className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">FAQ</div>
            <h2 className="text-4xl font-bold">Questions fréquentes</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Dois-je avoir Notion pour utiliser IndéKit ?',
                a: 'Oui, Notion est indispensable, mais le plan gratuit suffit. IndéKit est compatible avec Notion Free. Si vous utilisez Notion Pro, vous bénéficiez en plus des synchronisations et automatisations avancées.',
                delay: 'reveal-d1',
              },
              {
                q: 'Le pack couvre-t-il toutes mes obligations légales d\'auto-entrepreneur ?',
                a: 'IndéKit inclut un calendrier fiscal avec toutes les échéances URSSAF bimestrielles, CFE, TVA (si vous en êtes redevable) et les seuils de plafond AE. Nos modèles de factures respectent les mentions légales obligatoires en France pour 2026.',
                delay: 'reveal-d2',
              },
              {
                q: 'Puis-je personnaliser les templates selon mon activité ?',
                a: 'Absolument. Tous les templates Notion sont 100% modifiables : ajoutez vos propres champs, catégories de dépenses, types de prestations ou colonnes personnalisées. IndéKit est une base solide, pas une cage.',
                delay: 'reveal-d3',
              },
              {
                q: 'Les mises à jour légales sont-elles vraiment incluses à vie ?',
                a: 'Oui. Chaque année, les plafonds AE et les taux URSSAF évoluent. Nous mettons à jour le pack dès que la législation change — et vous recevez la nouvelle version sans surcoût, quelle que soit votre formule.',
                delay: 'reveal-d4',
              },
            ].map(({ q, a, delay }) => (
              <details key={q} className={`faq-item card group cursor-pointer reveal ${delay}`}>
                <summary className="font-semibold list-none flex justify-between items-center gap-4 py-1">
                  <span>{q}</span>
                  <span className="faq-icon flex-shrink-0">+</span>
                </summary>
                <p className="mt-4 text-gray-400 leading-relaxed text-sm">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA — glow card
      ══════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto reveal">
          <div className="card glow gradient-border text-center py-14 px-8" style={{ background: 'rgba(99,102,241,0.06)' }}>
            <span className="text-5xl mb-6 block">📋</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Prêt à prendre le contrôle<br />
              <span className="gradient-text">de votre activité ?</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto text-base">
              Rejoignez 2 400 auto-entrepreneurs qui gèrent leur AE sereinement avec IndéKit. Démarrez gratuitement, sans carte bancaire.
            </p>
            <a href="#pricing" className="btn-primary text-base">
              <span>📋 Obtenir IndéKit gratuitement</span>
            </a>
            <p className="text-gray-600 text-xs mt-5">Sans engagement · Accès immédiat · Mises à jour incluses</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER — glassmorphism
      ══════════════════════════════════════════ */}
      <footer className="glass py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl">📋</span>
            <span className="font-bold tracking-tight">
              Indé<span className="gradient-text-accent">Kit</span>
            </span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGU</a>
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-600">&copy; 2026 IndéKit — Tous droits réservés</p>
        </div>
      </footer>

    </main>
  );
}
