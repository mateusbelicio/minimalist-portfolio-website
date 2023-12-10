import Image from 'next/image';
import Link from 'next/link';
import heroImage from '~/public/images/homepage/image-homepage-hero@2x.jpg';

import { shimmer, toBase64 } from '@/lib/utils';

import { Button, ButtonIcon } from '../ui/button';

const HeroSection = () => {
  return (
    <section className="pt-10 sm:pt-12 lg:pt-14">
      <div className="main-container main-grid relative gap-y-6">
        <div className="relative h-[16.9375rem] w-full sm:row-start-1 sm:h-[37.5rem]">
          <Image
            src={heroImage}
            alt="image"
            fill
            sizes="100vw"
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(1110, 600))}`}
            className="object-cover"
          />
        </div>
        <div className="z-10 flex flex-col items-start gap-8 bg-background sm:col-start-1 sm:col-end-10 sm:row-start-1 sm:gap-12 sm:self-end sm:pr-14 sm:pt-14 lg:col-end-6 lg:gap-[3.25rem]">
          <h1 className="heading-1">
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>
          <Button asChild variant="primary">
            <Link href="#about">
              <ButtonIcon name="downArrows" className="text-primary" />
              About me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
