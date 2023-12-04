import projects from '@/config/projects';

import ProjectCard from '../project-card';

const PortfolioSection = () => {
  return (
    <section className="pt-10 sm:pt-[5.875rem]">
      <div className="main-container grid gap-y-[4.5rem] sm:gap-y-20">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
