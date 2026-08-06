import { caseStudies } from "../portfolioData";

function Projects() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Case Studies</p>
        <h1>Selected work with the problem, approach, and impact made explicit.</h1>
      </div>

      <div className="case-study-list">
        {caseStudies.map((study, index) => (
          <article className="case-study" key={study.title}>
            <div className="case-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="case-study-main">
              <p className="case-client">{study.client} - {study.period}</p>
              <h2>{study.title}</h2>
              <p className="lede">{study.summary}</p>

              <div className="case-columns">
                <div>
                  <h3>Challenge</h3>
                  <p>{study.challenge}</p>
                </div>
                <div>
                  <h3>Approach</h3>
                  <p>{study.approach}</p>
                </div>
                <div>
                  <h3>Impact</h3>
                  <p>{study.impact}</p>
                </div>
              </div>

              <div className="tag-row">
                {study.stack.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
