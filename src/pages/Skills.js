import { skillGroups } from "../portfolioData";

function Skills() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h1>Capabilities that support the case studies.</h1>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h2>{group.title}</h2>
            <div className="tag-row">
              {group.skills.map((skill) => (
                <span className="tag" key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
