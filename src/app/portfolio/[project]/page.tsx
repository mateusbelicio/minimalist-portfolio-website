import * as projects from '@/config/projects';
import CallToActionSection from '@/components/sections/call-to-action';
import Details from '@/components/sections/details';

type TParams = { params: { project: keyof typeof projects } };

function Project({ params }: TParams) {
  if (params.project === 'default') return null;

  const project = projects[params.project];

  return (
    <main className="flex min-h-screen flex-col">
      <Details project={project} />
      <CallToActionSection />
    </main>
  );
}

export default Project;
