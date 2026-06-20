import { ArrowRight, Code2, Mail, Network, Eye } from "lucide-react";

// If you want to use your own image later:
// 1. Put the image in src/assets/profile.jpg

 import profile from "../assets/profile.jpeg";

function Hero() {
  const skills = [
    "React",
    "Tailwind CSS",
    "Java",
    "Spring Boot",
    "MySQL",
    "AI",
  ];

  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-slate-950 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <p className="mb-4 font-medium text-blue-400">
            Hello, I'm Anastazia
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            I Build
            <span className="text-blue-500"> Modern Web Apps </span>
            That Deliver Results
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            I help businesses and startups transform ideas into fast, scalable,
            and user-friendly web applications using React, Tailwind CSS, Java
            and modern development tools.
          </p>

          <p className="mt-4 text-gray-500">
            Currently building digital solutions in food delivery, business
            managements and AI-powered applications.
          </p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/CV.pdf"
              target="blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 transition hover:border-blue-500 hover:text-blue-400"
            >
              View CV
              <Eye size={18} />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex gap-5">
            <a
              href="https://github.com/Annah501-y"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <Code2
                size={24}
                className="text-gray-400 transition hover:text-blue-400"
              />
            </a>

            <a
              href="https://linkedin.com/in/anastazia-emanuel-5b3ab740a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Network
                size={24}
                className="text-gray-400 transition hover:text-blue-400"
              />
            </a>

            <a href="mailto:anastaziaemanuel832@gmail.com" aria-label="Send email">
              <Mail
                size={24}
                className="text-gray-400 transition hover:text-blue-400"
              />
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>

            {/* Profile Container */}
            <div className="relative h-80 w-80 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 p-1 md:h-96 md:w-96">
             < div className="h-full w-full overflow-hidden rounded-full bg-slate-900">
                {/*  the profile */}
               
                <img
                  src={profile}
                  alt="Anastazia"
                  className="h-full w-full object-cover"
                />
                
                 </div>
                
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;