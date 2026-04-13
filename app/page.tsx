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
            <a href="#features" className="hover:text-white transition-colors duration-200">Fonctionnalites</a>
            <a href="#pricing" className="hover:text-white transition-colors duration-200">Tarifs</a>
            <a href="#faq" className="hover:text-white transition-colors duration-200">FAQ</a>
          </div>
          <a href="#pricing" className="btn-primary !text-sm !px-5 !py-2.5 !rounded-lg"><span>Commencer</span></a>
        </div>
      </nav>

      {/* ═══ Hero — floating orbs + gradient mesh ═══ */}
      <section className="hero-bg relative min-h-screen flex items-center justify-center px-6">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="badge mb-8 reveal">
            🗂️ Disponible maintenant
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight reveal reveal-d1">
            <span className="gradient-text">AutoPack</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed reveal reveal-d2">Tout ce qu'il faut pour se lancer</p>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto reveal reveal-d2">AutoPack centralise tous les modèles Notion essentiels pour lancer et gérer son activité d'auto-entrepreneur en France, sans perdre de temps sur l'administratif.</p>

          <div className="flex gap-4 justify-center flex-wrap reveal reveal-d3">
            <a href="#pricing" className="btn-primary"><span>🗂️ Commencer gratuitement</span></a>
            <a href="#features" className="btn-secondary">Decouvrir</a>
          </div>

          <div className="mt-16 flex justify-center gap-8 text-sm text-gray-600 reveal reveal-d4">
            <div className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>&#9679;</span> 500+ utilisateurs</div>
            <div className="flex items-center gap-2"><span style={{ color: "#5B8FF0" }}>&#9679;</span> 4.9/5 satisfaction</div>
            <div className="flex items-center gap-2"><span style={{ color: "#F5A623" }}>&#9679;</span> Support 24/7</div>
          </div>
        </div>
      </section>

      {/* ═══ UI Mockup showcase ═══ */}
      <section className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="card glow p-1 rounded-2xl reveal">
            <div className="rounded-xl overflow-hidden" style={{ background: "#152240" }}>
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "#2D6BE415" }}>
                <div className="w-3 h-3 rounded-full" style={{ background: "#f85149" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#d29922" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#3fb950" }} />
                <span className="ml-3 text-xs text-gray-600">autopack.app</span>
              </div>
              <div className="p-8 space-y-4">
                <div className="h-4 rounded-full w-3/4" style={{ background: "#2D6BE415" }} />
                <div className="h-4 rounded-full w-1/2" style={{ background: "#2D6BE410" }} />
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="h-24 rounded-lg" style={{ background: "#2D6BE408", border: "1px solid #2D6BE415" }} />
                  <div className="h-24 rounded-lg" style={{ background: "#5B8FF008", border: "1px solid #5B8FF015" }} />
                  <div className="h-24 rounded-lg" style={{ background: "#F5A62308", border: "1px solid #F5A62315" }} />
                </div>
                <div className="h-4 rounded-full w-2/3 mt-4" style={{ background: "#2D6BE410" }} />
                <div className="h-4 rounded-full w-1/3" style={{ background: "#2D6BE408" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Features — bento grid ═══ */}
      <section id="features" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Fonctionnalites</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Tout ce qu&apos;il vous faut</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Des outils puissants, une experience fluide.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card reveal reveal-d1">
              <p className="text-lg font-medium leading-relaxed">📋 Modèles Notion prêts à l'emploi pour l'admin et la facturation</p>
            </div>
            <div className="card reveal reveal-d2">
              <p className="text-lg font-medium leading-relaxed">🧾 Suivi des revenus et du plafond URSSAF automatisé</p>
            </div>
            <div className="card reveal reveal-d3">
              <p className="text-lg font-medium leading-relaxed">📅 Tableau de bord clients, missions et relances intégré</p>
            </div>
            <div className="card reveal reveal-d4">
              <p className="text-lg font-medium leading-relaxed">🚀 Guide de démarrage pas à pas adapté au statut français</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Pricing — animated gradient border on Pro ═══ */}
      <section id="pricing" className="py-28 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Tarifs</div>
            <h2 className="text-4xl font-bold mb-4">Simple et transparent</h2>
            <p className="text-gray-500">Commencez gratuitement. Evoluez quand vous etes pret.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Free */}
            <div className="card text-center reveal reveal-d1">
              <h3 className="font-bold text-lg mb-2">Découverte</h3>
              <div className="text-4xl font-extrabold mb-1">0<span className="text-lg text-gray-500">EUR</span></div>
              <p className="text-gray-500 text-sm mb-8">Pour toujours</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>&#10003;</span> Fonctions de base</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>&#10003;</span> 5 utilisations / jour</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>&#10003;</span> Support communautaire</li>
              </ul>
              <a href="#" className="btn-secondary w-full block text-center !text-sm">Commencer</a>
            </div>
            {/* Pro — gradient border */}
            <div className="card gradient-border text-center relative glow reveal reveal-d2 md:-mt-4 md:pb-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold" style={{ background: "linear-gradient(135deg, #2D6BE4, #5B8FF0)", color: "white" }}>POPULAIRE</div>
              <h3 className="font-bold text-lg mb-2 mt-2">Freelance Pro</h3>
              <div className="text-5xl font-extrabold mb-1">9.99<span className="text-lg text-gray-500">EUR</span></div>
              <p className="text-gray-500 text-sm mb-8">/ mois</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>&#10003;</span> Tout du plan Découverte</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>&#10003;</span> Utilisations illimitees</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>&#10003;</span> Support prioritaire</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>&#10003;</span> Export PDF / API</li>
              </ul>
              <a href="#" className="btn-primary w-full block text-center !text-sm"><span>Souscrire</span></a>
            </div>
            {/* Enterprise */}
            <div className="card text-center reveal reveal-d3">
              <h3 className="font-bold text-lg mb-2">Studio</h3>
              <div className="text-4xl font-extrabold mb-1">24.99<span className="text-lg text-gray-500">EUR</span></div>
              <p className="text-gray-500 text-sm mb-8">/ mois</p>
              <ul className="text-sm text-gray-400 space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>&#10003;</span> Tout du plan Freelance Pro</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>&#10003;</span> Multi-utilisateurs</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>&#10003;</span> SLA garanti</li>
                <li className="flex items-center gap-2"><span style={{ color: "#2D6BE4" }}>&#10003;</span> Integration sur mesure</li>
              </ul>
              <a href="#" className="btn-secondary w-full block text-center !text-sm">Contacter</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Testimonials — glass cards with avatars ═══ */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">Temoignages</div>
            <h2 className="text-4xl font-bold">Ils nous font confiance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card reveal reveal-d1">
              <div className="flex gap-1 mb-4" style={{ color: "#F5A623" }}>*****</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"En 30 minutes j'avais tout configuré. Fini les tableurs bricolés, AutoPack gère tout proprement."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "#2D6BE420", color: "#2D6BE4" }}>C</div>
                <div>
                  <p className="font-semibold text-sm">Camille Renard</p>
                  <p className="text-xs text-gray-500">Graphiste freelance</p>
                </div>
              </div>
            </div>
            <div className="card reveal reveal-d2">
              <div className="flex gap-1 mb-4" style={{ color: "#F5A623" }}>*****</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"Le suivi du plafond URSSAF m'a évité une mauvaise surprise. Un must-have pour tout auto-entrepreneur."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "#2D6BE420", color: "#2D6BE4" }}>T</div>
                <div>
                  <p className="font-semibold text-sm">Thomas Girard</p>
                  <p className="text-xs text-gray-500">Consultant en marketing digital</p>
                </div>
              </div>
            </div>
            <div className="card reveal reveal-d3">
              <div className="flex gap-1 mb-4" style={{ color: "#F5A623" }}>*****</div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"Enfin un pack Notion pensé pour la France. Clair, complet, et vraiment bien conçu."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "#2D6BE420", color: "#2D6BE4" }}>S</div>
                <div>
                  <p className="font-semibold text-sm">Sophie Mercier</p>
                  <p className="text-xs text-gray-500">Rédactrice web indépendante</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ — expandable glass cards ═══ */}
      <section id="faq" className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge mb-4">FAQ</div>
            <h2 className="text-4xl font-bold">Questions frequentes</h2>
          </div>
          <div className="space-y-4">
            <details className="card group cursor-pointer reveal reveal-d1">
              <summary className="font-semibold list-none flex justify-between items-center">
                Faut-il maîtriser Notion pour utiliser AutoPack ?
                <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">Non, le pack est conçu pour les débutants comme pour les utilisateurs avancés. Chaque modèle est livré avec un guide d'utilisation pas à pas.</p>
            </details>
            <details className="card group cursor-pointer reveal reveal-d2">
              <summary className="font-semibold list-none flex justify-between items-center">
                Les modèles sont-ils adaptés à la réglementation française ?
                <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">Oui, tous les modèles prennent en compte les spécificités du statut auto-entrepreneur en France : plafonds de chiffre d'affaires, déclarations URSSAF, mentions légales sur les factures.</p>
            </details>
            <details className="card group cursor-pointer reveal reveal-d3">
              <summary className="font-semibold list-none flex justify-between items-center">
                Puis-je mettre à jour le pack après l'achat ?
                <span className="text-gray-500 group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed">Absolument. Les abonnés Freelance Pro et Studio reçoivent toutes les mises à jour gratuitement, y compris les nouveaux modèles ajoutés au fil des évolutions réglementaires.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ═══ Final CTA — glow card ═══ */}
      <section className="py-28 px-6">
        <div className="max-w-2xl mx-auto text-center card glow gradient-border reveal">
          <div className="py-4">
            <span className="text-4xl mb-6 block">🗂️</span>
            <h2 className="text-3xl font-bold mb-4">Pret a commencer ?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Tout ce qu'il faut pour se lancer</p>
            <a href="#pricing" className="btn-primary"><span>Essayer AutoPack gratuitement</span></a>
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
            <a href="#" className="hover:text-white transition-colors">Confidentialite</a>
            <a href="#" className="hover:text-white transition-colors">CGU</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm text-gray-600">&copy; 2026 AutoPack. Tous droits reserves.</p>
        </div>
      </footer>
    </main>
  );
}
