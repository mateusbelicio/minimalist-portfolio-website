'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/config/navigation';

const Navigation = () => {
  const path = usePathname();
  const currentPath = `/${path.split('/').slice(1).at(0)}`;

  return (
    <nav aria-roledescription="main navigation" className="hidden sm:block">
      <ul
        role="menubar"
        aria-orientation="horizontal"
        aria-label="Main navigation"
        className="flex h-full select-none gap-[2.625rem] bg-background text-foreground"
      >
        {navLinks.map((link) => (
          <li key={link.name} className="h-full" role="menuitem">
            <Link
              className="label-upper flex h-full items-center whitespace-nowrap transition-colors hover:text-primary focus-visible:border-b focus-visible:border-primary focus-visible:text-primary focus-visible:outline-none data-[active=true]:text-primary"
              href={link.href}
              data-active={currentPath === link.href ? true : false}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
