import { ReactNode } from 'react';
import Hero from '@/components/layout/Hero';
import Container from './Container';
import {cn} from "@/lib/utils";

interface PageLayoutProps {
  heroTitle: string;
  children: ReactNode;
  containerClassName?: string;
}

export default function BasePageLayout({
  heroTitle,
  children,
  containerClassName
}: PageLayoutProps) {
  return (
    <div>
      <Hero title={heroTitle} />
      <Container className={cn(containerClassName, "py-12")}>
        {children}
      </Container>
    </div>
  );
}
