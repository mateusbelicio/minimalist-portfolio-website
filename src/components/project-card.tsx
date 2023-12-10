import Image from 'next/image';
import Link from 'next/link';

import { ProjectType } from '@/config/projects';
import { shimmer, toBase64 } from '@/lib/utils';

import { Button } from './ui/button';

type ProjectProps = {
  project: ProjectType;
};

const ProjectCard = async ({ project }: ProjectProps) => {
  return (
    <article className="group flex flex-col gap-y-8 sm:grid sm:grid-cols-12 sm:items-center sm:gap-x-2.5 lg:gap-x-[1.875rem] sm:[&>*]:row-start-1">
      <div className="relative h-72 w-full sm:col-span-6 sm:h-[19.625rem] sm:group-even:col-start-7 lg:h-[31.25rem]">
        <Image
          className="object-cover object-top"
          src={project.coverImage}
          alt={`Thumbnail of ${project.title} project`}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw"
          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(540, 500))}`}
          fill
        />
      </div>
      <div className="flex flex-col items-start gap-6 border-y border-border py-6 sm:col-span-5 sm:col-start-8 sm:pb-12 sm:pt-8 sm:group-even:col-start-1 lg:col-span-4 lg:col-start-8 lg:h-full lg:justify-center lg:group-even:col-start-2">
        <h2 className="heading-2">{project.title}</h2>
        <p className="text-[0.9375rem]">{project.description}</p>
        <Button asChild variant="secondary">
          <Link href={project.link}>View Project</Link>
        </Button>
      </div>
    </article>
  );
};

export default ProjectCard;
