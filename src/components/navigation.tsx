'use client';

import { useState } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import { navLinks } from '@/config/navigation';

import Icons from './icons';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-roledescription="main navigation" className="relative">
      <button
        className="sm:hidden"
        aria-label="Navigation Menu"
        aria-haspopup="menu"
        onClick={() => setIsOpen((currentState) => !currentState)}
      >
        <Icons name={isOpen ? 'close' : 'menu'} />
      </button>
      <ul
        className={twMerge(
          'invisible absolute right-0 top-full z-50 mt-6 flex origin-top-right select-none flex-col items-center gap-8 bg-foreground px-16 py-10 text-background transition-all sm:visible sm:static sm:flex-row sm:gap-[2.625rem] sm:bg-background sm:px-0 sm:py-0 sm:text-foreground',
          isOpen && 'visible translate-x-0 translate-y-0 scale-100 opacity-100 ease-out',
          !isOpen && 'invisible -translate-y-4 scale-90 opacity-0 ease-in'
        )}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link className="label-upper whitespace-nowrap hover:text-primary" href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
