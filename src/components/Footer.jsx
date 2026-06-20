import {  Mail, ArrowUp, Code2, Network, } from "lucide-react";
  
  function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-slate-950 border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
  
          <div className="grid md:grid-cols-3 gap-10">
  
            {/* Brand Section */}
            <div>
              <h2 className="text-2xl font-bold">
                Anastazia<span className="text-blue-500">.dev</span>
              </h2>
  
              <p className="text-gray-400 mt-4 leading-relaxed">
                Building modern web applications, intelligent
                digital solutions and user-focused experiences.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Quick Links
              </h3>
  
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    Home
                  </a>
                </li>
  
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    About
                  </a>
                </li>
  
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    Skills
                  </a>
                </li>
  
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    Projects
                  </a>
                </li>
  
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Connect
              </h3>
  
              <div className="flex gap-4">
  
                <a
                  href="https://github.com/Annah501-y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 p-3 rounded-lg hover:bg-blue-600 transition"
                >
                  <Code2 size={20} />
                </a>
  
                <a
                  href="https://linkedin.com/in/anastazia-emanuel-5b3ab740a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900 p-3 rounded-lg hover:bg-blue-600 transition"
                >
                  <Network size={20} />
                </a>
  
                <a
                  href="mailto:anastaziaemanuel832@gmail.com"
                  className="bg-slate-900 p-3 rounded-lg hover:bg-blue-600 transition"
                >
                  <Mail size={20} />
                </a>
  
              </div>
  
              <p className="text-gray-400 mt-6">
                Available for freelance work and collaborations.
              </p>
            </div>
  
          </div>
  
          {/* Bottom Section */}
          <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
  
            <p className="text-gray-500 text-sm">
              © {currentYear} Anastazia.dev. All rights reserved.
            </p>
  
            <a
              href="#home"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
            >
              Back to Top
              <ArrowUp size={18} />
            </a>
  
          </div>
  
        </div>
      </footer>
    );
  }
  
  export default Footer;