import { Link } from 'react-router-dom';
import TALogo, { TASymbol } from './TALogo';
import { footer } from '@/data/content';

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-900">
      <div className="container-base py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <TALogo size={36} onDark />
            <p className="max-w-xs text-sm leading-relaxed text-gray-400">{footer.tagline}</p>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gold-400/90">{col.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 sm:flex-row">
          <div className="flex items-center gap-2 text-gray-500">
            <TASymbol size={16} className="text-gold-400/70" />
            <span className="text-xs tracking-wider">{footer.copyright}</span>
          </div>
          <span className="text-xs text-gray-600">All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
