import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary py-14 text-secondary-foreground md:py-6">
      <div className="main-container flex flex-col gap-10 text-center md:mr-auto md:flex-row md:gap-12">
        <img src="/logo.svg" alt="Logo" className="mx-auto flex-shrink-0 md:mx-0" />
        <ul className="flex flex-col items-center gap-8 whitespace-nowrap md:flex-row md:gap-10">
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
        <ul className="flex items-center justify-center gap-4 md:ml-auto md:flex-row md:gap-10">
          <li>
            <Link href="/" className="label-upper">
              GIT
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="label-upper">
              INS
            </Link>
          </li>
          <li>
            <Link href="/contact" className="label-upper">
              LIN
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
