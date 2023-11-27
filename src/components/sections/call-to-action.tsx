import Link from 'next/link';

const CallToActionSection = () => {
  return (
    <section className="py-20 sm:py-24">
      <div className="main-container flex flex-col items-center gap-10 text-center sm:flex-row sm:justify-between sm:gap-8">
        <h2 className="heading-2 sm:max-w-[25rem] sm:text-left">
          Interested in doing a project together?
        </h2>
        <span className="hidden h-px bg-border sm:block sm:flex-1"></span>
        <Link
          href="/contact"
          className="label-upper inline-block whitespace-nowrap border border-secondary px-9 py-4"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
