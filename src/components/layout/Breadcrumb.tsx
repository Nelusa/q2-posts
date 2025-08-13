import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href && !item.isCurrent ? (
              <Link
                href={item.href}
                className="text-text-secondary hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  item.isCurrent ? "text-accent font-medium" : "text-text-secondary"
                )}
                aria-current={item.isCurrent ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <ChevronRightIcon className="w-4 h-4 text-text-secondary ml-2 flex-shrink-0" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
