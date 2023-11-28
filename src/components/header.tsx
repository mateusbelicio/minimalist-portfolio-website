import Icons from './icons';
import Navigation from './navigation';

const Header = () => {
  return (
    <header className="pt-8 sm:pt-12 lg:pt-16">
      <div className="main-container flex items-center justify-between">
        <Icons name="logo" path="ui" className="text-secondary" />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
