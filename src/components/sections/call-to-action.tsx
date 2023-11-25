import Link from 'next/link';

const CallToActionSection = () => {
  return (
    <section className="py-20">
      <div className="main-container flex flex-col items-center gap-10 text-center">
        <h2 className="heading-2">Interested in doing a project together?</h2>
        <Link
          href="/contact"
          className="label-upper inline-block border border-secondary px-9 py-4"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
