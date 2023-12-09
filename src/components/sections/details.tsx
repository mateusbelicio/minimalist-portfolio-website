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

const DetailsSection = ({ project, previus, next }: DetailsProps) => {
  return (
    <section className="pt-10 sm:pt-[5.875rem]">
      <div className="main-container main-grid lg:items-start">
        <div className="relative h-[8.75rem] w-full sm:h-[19.375rem] lg:h-[31.25rem]">
          <Image
            className="object-cover"
            src={project.staticImages.hero}
            sizes="100vw"
            alt={`${project.title} project`}
            fill
          />
        </div>
        <div className="mb-12 mt-10 grid justify-items-start gap-6 border-y border-border py-6 sm:mb-10 sm:grid-cols-[inherit] sm:gap-x-[inherit] sm:gap-y-4 sm:py-8 lg:col-span-4 lg:row-span-2 lg:mt-[7.1875rem] lg:grid-cols-1 lg:py-12 lg:[&>*]:col-span-1">
          <h1 className="heading-2 sm:col-span-5 sm:col-start-1">{project.title}</h1>
          <p className="text-[0.9375rem] sm:col-span-6 sm:col-start-7 sm:row-span-3 lg:row-span-1 lg:mt-3">
            {project.description}
          </p>
          <p className="text-[0.8125rem] font-bold text-primary sm:col-span-5 sm:col-start-1 lg:mt-2">
            {project.tags.join(' / ')}
          </p>
          <Button asChild variant="secondary" className="sm:col-span-5 sm:col-start-1 lg:mt-4">
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              Visit website
            </Link>
          </Button>
        </div>
        <div className="space-y-7 sm:mt-0 lg:col-start-6 lg:col-end-13 lg:mt-[7.1875rem]">
          <h2 className="heading-3">Project Background</h2>
          <p className="text-[0.9375rem]">{project.background}</p>
        </div>
        <div className="mb-16 mt-10 space-y-10 sm:mb-20 lg:col-start-6 lg:col-end-13 lg:mb-16 lg:space-y-7">
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
        <div className="flex justify-center border-y border-border">
          <Link
            href={previus.link}
            className="flex w-1/2 flex-grow flex-col items-start border-r border-border py-6 transition-colors hover:bg-muted/25 focus-visible:bg-muted/25 focus-visible:outline-none focus-visible:outline-primary sm:flex-row sm:items-center sm:gap-8 sm:py-8"
          >
            <Icons name="arrowLeft" className="w-2" />
            <span>
              <span className="heading-3 mt-4 block !leading-9 sm:mt-0">{previus.title}</span>
              <span className="leading-[1.875rem] text-foreground/50">Previus Project</span>
            </span>
          </Link>
          <Link
            href={next.link}
            className="flex w-1/2 flex-grow flex-col items-end py-6 transition-colors hover:bg-muted/25 focus-visible:bg-muted/25 focus-visible:outline-none focus-visible:outline-primary sm:flex-row-reverse sm:items-center sm:gap-8 sm:py-8"
          >
            <Icons name="arrowRight" className="w-2" />
            <span>
              <span className="heading-3 mt-4 block !leading-9 sm:mt-0">{next.title}</span>
              <span className="leading-[1.875rem] text-foreground/50">Next Project</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
