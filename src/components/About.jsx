import { Code2, Brain, Smartphone } from "lucide-react";
import about from "../assets/about.png";
function About() {
  const highlights = [
    {
      icon: <Code2 size={28} />,
      title: "Web Development & Design",
      description:
        "Building responsive and modern web applications using React, Tailwind CSS and JavaScript.",
    },
    {
      icon: <Brain size={28} />,
      title: "AI Solutions",
      description:
        "Exploring artificial intelligence and integrating smart features into modern applications.",
    },
    {
      icon: <Smartphone size={28} />,
      title: "UX/UI Design",
      description:
        "Designing Responsive application and good user Interface.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-medium">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Turning Ideas Into
            <span className="text-blue-500">
              {" "}Digital Solutions
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="flex justify-center">
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
                <div className="w-full h-full rounded-3xl bg-slate-950 flex items-center justify-center">
                  {/*image container */}
                  <span className="text-8xl">
                    <img
                    src={about}
                    alt="Annie"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Passionate Developer & Problem Solver
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              I'm Anastazia, a Computer Science student and aspiring
              software engineer passionate about creating digital
              products that solve real-world problems.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              My focus is on developing scalable web applications,
              intelligent systems and user-friendly experiences.
              I enjoy turning ideas into reliable software solutions
              using modern technologies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">

              <div className="bg-slate-800 p-4 rounded-xl text-center">
                <h4 className="text-3xl font-bold text-blue-500">
                  2+
                </h4>
                <p className="text-gray-400 text-sm">
                  Projects
                </p>
              </div>

              <div className="bg-slate-800 p-4 rounded-xl text-center">
                <h4 className="text-3xl font-bold text-blue-500">
                  React
                </h4>
                <p className="text-gray-400 text-sm">
                  Frontend
                </p>
              </div>

              <div className="bg-slate-800 p-4 rounded-xl text-center">
                <h4 className="text-3xl font-bold text-blue-500">
                  Java
                </h4>
                <p className="text-gray-400 text-sm">
                  Backend
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition"
            >
              <div className="text-blue-400 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;