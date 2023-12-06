import Image from 'next/image';
import Link from 'next/link';

import { ProjectType } from '@/config/projects';

import Icons from '../icons';
import { Button } from '../ui/button';

type DetailsProps = {
  project: ProjectType;
  previus: Partial<ProjectType> & {
    title: string;
    link: string;
  };
  next: Partial<ProjectType> & {
    title: string;
    link: string;
  };
};

const Details = ({ project, previus, next }: DetailsProps) => {
  return (
    <section className="pt-10 sm:pt-[5.875rem]">
      <div className="main-container">
        <div className="relative h-[8.75rem] w-full sm:h-[19.375rem] lg:h-[31.25rem]">
          <Image
            className="object-cover"
            src={project.staticImages.hero}
            sizes="100vw"
            alt={`${project.title} project`}
            fill
          />
        </div>
        <div className="mb-12 mt-10 grid justify-items-start gap-6 border-y border-border py-6 sm:mb-10 sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-2.5 sm:gap-y-4 lg:mt-[7.1875rem] sm:[&>*]:col-span-1 sm:[&>*]:col-start-1">
          <h1 className="heading-2">{project.title}</h1>
          <p className="text-[0.9375rem] sm:!col-start-2 sm:row-span-full">{project.description}</p>
          <p className="text-[0.8125rem] font-bold text-primary sm:pr-16">
            {project.tags.join(' / ')}
          </p>
          <Button asChild variant="secondary">
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              Visit website
            </Link>
          </Button>
        </div>
        <div className="mb-10 mt-12 space-y-7 sm:mt-10">
          <h2 className="heading-3">Project Background</h2>
          <p className="text-[0.9375rem]">{project.background}</p>
        </div>
        <div className="mb-16 mt-10 space-y-10 sm:mb-20">
          <h2 className="heading-3">Static Previews</h2>
          <div className="grid auto-rows-[12.3125rem] gap-y-8 sm:auto-rows-[27.125rem]">
            {project.staticImages.previews.map((preview, index) => (
              <div className="relative h-full w-full" key={index}>
                <Image
                  src={preview}
                  className="object-cover object-top"
                  alt={`Project preview ${index + 1}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw"
                  fill
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex justify-between border-y border-border">
          <Link
            href={previus.link}
            className="flex flex-grow flex-col items-start py-6 sm:flex-row sm:items-center sm:gap-8"
          >
            <Icons name="arrowLeft" className="w-2" />
            <span>
              <span className="heading-3 mt-4 block !leading-9">{previus.title}</span>
              <span className="leading-[1.875rem] text-foreground/50">Previus Project</span>
            </span>
          </Link>
          <span className="block w-px bg-border"></span>
          <Link
            href={next.link}
            className="flex flex-grow flex-col items-end py-6 pr-1 sm:flex-row-reverse sm:items-center sm:gap-8"
          >
            <Icons name="arrowRight" className="w-2" />
            <span>
              <span className="heading-3 mt-4 block !leading-9">{next.title}</span>
              <span className="leading-[1.875rem] text-foreground/50">Next Project</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Details;
