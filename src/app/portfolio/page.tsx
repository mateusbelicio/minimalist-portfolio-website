import CallToActionSection from '@/components/sections/call-to-action';
import PortfolioSection from '@/components/sections/portfolio';

function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col">
      <PortfolioSection />
      <CallToActionSection />
    </main>
  );
}

export default Portfolio;
