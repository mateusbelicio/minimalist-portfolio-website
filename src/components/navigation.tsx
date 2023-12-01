import Link from 'next/link';

import { navLinks } from '@/config/navigation';

const Navigation = () => {
  return (
    <nav aria-roledescription="main navigation" className="relative">
      <button className="sm:hidden">Menu</button>
      <ul className="invisible absolute flex flex-col items-center gap-8 sm:visible sm:static sm:flex-row sm:gap-[2.625rem]">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link className="label-upper hover:text-primary" href={link.href}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
