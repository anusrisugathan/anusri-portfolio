import { Link } from "react-router-dom";
import { caseStudies } from "../portfolioData";

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Senior Software Engineer - Melbourne</p>
          <h1>Engineering case studies from banking, telecom, retail, and financial services.</h1>
          <p className="hero-text">
            I design and deliver enterprise-grade systems across Java, Spring Boot, microservices,
            cloud-ready platforms, test automation, and AI-enhanced development workflows.
          </p>

          <div className="buttons">
            <Link to="/projects" className="btn">View Case Studies</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
          </div>
        </div>

        <div className="hero-panel" aria-label="Portfolio highlights">
          <div>
            <span className="metric-value">15+</span>
            <span className="metric-label">years delivering enterprise software</span>
          </div>
          <div>
            <span className="metric-value">4</span>
            <span className="metric-label">featured case studies</span>
          </div>
          <div>
            <span className="metric-value">AI</span>
            <span className="metric-label">assisted engineering practice</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Projects framed by problem, approach, and outcome.</h2>
        </div>

        <div className="case-grid">
          {caseStudies.slice(0, 3).map((study) => (
            <article className="case-card" key={study.title}>
              <p className="case-client">{study.client}</p>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
              <div className="tag-row">
                {study.stack.slice(0, 4).map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
