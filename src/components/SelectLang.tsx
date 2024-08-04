"use client"

import Link from 'next/link';
import { useRouter } from 'next/router';

 export const SelectLang = () => {
  const { locale } = useRouter();

  return (
    <nav>
      <Link href="/" locale="es">
        Español
      </Link>
      <Link href="/" locale="en">
        English
      </Link>
    </nav>
  );
}

