'use client';

import { MouseEventHandler, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import { navLinks } from '@/config/navigation';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

import Icons from './icons';

const MobileNavigation = () => {
  const { isOpen, ref, id, handleClick } = useMobileNavigation();

  return (
    <nav aria-roledescription="main navigation" className="relative flex sm:hidden">
      <button
        id={`${id}button-menu`}
        aria-label="Navigation Menu"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={`${id}nav-menu`}
        onClick={handleClick}
        className="relative z-50 my-auto flex h-6 w-6 items-center justify-center outline-none outline-1 hover:text-primary focus-visible:text-primary focus-visible:outline-primary"
      >
        <Icons name={isOpen ? 'close' : 'menu'} />
      </button>
      <ul
        ref={ref}
        id={`${id}nav-menu`}
        role="menu"
        aria-orientation="vertical"
        aria-label="Main navigation"
        className={twMerge(
          'invisible absolute right-0 top-full z-40 mt-6 flex origin-top-right select-none flex-col bg-foreground py-6 text-background transition-all',
          isOpen && 'visible translate-x-0 translate-y-0 scale-100 opacity-100 ease-out',
          !isOpen && 'invisible -translate-y-4 scale-90 opacity-0 ease-in'
        )}
      >
        {navLinks.map((link) => (
          <li role="menuitem" key={link.name}>
            <Link
              className="label-upper flex items-center justify-center whitespace-nowrap px-16 py-4 outline-none outline-1 hover:text-primary focus-visible:bg-black/10 focus-visible:text-primary focus-visible:-outline-offset-2 focus-visible:outline-primary"
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

export default MobileNavigation;

const useMobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (ev) => {
    setIsOpen((currentState) => !currentState);
  };

  const handleClickOutside = () => {
    if (isOpen) setIsOpen(false);
  };

  const ref = useOnClickOutside(handleClickOutside);

  return { isOpen, ref, id, handleClick };
};
