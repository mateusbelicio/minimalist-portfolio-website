import Link from 'next/link';

import { navLinks } from '@/config/navigation';

const Navigation = () => {
  return (
    <nav aria-roledescription="main navigation" className="hidden sm:block">
      <ul
        role="menubar"
        aria-orientation="horizontal"
        aria-label="Main navigation"
        className="flex h-full select-none gap-[2.625rem] bg-background text-foreground"
      >
        {navLinks.map((link) => (
          <li key={link.name} className="h-full">
            <Link
              role="menuitem"
              className="label-upper flex h-full items-center whitespace-nowrap transition-colors hover:text-primary focus-visible:border-b focus-visible:border-primary focus-visible:text-primary focus-visible:outline-none"
              href={link.href}
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
