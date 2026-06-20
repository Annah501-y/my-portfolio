import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Food Delivery Platform",
      description:
        "A modern food ordering platform that allows users to browse restaurants, place orders and track deliveries through a responsive web interface.",
      technologies: ["React", "Tailwind CSS", "REST API", "Vite"],
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
      github: "https://github.com/Annah501-y",
      demo: "https://github.com/Annah501-y",
      status: "In Progress",
    },
  ];

  return (
    <section id="projects" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="font-medium text-blue-400">My Work</p>

          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            A selection of projects demonstrating my skills in web development,
            backend systems and modern software engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />

                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${
                    project.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Project Content */}
              <div className="flex h-full flex-col p-6">
                <h3 className="mb-3 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mb-5 text-gray-400">{project.description}</p>

                {/* Technology Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-800 px-3 py-1 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-auto flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 transition hover:text-blue-400"
                  >
                    <Code2 size={18} />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 transition hover:text-blue-400"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Annah501-y"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 transition hover:bg-blue-700"
          >
            View More Projects
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;