import { notFound } from 'next/navigation';

import projects from '@/config/projects';
import CallToActionSection from '@/components/sections/call-to-action';
import Details from '@/components/sections/details';

type TParams = { params: { project: string } };

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
      <Details
        project={selectedProject}
        previus={{ link: previus.link, title: previus.title }}
        next={{ link: next.link, title: next.title }}
      />
      <CallToActionSection />
    </main>
  );
}

export default Project;
