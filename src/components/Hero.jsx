import { Code2, Mail, MapPin, Network } from "lucide-react";
import { profile } from "../data/profile.js";

// Hero is the first section visitors see.
function Hero() {
  return (
    <section className="hero">
      <p className="location">
        <MapPin size={18} />
        {profile.location}
      </p>

      <h1>Hello, I am {profile.name}</h1>

      <h2>{profile.title}</h2>

      <p className="intro">{profile.intro}</p>

      <div className="buttons">
        <a href={`mailto:${profile.email}`} className="primaryButton">
          <Mail size={18} />
          Contact Me
        </a>

        <a href={profile.github} className="secondaryButton">
          <Code2 size={18} />
          GitHub
        </a>

        <a href={profile.linkedin} className="secondaryButton">
          <Network size={18} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Hero;