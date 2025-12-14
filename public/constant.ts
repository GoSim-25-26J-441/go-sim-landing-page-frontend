import { Section1Props } from "../components/landing/section1/page";

export const section1: Section1Props = {
  title: "Who ArcFind is for",
  description:
    "Different roles, same goal: safer, faster microservice designs.",
  card: [
    {
      title: "Students & Researchers",
      description: "Learn microservices with real architecture tooling.",
      points: [
        "Use sample YAML/JSON or your own assignments to build architecture graphs.",
        "See how patterns like chatty calls and god services appear in real systems.",
        "Quickly generate diagrams and screenshots for reports, theses, and presentations.",
      ],
    },
    {
      title: "Backend & DevOps engineers",
      description: "Catch issues before they reach production.",
      points: [
        "Upload current service definitions and spot anti-patterns early.",
        "Simulate changes before touching Kubernetes, Docker, or cloud configs.",
        "Share a visual graph with teammates instead of long architecture docs.",
      ],
    },
    {
      title: "Software architects & tech leads",
      description: "Align teams around a clear architecture view.",
      points: [
        "Keep a single source of truth for your microservice topology.",
        "Compare different designs: monolith vs microservices, new vs legacy.",
        "Use clear graphs and reports to explain trade-offs to non-technical stakeholders.",
      ],
    },
    {
      title: "Performance & reliability teams",
      description: "Try “what-if” scenarios without risk.",
      points: [
        "Model traffic spikes and see how latency and throughput might change.",
        "Identify critical paths and high-risk dependencies in the service graph.",
        "Support capacity planning with data-driven architecture insights.",
      ],
    },
  ],
};
