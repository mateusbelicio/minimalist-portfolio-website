import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary py-14 text-secondary-foreground sm:py-6">
      <div className="main-container flex flex-col gap-10 text-center sm:mr-auto sm:flex-row sm:gap-12">
        <img src="/logo.svg" alt="Logo" className="mx-auto sm:mx-0" />
        <ul className="flex flex-col items-center gap-8 sm:flex-row sm:gap-10">
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
