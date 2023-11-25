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
          className="h-auto w-full"
        />
        <h1 className="heading-1 bg-background">
          Hey, I’m Alex Spencer and I love building beautiful websites
        </h1>
        <button className="label-upper mt-2 bg-secondary py-4 text-center text-secondary-foreground">
          About me
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
