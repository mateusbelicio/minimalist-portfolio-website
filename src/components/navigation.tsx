import Link from 'next/link';

const Navigation = () => {
  return (
    <nav aria-roledescription="main navigation" className="relative">
      <button className="sm:hidden">Menu</button>
      <ul className="invisible absolute flex flex-col items-center gap-8 sm:gap-[2.625rem] sm:visible sm:static sm:flex-row">
        <li>
          <Link className="label-upper hover:text-primary" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="label-upper hover:text-primary" href="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="label-upper hover:text-primary" href="/contact">
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
