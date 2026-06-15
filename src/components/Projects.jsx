import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

// Projects loops through all projects and displays a ProjectCard for each one.
function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>

      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;