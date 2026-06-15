import { skills } from "../data/skills.js";

// Skills displays each skill from the skills array.
function Skills() {
  return (
    <section className="section">
      <h2>Skills</h2>

      <div className="skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;