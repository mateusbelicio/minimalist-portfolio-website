import Image from 'next/image';
import Link from 'next/link';
import profileImage from '~/public/images/homepage/image-homepage-profile@2x.webp';

import { shimmer, toBase64 } from '@/lib/utils';

import { Button } from '../ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="pt-24 lg:pt-[9.375rem]">
      <div className="main-container main-grid">
        <div className="relative h-[21.625rem] w-full sm:col-start-1 sm:col-end-6 sm:row-start-1 sm:h-full lg:col-end-7">
          <Image
            src={profileImage}
            alt="Alex Spencer"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 60vw, (max-width: 1200px) 50vw"
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(540, 600))}`}
            className="object-cover object-center sm:object-right"
          />
        </div>
        <div className="my-8 space-y-6 border-y border-border pb-[3.25rem] pt-8 sm:col-start-7 sm:col-end-13 sm:row-start-1 sm:my-0 sm:pt-[3.25rem] lg:col-start-8 lg:col-end-12">
          <h2 className="heading-2">About me</h2>
          <p className="mt-1">
            I’m a junior front-end developer looking for a new role in an exciting company. I focus
            on writing accessible HTML, using modern CSS practices and writing clean JavaScript.
            When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely and have experience in
            remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature
            whether that’s going for a walk, run or cycling. I’d love you to check out my work.
          </p>
          <Button variant="secondary" asChild>
            <Link href="/portfolio">Go to portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
