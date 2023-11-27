import Image from 'next/image';

import AboutSection from '@/components/sections/about';
import CallToActionSection from '@/components/sections/call-to-action';
import HeroSection from '@/components/sections/hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <CallToActionSection />
    </main>
  );
}
