import Navigation from './navigation';

const Header = () => {
  return (
    <header className="pt-8 sm:pt-12 lg:pt-16">
      <div className="main-container flex items-center justify-between">
        <img src="/logo.svg" alt="Alex Spencer Logo" />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
