import { Mail } from "lucide-react";
import { profile } from "../data/profile.js";

// Contact gives visitors a clear way to reach you.
function Contact() {
  return (
    <section className="section contact">
      <h2>Contact Me</h2>

      <p>
        I am open to learning opportunities, internships, collaborations, and
        beginner-friendly projects.
      </p>

      <a href={`mailto:${profile.email}`} className="primaryButton">
        <Mail size={18} />
        Send Email
      </a>
    </section>
  );
}

export default Contact;