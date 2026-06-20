import { Code2, Database, Globe, Wrench, Brain,} from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe size={28} />,
      skills: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      icon: <Code2 size={28} />,
      skills: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "Node.js",
      ],
    },
    {
      title: "Database",
      icon: <Database size={28} />,
      skills: [
        "MySQL",
        "PostgreSQL",
        "Database Design",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={28} />,
      skills: [
        "Git",
        "GitHub",
        "Vite",
        "VS Code",
      ],
    },
    {
      title: "Artificial Intelligence",
      icon: <Brain size={28} />,
      skills: [
        "Machine Learning",
        "AI Applications",
        "Prompt Engineering",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-medium">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Technologies I
            <span className="text-blue-500">
              {" "}Work With
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I use modern technologies to build scalable,
            user-friendly and high-performance digital solutions.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <div className="text-blue-400 mb-4">
                {category.icon}
              </div>

              <h3 className="text-xl font-semibold mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-slate-800 px-3 py-2 rounded-lg text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-400 text-lg">
            Continuously learning and expanding my expertise
            in modern software development and AI technologies.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;