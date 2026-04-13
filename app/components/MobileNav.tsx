'use client';

import { useState, useEffect } from 'react';

const links = [
  { href: '#features', label: 'Fonctionnalités' },
  { href: '#ai', label: 'Assistant IA' },
  { href: '#pricing', label: 'Tarifs' },
  { href: '#faq', label: 'FAQ' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <button
        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg transition-colors hover:bg-white/5"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={open}
      >
        <span
          className="block h-0.5 w-5 rounded-full transition-all duration-300"
          style={{
            background: '#e2e8f0',
            transform: open ? 'translateY(8px) rotate(45deg)' : 'none',
          }}
        />
        <span
          className="block h-0.5 w-5 rounded-full transition-all duration-300"
          style={{
            background: '#e2e8f0',
            opacity: open ? 0 : 1,
          }}
        />
        <span
          className="block h-0.5 w-5 rounded-full transition-all duration-300"
          style={{
            background: '#e2e8f0',
            transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none',
          }}
        />
      </button>

      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-opacity duration-300"
        style={{
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-72 z-50 md:hidden transition-transform duration-300"
        style={{
          background: 'rgba(7,6,15,0.97)',
          backdropFilter: 'blur(40px)',
          borderLeft: '1px solid rgba(124,58,237,0.15)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <nav className="flex flex-col gap-2 p-8 pt-24">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-lg font-semibold text-gray-300 hover:text-white transition-colors py-2 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="btn-primary mt-6 text-center !text-sm !py-3 !rounded-xl"
            onClick={() => setOpen(false)}
          >
            <span>🧾 Obtenir le pack</span>
          </a>
        </nav>
      </div>
    </>
  );
}
