import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import TALogo from './TALogo';
import { navItems } from '@/data/content';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMobileSub(null);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-gray-200 bg-white/90 backdrop-blur-xl'
            : 'border-b border-transparent bg-white'
        }`}
      >
        <div className="container-base flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="shrink-0 transition-opacity hover:opacity-90" aria-label="Titan Axis Corporation — Home">
            <TALogo size={scrolled ? 34 : 36} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.to}
                  className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.to)
                      ? 'text-gold-600'
                      : 'text-gray-600 hover:text-ink-900'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} className={`transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                      openDropdown === item.label
                        ? 'visible opacity-100 translate-y-0'
                        : 'invisible opacity-0 -translate-y-1'
                    }`}
                  >
                    <div className="w-72 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-xl shadow-gray-200/60">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-gray-50"
                        >
                          <div className="text-sm font-semibold text-ink-900">{child.label}</div>
                          <div className="mt-0.5 text-xs text-gray-400">{child.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-900 transition-colors hover:bg-gray-100 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${mobileOpen ? 'visible' : 'invisible'}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-ink-900/30 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto border-l border-gray-200 bg-white transition-transform duration-400 ease-smooth ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <TALogo size={32} />
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-900 transition-colors hover:bg-gray-100"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col px-4 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center">
                  <Link
                    to={item.to}
                    className={`flex-1 rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                      isActive(item.to) ? 'text-gold-600' : 'text-ink-900 hover:text-gold-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-ink-900"
                      onClick={() => setOpenMobileSub(openMobileSub === item.label ? null : item.label)}
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${openMobileSub === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}
                </div>
                {item.children && openMobileSub === item.label && (
                  <div className="flex flex-col pb-2 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="rounded-lg px-3 py-2.5 text-sm text-gray-500 transition-colors hover:text-gold-600"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
