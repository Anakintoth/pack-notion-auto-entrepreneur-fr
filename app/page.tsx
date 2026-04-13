export default function Home() {
  return (
    <main className="min-h-screen noise">
      {/* ═══ Navbar — glassmorphism ═══ */}
      <nav className="fixed top-0 w-full z-50 glass-strong">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🗂️</span>
            <span className="text-xl font-bold tracking-tight">AutoPack</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors duration-200">Fonctionnalités</a>
            <a href="#ai" className="hover:text-white transition-colors duration-200">Assistant IA</a>
            <a href="#pricing" className="hover:text-white transition-colors duration-200">Tarifs</a>
            <a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
          </div>
          <a href="#pricing" className="btn-primary !text-sm !px-5 !py-2.5 !rounded-lg"><span>Obtenir le pack</span></a>
        </div>
      </nav>

      {/* ═══ Hero ═══ */}
      <section className="hero-bg relative min-h-screen flex items-center justify-center px-6">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="badge mb-8 reveal">
            🇫🇷 Conçu pour les auto-entrepreneurs en France
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight reveal reveal-d1">
            Gérez votre activité<br />
            <span className="gradient-text">sans le chaos administratif</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed reveal reveal-d2">
            Factures conformes. Suivi URSSAF. Gestion clients. Agenda fiscal.
          </p>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto reveal reveal-d2">
            AutoPack regroupe tous les modèles Notion dont vous avez besoin pour piloter votre auto-entreprise en France — et un assistant IA pour générer vos documents en secondes.
          </p>

          <div className="flex gap-4 justify-center flex-wrap reveal reveal-d3">
            <a href="#pricing" className="btn-primary"><span>🗂️ Obtenir le pack — 27€</span></a>
            <a href="#features" className="btn-secondary">Voir le contenu</a>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-sm text-gray-600 reveal reveal-d4">
            <div className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>●</span> +500 auto-entrepreneurs</div>
            <div className="flex items-center gap-2"><span style={{ color: "#5B8FF0" }}>●</span> 4,9/5 de satisfaction</div>
            <div className="flex items-center gap-2"><span style={{ color: "#F5A623" }}>●</span> Mis à jour 2026</div>
          </div>
        </div>
      </section>

      {/* ═══ What's in the pack ═══ */}
      <section className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="card glow p-1 rounded-2xl reveal">
            <div className="rounded-xl overflow-hidden" style={{ background: "#152240" }}>
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "#2D6BE415" }}>
                <div className="w-3 h-3 rounded-full" style={{ background: "#f85149" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#d29922" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#3fb950" }} />
                <span className="ml-3 text-xs text-gray-600">AutoPack — Tableau de bord auto-entrepreneur</span>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { icon: "🧾", label: "Facturation" },
                    { icon: "📊", label: "Suivi CA / URSSAF" },
                    { icon: "👥", label: "Gestion clients" },
                    { icon: "📅", label: "Agenda fiscal" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg p-4 text-center text-sm" style={{ background: "#2D6BE410", border: "1px solid #2D6BE420" }}>
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="text-gray-400 font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="h-4 rounded-full w-3/4 mb-3" style={{ background: "#2D6BE415" }} />
                <div className="h-4 rounded-full w-1/2" style={{ background: "#2D6BE410" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Features — bento grid ═══ */}
      <section id="features" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Contenu du pack</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">8 modèles Notion prêts à l&apos;emploi</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Chaque modèle est adapté à la réglementation française et livré avec un guide d&apos;utilisation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card reveal reveal-d1">
              <div className="text-3xl mb-3">🧾</div>
              <h3 className="text-lg font-bold mb-2">Générateur de factures</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Factures conformes aux exigences légales françaises : numérotation automatique, mention franchise TVA (art. 293 B CGI), conditions de paiement, pénalités de retard.</p>
            </div>
            <div className="card reveal reveal-d2">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold mb-2">Suivi CA &amp; plafond URSSAF</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Visualisez votre chiffre d&apos;affaires en temps réel, alertes de plafond (77 700 € / 188 700 €), calcul automatique des cotisations bimestrielles.</p>
            </div>
            <div className="card reveal reveal-d3">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold mb-2">CRM clients &amp; missions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Centralisez vos clients, suivez vos missions, gérez les devis et les relances automatiques. Fini les emails éparpillés.</p>
            </div>
            <div className="card reveal reveal-d4">
              <div className="text-3xl mb-3">📅</div>
              <h3 className="text-lg font-bold mb-2">Agenda fiscal &amp; échéances</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Toutes vos échéances fiscales : déclarations URSSAF, CFE, renouvellement ACRE, seuils TVA — ne ratez plus aucune date limite.</p>
            </div>
            <div className="card reveal reveal-d1">
              <div className="text-3xl mb-3">📑</div>
              <h3 className="text-lg font-bold mb-2">Modèle de devis professionnel</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Devis à l&apos;image de votre activité, avec durée de validité, conditions d&apos;acceptation et mentions légales obligatoires.</p>
            </div>
            <div className="card reveal reveal-d2">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-lg font-bold mb-2">Registre des recettes</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Tenu automatique du livre des recettes conforme à l&apos;obligation légale. Exportable en PDF pour votre comptable ou contrôle URSSAF.</p>
            </div>
            <div className="card reveal reveal-d3">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold mb-2">Guide de démarrage</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Checklist complète pour les premiers 90 jours : immatriculation, assurances, ouverture de compte pro, première déclaration URSSAF.</p>
            </div>
            <div className="card reveal reveal-d4">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-bold mb-2">Tableau de bord annuel</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Vision d&apos;ensemble de votre activité : objectifs de CA, évolution mensuelle, taux de conversion devis → factures, top clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AI Assistant section ═══ */}
      <section id="ai" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">✨ Nouveau — Assistant IA</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Générez vos documents en <span className="gradient-text">10 secondes</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto">Décrivez votre besoin en français, l&apos;IA génère le texte prêt à copier dans Notion.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="card reveal reveal-d1">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🧾</span>
                  <div>
                    <h3 className="font-bold mb-1">Rédaction de factures</h3>
                    <p className="text-gray-400 text-sm">Donnez le nom du client, la prestation et le montant — l&apos;IA produit une facture complète avec toutes les mentions légales.</p>
                  </div>
                </div>
              </div>
              <div className="card reveal reveal-d2">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h3 className="font-bold mb-1">Calcul URSSAF instantané</h3>
                    <p className="text-gray-400 text-sm">Entrez votre CA du trimestre — l&apos;IA calcule vos cotisations exactes (taux 2026), la date limite et les points de vigilance.</p>
                  </div>
                </div>
              </div>
              <div className="card reveal reveal-d3">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📑</span>
                  <div>
                    <h3 className="font-bold mb-1">Génération de devis</h3>
                    <p className="text-gray-400 text-sm">Un devis professionnel complet en quelques secondes, adapté à votre secteur d&apos;activité.</p>
                  </div>
                </div>
              </div>
              <div className="card reveal reveal-d4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h3 className="font-bold mb-1">Conseils personnalisés</h3>
                    <p className="text-gray-400 text-sm">Posez vos questions sur la gestion AE — l&apos;IA répond avec des actions concrètes adaptées à votre situation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card glow gradient-border reveal reveal-d2">
              <div className="rounded-xl overflow-hidden" style={{ background: "#0D1A2E" }}>
                <div className="px-4 py-3 border-b text-xs text-gray-500 font-mono" style={{ borderColor: "#2D6BE420" }}>
                  Assistant AutoPack IA
                </div>
                <div className="p-6 space-y-4">
                  <div className="text-sm rounded-lg p-3 text-gray-300" style={{ background: "#2D6BE412", borderLeft: "3px solid #2D6BE4" }}>
                    Génère une facture pour Agence Créative SARL, prestation : refonte de site web, montant 1 500 €
                  </div>
                  <div className="text-sm text-gray-400 space-y-2 font-mono text-xs" style={{ background: "#152240", borderRadius: "8px", padding: "16px" }}>
                    <p className="text-green-400">FACTURE N° FAC-2026-047</p>
                    <p>Date : 13/04/2026</p>
                    <p>Prestataire : [Votre nom]</p>
                    <p>Client : Agence Créative SARL</p>
                    <p>─────────────────────</p>
                    <p>Refonte de site web ... 1 500,00 €</p>
                    <p>─────────────────────</p>
                    <p>Total TTC : 1 500,00 €</p>
                    <p className="text-gray-600 text-xs mt-2">TVA non applicable — art. 293 B du CGI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Pricing ═══ */}
      <section id="pricing" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Tarifs</div>
            <h2 className="text-4xl font-bold mb-4">Simple et transparent</h2>
            <p className="text-gray-500">Paiement unique ou abonnement — choisissez ce qui vous convient.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Gratuit */}
            <div className="card text-center reveal reveal-d1">
              <h3 className="font-bold text-lg mb-2">Découverte</h3>
              <div className="text-4xl font-extrabold mb-1">0 <span className="text-lg text-gray-500">€</span></div>
              <p className="text-gray-500 text-sm mb-8">Pour toujours</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>✓</span> 3 modèles Notion inclus</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>✓</span> Guide de démarrage</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>✓</span> 10 générations IA / mois</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>✓</span> Support communauté</li>
              </ul>
              <a href="#" className="btn-secondary w-full block text-center !text-sm">Commencer gratuitement</a>
            </div>
            {/* Pack Complet — gradient border */}
            <div className="card gradient-border text-center relative glow reveal reveal-d2 md:-mt-4 md:pb-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold" style={{ background: "linear-gradient(135deg, #2D6BE4, #5B8FF0)", color: "white" }}>LE PLUS POPULAIRE</div>
              <h3 className="font-bold text-lg mb-2 mt-2">Pack Complet</h3>
              <div className="text-5xl font-extrabold mb-1">27 <span className="text-lg text-gray-500">€</span></div>
              <p className="text-gray-500 text-sm mb-2">paiement unique</p>
              <p className="text-xs text-green-400 mb-8">Mises à jour incluses à vie</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>✓</span> <strong className="text-white">8 modèles Notion</strong> complets</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>✓</span> Factures + devis conformes</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>✓</span> Suivi CA / URSSAF / plafonds</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>✓</span> Agenda fiscal 2026</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>✓</span> 50 générations IA / mois</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>✓</span> Mises à jour réglementaires</li>
              </ul>
              <a href="#" className="btn-primary w-full block text-center !text-sm"><span>Obtenir le pack — 27 €</span></a>
            </div>
            {/* Pro */}
            <div className="card text-center reveal reveal-d3">
              <h3 className="font-bold text-lg mb-2">Freelance Pro</h3>
              <div className="text-4xl font-extrabold mb-1">9,99 <span className="text-lg text-gray-500">€</span></div>
              <p className="text-gray-500 text-sm mb-8">/ mois</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>✓</span> Tout du Pack Complet</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>✓</span> IA illimitée</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>✓</span> Nouveaux modèles en avant-première</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>✓</span> Support prioritaire par email</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>✓</span> Alertes réglementaires</li>
              </ul>
              <a href="#" className="btn-secondary w-full block text-center !text-sm">S&apos;abonner</a>
            </div>
          </div>
          <p className="text-center text-xs text-gray-600 mt-8">Paiement sécurisé par Stripe. Satisfait ou remboursé sous 14 jours.</p>
        </div>
      </section>

      {/* ═══ Testimonials ═══ */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Témoignages</div>
            <h2 className="text-4xl font-bold">Ils ont adopté AutoPack</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card reveal reveal-d1">
              <div className="flex gap-1 mb-4 text-lg">★★★★★</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">&ldquo;En 30 minutes j&apos;avais tout configuré. Fini les tableurs bricolés — le suivi URSSAF me sauve chaque trimestre.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "#2D6BE420", color: "#2D6BE4" }}>C</div>
                <div>
                  <p className="font-semibold text-sm">Camille Renard</p>
                  <p className="text-xs text-gray-500">Graphiste freelance, Lyon</p>
                </div>
              </div>
            </div>
            <div className="card reveal reveal-d2">
              <div className="flex gap-1 mb-4 text-lg">★★★★★</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">&ldquo;Le suivi du plafond m&apos;a évité de dépasser les 77 700 € sans m&apos;en rendre compte. Un must-have pour tout AE.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "#2D6BE420", color: "#2D6BE4" }}>T</div>
                <div>
                  <p className="font-semibold text-sm">Thomas Girard</p>
                  <p className="text-xs text-gray-500">Consultant marketing digital, Paris</p>
                </div>
              </div>
            </div>
            <div className="card reveal reveal-d3">
              <div className="flex gap-1 mb-4 text-lg">★★★★★</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">&ldquo;L&apos;assistant IA m&apos;a généré ma première facture en 10 secondes — avec les bonnes mentions légales. Bluffant.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "#2D6BE420", color: "#2D6BE4" }}>S</div>
                <div>
                  <p className="font-semibold text-sm">Sophie Mercier</p>
                  <p className="text-xs text-gray-500">Rédactrice web, Bordeaux</p>
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
            <div className="badge mb-4">FAQ</div>
            <h2 className="text-4xl font-bold">Questions fréquentes</h2>
          </div>
          <div className="space-y-4">
            <details className="card group cursor-pointer reveal reveal-d1">
              <summary className="font-semibold list-none flex justify-between items-center">
                Faut-il maîtriser Notion pour utiliser AutoPack ?
                <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">Non. Chaque modèle est livré avec un guide pas à pas. Si vous savez copier un lien et ouvrir une page, vous pouvez utiliser AutoPack — même débutant complet sur Notion.</p>
            </details>
            <details className="card group cursor-pointer reveal reveal-d2">
              <summary className="font-semibold list-none flex justify-between items-center">
                Les modèles sont-ils à jour avec la réglementation 2026 ?
                <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">Oui. Tous les modèles intègrent les spécificités 2026 : plafonds de CA, taux de cotisations URSSAF, seuils TVA, mentions légales obligatoires sur les factures (art. 293 B CGI). Les mises à jour sont incluses dans tous les plans.</p>
            </details>
            <details className="card group cursor-pointer reveal reveal-d3">
              <summary className="font-semibold list-none flex justify-between items-center">
                Comment fonctionne l&apos;assistant IA ?
                <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">Il est directement intégré à AutoPack. Décrivez votre besoin (générer une facture, calculer vos cotisations, rédiger un devis) et l&apos;IA génère un texte complet prêt à copier dans votre espace Notion. Il connaît les règles spécifiques à l&apos;auto-entrepreneuriat français.</p>
            </details>
            <details className="card group cursor-pointer reveal reveal-d4">
              <summary className="font-semibold list-none flex justify-between items-center">
                Est-ce un abonnement ou un achat unique ?
                <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">Le Pack Complet est un paiement unique de 27 € avec mises à jour incluses à vie. Le plan Freelance Pro (9,99 €/mois) ajoute l&apos;IA illimitée et les nouvelles fonctionnalités en avant-première. Vous pouvez annuler à tout moment.</p>
            </details>
            <details className="card group cursor-pointer reveal reveal-d1">
              <summary className="font-semibold list-none flex justify-between items-center">
                Puis-je être remboursé si ça ne me convient pas ?
                <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">Oui. Satisfait ou remboursé sous 14 jours, sans question. Envoyez un email à contact@autopack.app et vous serez remboursé intégralement.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ═══ Final CTA ═══ */}
      <section className="py-28 px-6">
        <div className="max-w-2xl mx-auto text-center card glow gradient-border reveal">
          <div className="py-4">
            <span className="text-4xl mb-6 block">🗂️</span>
            <h2 className="text-3xl font-bold mb-4">Prêt à reprendre le contrôle ?</h2>
            <p className="text-gray-400 mb-2 max-w-md mx-auto">Rejoignez 500+ auto-entrepreneurs qui pilotent leur activité sereinement avec AutoPack.</p>
            <p className="text-gray-600 text-sm mb-8">Paiement unique · Mises à jour à vie · Remboursé si insatisfait</p>
            <a href="#pricing" className="btn-primary"><span>Obtenir le pack — 27 €</span></a>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="glass py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl">🗂️</span>
            <span className="font-bold tracking-tight">AutoPack</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGU</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-600">&copy; 2026 AutoPack. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
