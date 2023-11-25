import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary py-14 text-secondary-foreground">
      <div className="main-container grid gap-10 text-center">
        <img src="/logo.svg" alt="Logo" className="mx-auto" />
        <ul className="flex flex-col items-center gap-8">
          <li>
            <Link href="/" className="label-upper">
              Home
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="label-upper">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="label-upper">
              Contact me
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
