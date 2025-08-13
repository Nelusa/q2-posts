import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {ReactNode} from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isMobile?: boolean;
}

export default function NavLink({
  href,
  children,
  onClick,
  isMobile = false
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const baseClasses = "transition-all duration-200 ease-in-out text-white text-sm font-bold";

  const desktopClasses = cn(
    baseClasses,
    "py-2 px-3 rounded-md relative",
    isActive
      ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:transition-all after:duration-200"
      : "hover:bg-black/30 hover:text-white"
  );

  const mobileClasses = cn(
    baseClasses,
    "py-3 px-4 rounded-md",
    isActive
      ? "bg-black/30 text-accent"
      : "hover:bg-black/30 hover:text-white"
  );

  return (
    <Link
      href={href}
      className={isMobile ? mobileClasses : desktopClasses}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
