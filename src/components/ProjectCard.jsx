// ProjectCard receives one project as a prop.
// Props are how we pass data from one component to another.
function ProjectCard({ project }) {
    return (
      <article className="card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </article>
    );
  }
  
  export default ProjectCard;