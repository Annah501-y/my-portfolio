import {MonitorSmartphone,LayoutDashboard,Database,Brain, ArrowRight,} from "lucide-react";
  
  function Services() {
    const services = [
      {
        icon: <MonitorSmartphone size={32} />,
        title: "Frontend Development",
        description:
          "Building fast, responsive, and modern web applications using React, Tailwind CSS, and JavaScript.",
      },
      {
        icon: <LayoutDashboard size={32} />,
        title: "Full Stack Applications",
        description:
          "Developing complete web solutions from user interfaces to backend APIs and database integration.",
      },
      {
        icon: <Database size={32} />,
        title: "Database Design",
        description:
          "Designing efficient database structures, relationships, and management systems using MySQL and SQL technologies.",
      },
      {
        icon: <Brain size={32} />,
        title: "AI-Powered Solutions",
        description:
          "Exploring intelligent applications and integrating AI features into modern software products.",
      },
    ];
  
    return (
      <section
        id="services"
        className="bg-slate-950 text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Section Heading */}
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium">
              Services
            </p>
  
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              What I Can
              <span className="text-blue-500">
                {" "}Help You Build
              </span>
            </h2>
  
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              I help businesses, startups, and individuals transform ideas
              into modern digital products that are scalable, user-friendly,
              and performance-driven.
            </p>
          </div>
  
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
              >
                <div className="text-blue-400 mb-5">
                  {service.icon}
                </div>
  
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>
  
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
  
          </div>
  
          {/* Call To Action */}
          <div className="mt-20 text-center">
  
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Have a Project in Mind?
              </h3>
  
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Whether you're launching a startup, improving an existing
                product, or building a custom solution, I'd love to discuss
                how I can help bring your idea to life.
              </p>
  
              <button
                   type="button"  onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                     behavior: "smooth",  block: "start",
                       });
                     }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
              >
                Let's Talk
                <ArrowRight size={18} />
             </button>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Services;