import { roles } from "../portfolioData";

function Experience() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h1>A delivery record across enterprise platforms and regulated systems.</h1>
      </div>

      <div className="timeline">
        {roles.map((role) => (
          <article className="timeline-item" key={`${role.company}-${role.period}`}>
            <div className="timeline-date">{role.period}</div>
            <div className="timeline-content">
              <p className="case-client">{role.company}</p>
              <h2>{role.role}</h2>
              <p>{role.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
