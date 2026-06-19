import { useState } from "react";
import { Code2, Mail, Network, Phone, Send } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const whatsappNumber = "255618770830"; 
  // Use country code without +.
  

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `
Hello Anastazia,

My name is ${formData.name}.
My email is ${formData.email}.

Message:
${formData.message}
`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-900 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-medium text-blue-400">Contact Me</p>

          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            Let's Work <span className="text-blue-500">Together</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Have a project idea, freelance opportunity, or collaboration in
            mind? Send me a message directly on WhatsApp.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-950 p-8">
              <h3 className="mb-6 text-2xl font-semibold">
                Contact Information
              </h3>

              <div className="space-y-6">
                <ContactItem
                  icon={<Mail className="text-blue-400" />}
                  label="Email"
                  text="anastaziaemanuel832@gmail.com"
                  href="mailto:anastaziaemanuel832@gmail.com"
                />

                <ContactItem
                  icon={<Phone className="text-blue-400" />}
                  label="WhatsApp"
                  text="+255 618 770 830"
                  href={`https://wa.me/${whatsappNumber}`}
                />

                <ContactItem
                  icon={<Code2 className="text-blue-400" />}
                  label="GitHub"
                  text="github.com/Annah501-y"
                  href="https://github.com/Annah501-y"
                />

                <ContactItem
                  icon={<Network className="text-blue-400" />}
                  label="LinkedIn"
                  text="linkedin.com/in/anastazia-emanuel-5b3ab740a"
                  href="https://linkedin.com/in/anastazia-emanuel-5b3ab740a"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-blue-600 p-8">
              <h3 className="mb-3 text-2xl font-semibold">
                Available for Freelance Work
              </h3>

              <p className="text-blue-100">
                Currently accepting new projects and collaborations. Let's build
                something amazing together.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">
            <h3 className="mb-6 text-2xl font-semibold">
              Send a WhatsApp Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-gray-400">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-gray-400">Email</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-gray-400">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-3 transition hover:bg-green-700"
              >
                Send on WhatsApp
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, text, href }) {
  return (
    <div className="flex items-center gap-4">
      {icon}

      <div>
        <p className="text-sm text-gray-400">{label}</p>

        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="transition hover:text-blue-400"
        >
          {text}
        </a>
      </div>
    </div>
  );
}

export default Contact;