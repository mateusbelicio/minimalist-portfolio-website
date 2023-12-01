import Link from 'next/link';

import Icons from './icons';
import Navigation from './navigation';

const Header = () => {
  return (
    <header className="pt-8 sm:pt-12 lg:pt-16">
      <div className="main-container flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Icons name="logo" className="text-secondary" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
