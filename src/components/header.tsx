import Link from 'next/link';

import Icons from './icons';
import MobileNavigation from './mobile-navigation';
import Navigation from './navigation';

const Header = () => {
  return (
    <header className="pt-8 sm:pt-12 lg:pt-16">
      <div className="main-container flex justify-between">
        <Link
          href="/"
          className="flex-shrink-0 text-secondary outline-none outline-1 transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-primary"
          aria-label="Go to home page"
        >
          <Icons name="logo" />
        </Link>

        <Navigation />
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
