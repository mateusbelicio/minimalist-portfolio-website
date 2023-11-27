import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="pt-10 sm:pt-12 lg:pt-14">
      <div className="main-container main-grid gap-y-6">
        <Image
          src="/homepage/mobile/image-homepage-hero.jpg"
          alt="image"
          height={271}
          width={311}
          className="h-auto w-full sm:row-start-1"
        />
        <div className="flex flex-col items-start gap-8 bg-background sm:col-start-1 sm:col-end-10 sm:row-start-1 sm:gap-12 sm:self-end sm:pt-14">
          <h1 className="heading-1">
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>
          <button className="label-upper bg-secondary px-10 py-4 text-center text-secondary-foreground">
            About me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
