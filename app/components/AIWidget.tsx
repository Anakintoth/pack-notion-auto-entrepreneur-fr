'use client';

import { useState } from 'react';

type TabType = 'facture' | 'urssaf' | 'devis' | 'conseil';

const tabs: { id: TabType; label: string; icon: string }[] = [
  { id: 'facture', label: 'Facture', icon: '🧾' },
  { id: 'urssaf', label: 'URSSAF', icon: '📊' },
  { id: 'devis', label: 'Devis', icon: '📑' },
  { id: 'conseil', label: 'Conseil', icon: '💡' },
];

const fieldsByType: Record<TabType, { key: string; label: string; placeholder: string }[]> = {
  facture: [
    { key: 'client', label: 'Nom du client', placeholder: 'Agence Créative SARL' },
    { key: 'prestation', label: 'Prestation', placeholder: 'Refonte de site web' },
    { key: 'montant', label: 'Montant (€)', placeholder: '1500' },
  ],
  urssaf: [
    { key: 'ca', label: 'CA du trimestre (€)', placeholder: '8 500' },
    { key: 'activite', label: "Type d'activité", placeholder: 'Prestation de services BIC' },
    { key: 'periode', label: 'Période', placeholder: 'T1 2026' },
  ],
  devis: [
    { key: 'client', label: 'Nom du client', placeholder: 'StartupXYZ' },
    { key: 'prestation', label: 'Mission', placeholder: 'Audit SEO + stratégie de contenus' },
    { key: 'tarif', label: 'Tarif', placeholder: '2 400 €' },
  ],
  conseil: [
    { key: 'secteur', label: "Secteur d'activité", placeholder: 'Développement web' },
    { key: 'ca', label: 'CA annuel estimé (€)', placeholder: '35 000' },
    { key: 'probleme', label: 'Votre problématique', placeholder: 'Optimiser ma trésorerie' },
  ],
};

export default function AIWidget() {
  const [activeTab, setActiveTab] = useState<TabType>('facture');
  const [fields, setFields] = useState<Record<string, string>>({});
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    setLoading(true);
    setResult('');
    setError('');
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: activeTab, data: fields }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Erreur inconnue');
      setResult(json.result);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Erreur lors de la génération.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setFields({});
    setResult('');
    setError('');
  };

  return (
    <div className="ai-widget card glow gradient-border">
      <p className="text-xs text-gray-500 mb-4 font-mono">Assistant AutoPack IA — démo en direct</p>

      {/* Tab bar */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`ai-tab${activeTab === tab.id ? ' ai-tab-active' : ''}`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Fields */}
      <div className="space-y-3 mb-4">
        {fieldsByType[activeTab].map((f) => (
          <div key={f.key}>
            <label className="text-xs text-gray-500 mb-1 block">{f.label}</label>
            <input
              type="text"
              placeholder={f.placeholder}
              value={fields[f.key] ?? ''}
              onChange={(e) => setFields((prev) => ({ ...prev, [f.key]: e.target.value }))}
              className="ai-input"
            />
          </div>
        ))}
      </div>

      {/* Generate button */}
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="btn-primary w-full !text-sm !py-3 !rounded-xl mb-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        <span>{loading ? '⏳ Génération en cours…' : "✨ Générer avec l'IA"}</span>
      </button>

      {/* Error */}
      {error && (
        <div
          className="text-red-400 text-sm p-3 rounded-lg mb-4"
          style={{ background: '#ff000015', border: '1px solid #ff000025' }}
        >
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="relative">
          <pre className="ai-result">{result}</pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 text-xs px-3 py-1.5 rounded-lg transition-all"
            style={{
              background: copied ? '#22c55e20' : '#2D6BE420',
              color: copied ? '#22c55e' : '#2D6BE4',
              border: `1px solid ${copied ? '#22c55e30' : '#2D6BE430'}`,
            }}
          >
            {copied ? '✓ Copié !' : 'Copier'}
          </button>
        </div>
      )}
    </div>
  );
}
