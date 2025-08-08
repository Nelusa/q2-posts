'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold transition-colors">
              <Image src="/logo.svg" alt="Q2 logo" width={81} height={54} />
            </Link>
          </div>

          <nav className="flex space-x-10">
            <Link
              href="/"
              className={cn(
                "py-2 px-3 rounded-md text-sm font-medium transition-colors relative text-white ",
                pathname === '/'
                  ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent'
                  : 'hover:text-white hover:bg-black/20'
              )}
            >
              Blog
            </Link>
            <Link
              href="/create"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors relative text-white",
                pathname === '/create'
                  ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent'
                  : 'hover:bg-black/20'
              )}
            >
              Přidat článek
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
