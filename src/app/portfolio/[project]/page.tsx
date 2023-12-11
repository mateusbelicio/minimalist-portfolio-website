import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import projects from '@/config/projects';
import CallToActionSection from '@/components/sections/call-to-action';
import DetailsSection from '@/components/sections/details';

type TParams = { params: { project: string } };

export async function generateMetadata(
  { params }: TParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { project: projectSlug } = params;

  const project = projects.filter((project) => project.title.toLowerCase() === projectSlug).at(0);
  const previousTitle = (await parent).title?.absolute;

  if (!project)
    return {
      title: previousTitle,
    };

  return {
    title: `${previousTitle} | ${project?.title}`,
  };
}

function Project({ params }: TParams) {
  if (params.project === 'default') return null;

  const selectedProject = projects.find(
    (project) => project.title.toLowerCase() === params.project.toLowerCase()
  );

  if (!selectedProject) return notFound();

  const projectIndex = projects.findIndex((project) => project.title === selectedProject.title);

  const previusIndex = projectIndex === 0 ? projects.length - 1 : projectIndex - 1;
  const nextIndex = projectIndex === projects.length - 1 ? 0 : projectIndex + 1;

  const previus = projects[previusIndex];
  const next = projects[nextIndex];

  return (
    <main className="flex min-h-screen flex-col">
      <DetailsSection
        project={selectedProject}
        previus={{ link: previus.link, title: previus.title }}
        next={{ link: next.link, title: next.title }}
      />
      <CallToActionSection />
    </main>
  );
}

export default Project;
