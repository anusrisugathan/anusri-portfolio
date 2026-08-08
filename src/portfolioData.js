export const caseStudies = [
  {
    title: "Legacy Modernisation for Core Banking",
    client: "ANZ",
    period: "Senior Software Engineer",
    summary:
      "Reworked a legacy teller platform into a more secure, maintainable, cloud-ready architecture for high-trust banking workflows.",
    challenge:
      "The application carried critical customer and branch operations while depending on aging patterns that slowed delivery and increased operational risk.",
    approach:
      "Split high-risk flows into clearer service boundaries, strengthened API contracts, improved release confidence, and aligned the platform with modern engineering practices.",
    impact:
      "Reduced delivery friction for future changes and gave teams a stronger foundation for secure banking capability at scale.",
    stack: ["Java", "Spring Boot", "Microservices", "REST APIs", "OpenShift", "CI/CD"],
  },
  {
    title: "Playwright Automation Framework",
    client: "ANZ",
    period: "Quality Engineering Enablement",
    summary:
      "Built a browser automation framework to remove testing bottlenecks and improve delivery confidence across complex user journeys.",
    challenge:
      "Regression coverage depended on slow manual paths, making frequent releases harder to trust.",
    approach:
      "Created reusable Playwright patterns, stabilized core flows, and shaped tests around business-critical banking journeys.",
    impact:
      "Improved feedback speed and made automation a practical part of day-to-day delivery rather than a separate afterthought.",
    stack: ["Playwright", "JavaScript", "Test Strategy", "CI/CD"],
  },
  {
    title: "Customer Onboarding Microservices",
    client: "Financial Services",
    period: "Distributed Systems",
    summary:
      "Delivered AXON-based microservices supporting onboarding flows across global customer journeys.",
    challenge:
      "Customer onboarding required resilient services that could handle distributed business processes cleanly.",
    approach:
      "Implemented event-driven service components, clarified integration contracts, and supported production-grade observability and deployment practices.",
    impact:
      "Helped teams evolve onboarding capabilities with clearer ownership, stronger resilience, and better alignment to domain workflows.",
    stack: ["AXON", "Java", "Spring Boot", "Kafka", "REST APIs", "Docker"],
  },
  {
    title: "Token-Based Payment Approval",
    client: "Global Banking",
    period: "Secure Payments",
    summary:
      "Delivered secure payment approval flows for international users with careful attention to trust, auditability, and user flow.",
    challenge:
      "Payment approval experiences needed to balance security requirements with practical customer usability across regions.",
    approach:
      "Built backend capability for token-driven approval paths, integrated with existing banking systems, and supported robust validation behavior.",
    impact:
      "Strengthened payment approval reliability for global users while preserving a controlled, auditable delivery model.",
    stack: ["Java", "Spring Boot", "Security", "REST APIs", "Banking"],
  },
];

export const skillGroups = [
  {
    title: "Backend Architecture",
    skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "Hibernate", "AXON", "Python"],
  },
  {
    title: "Cloud and Delivery",
    skills: ["OpenShift", "GitHub Actions", "Helm", "CI/CD", "Docker", "Kafka", "AWS"],
  },
  {
    title: "Frontend and Automation",
    skills: ["React", "TypeScript", "Angular", "Node.js", "JavaScript", "Playwright"],
  },
  {
    title: "AI-Enhanced Engineering",
    skills: ["Microsoft Copilot", "GitHub Copilot", "Gemini", "Prompt Engineering", "AI-Assisted Debugging"],
  },
  {
    title: "Testing",
    skills: ["JUnit", "Mockito", "JMockit", "Playwright", "JMeter"],
  },
];

export const roles = [
  {
    company: "ANZ",
    role: "Senior Software Engineer",
    period: "2017-Present",
    description:
      "Architecting and delivering secure banking platforms, modernisation work, automation frameworks, AXON microservices, and AI-supported engineering workflows.",
  },
  {
    company: "Object Consulting",
    role: "Senior Consultant",
    period: "2015-2016",
    description: "Delivered consulting outcomes for NAB, RMIT, and Belong ISP across enterprise delivery contexts.",
  },
  {
    company: "Unico",
    role: "Software Developer",
    period: "2014-2015",
    description: "Designed and delivered Telstra Orpheus Offline Charging Adapter capability.",
  },
  {
    company: "UST Global",
    role: "System Analyst",
    period: "2011-2014",
    description: "Built RESTful services and workflow-driven enterprise systems.",
  },
  {
    company: "IBM India",
    role: "Senior System Engineer",
    period: "2008-2011",
    description: "Developed JSF/AJAX components and EJB modules for enterprise applications.",
  },
  {
    company: "IBS Software",
    role: "Software Engineer",
    period: "2005-2008",
    description: "Delivered airline loyalty management screens and supporting application features.",
  },
];
