import Link from 'next/link';

import { navLinks, socialLinks } from '@/config/navigation';

import Icons from './icons';

const Footer = () => {
  return (
    <footer className="bg-secondary py-14 text-secondary-foreground md:py-6">
      <div className="main-container flex flex-col gap-10 text-center md:flex-row md:gap-12">
        <Link
          href="/"
          aria-label="Go to start"
          className="mx-auto flex-shrink-0 text-secondary-foreground md:mx-0"
        >
          <Icons name="logo" />
        </Link>
        <ul className="flex flex-col items-center gap-8 whitespace-nowrap md:flex-row md:gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="label-upper">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center gap-4 md:ml-auto">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <Link href="/" className="label-upper" aria-label={`My profile on ${link.name}`}>
                <Icons name={link.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
