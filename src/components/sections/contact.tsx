import Link from 'next/link';

import { socialLinks } from '@/config/navigation';

import Icons from '../icons';
import { Button } from '../ui/button';

const ContactSection = () => {
  return (
    <section className="pb-20 pt-10 sm:py-24 lg:pb-28">
      <div className="main-container flex flex-col gap-8 sm:gap-12">
        <div className="main-grid gap-y-6 border-y border-border pb-8 pt-6 lg:py-12">
          <h1 className="heading-2 lg:col-span-4">Get in Touch</h1>
          <div className="flex flex-col gap-6 lg:col-span-7 lg:col-start-6">
            <p className="text-[0.9375rem] !leading-[1.875rem] lg:text-base">
              I’d love to hear about what you’re working on and how I could help. I’m currently
              looking for a new role and am open to a wide range of opportunities. My preference
              would be to find a position in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working and positive person
              who will always approach each task with a sense of purpose and attention to detail.
              Please do feel free to check out my online profiles below and get in touch using the
              form.
            </p>
            <ul className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="label-upper outline-none outline-1 transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`My profile on ${link.name}`}
                  >
                    <Icons name={link.icon} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="main-grid gap-y-6 sm:gap-y-8">
          <h2 className="heading-2 lg:col-span-4">Contact Me</h2>
          <form className="flex flex-col gap-6 lg:col-span-7 lg:col-start-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="label">
                Name
              </label>
              <input
                type="text"
                className="bg-input px-4 py-2 text-sm leading-8 text-foreground placeholder:text-foreground/40"
                placeholder="Jane Appleseed"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="label">
                Email Address
              </label>
              <input
                type="text"
                className="bg-input px-4 py-2 text-sm leading-8 text-foreground placeholder:text-foreground/40"
                placeholder="email@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="label">
                Message
              </label>
              <textarea
                className="resize-y bg-input px-4 py-2 text-sm leading-8 text-foreground placeholder:text-foreground/40"
                placeholder="How can I help?"
              />
            </div>
            <Button className="self-start">Send message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
