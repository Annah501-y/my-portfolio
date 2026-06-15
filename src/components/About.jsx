import { profile } from "../data/profile.js";

// About shows a short description of who you are.
function About() {
  return (
    <section className="section">
      <h2>About Me</h2>
      <p>{profile.about}</p>
    </section>
  );
}

export default About;