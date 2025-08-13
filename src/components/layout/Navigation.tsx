'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Container from '@/components/layout/Container';
import NavLink from '@/components/layout/NavLink';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md text-white">
      <Container>
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold transition-all duration-200 ease-in-out hover:opacity-80"
              aria-label="Přejít na hlavní stránku"
            >
              <Image src="/logo.svg" alt="Q2 logo" width={81} height={54} />
            </Link>
          </div>

          <nav className="hidden sm:flex space-x-10" role="navigation" aria-label="Hlavní navigace">
            <NavLink href="/">Blog</NavLink>
            <NavLink href="/create">Přidat článek</NavLink>
          </nav>

          <button
            className="sm:hidden p-2 rounded-md text-white hover:bg-black/20 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Otevřít menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            className="sm:hidden py-4 border-t border-white/20 transition-all duration-200 ease-in-out"
            role="navigation"
            aria-label="Mobilní navigace"
          >
            <div className="flex flex-col space-y-2">
              <NavLink
                href="/public"
                isMobile
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink
                href="/create"
                isMobile
                onClick={() => setIsMenuOpen(false)}
              >
                Přidat článek
              </NavLink>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
