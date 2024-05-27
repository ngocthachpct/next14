"use client";

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from './header/header';

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {pathname !== '/login' && <Header />}
      {children}
    </>
  );
}
