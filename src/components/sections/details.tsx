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
        <div className="relative h-[8.75rem] w-full">
          <Image
            className="object-cover"
            src={project.staticImages.hero}
            alt={`${project.title} project`}
            fill
          />
        </div>
        <div className="mb-12 mt-10 grid justify-items-start gap-6 border-y border-border py-6">
          <h1 className="heading-2">{project.title}</h1>
          <p className="text-[0.9375rem]">{project.description}</p>
          <p className="text-[0.8125rem] font-bold text-primary">{project.tags.join(' / ')}</p>
          <Button asChild variant="secondary">
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              Visit website
            </Link>
          </Button>
        </div>
        <div className="mb-10 mt-12 space-y-7">
          <h2 className="heading-3">Project Background</h2>
          <p className="text-[0.9375rem]">{project.background}</p>
        </div>
        <div className="mb-16 mt-10 space-y-10">
          <h2 className="heading-3">Static Previews</h2>
          <div className="grid auto-rows-[12.3125rem] gap-y-8">
            {project.staticImages.previews.map((preview, index) => (
              <div className="relative h-full w-full" key={index}>
                <Image src={preview} alt={`Project preview ${index}`} fill />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex justify-between border-y border-border">
          <Link href={previus.link} className="flex flex-grow flex-col items-start py-6">
            <Icons name="arrowLeft" className="w-2" />
            <span className="heading-3 mt-4 !leading-9">{previus.title}</span>
            <span className="leading-[1.875rem] text-foreground/50">Previus Project</span>
          </Link>
          <span className="block w-px bg-border"></span>
          <Link href={next.link} className="flex flex-grow flex-col items-end py-6 pr-1">
            <Icons name="arrowRight" className="w-2" />
            <span className="heading-3 mt-4 !leading-9">{next.title}</span>
            <span className="leading-[1.875rem] text-foreground/50">Next Project</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Details;
