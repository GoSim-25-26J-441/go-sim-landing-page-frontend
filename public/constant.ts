import { Section1Props } from "../components/landing/section1/page";
import { Section2Pros } from "../components/landing/section2/page";
import { Section4Props } from "../components/landing/section4/page";

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

export const section2: Section2Pros = {
  titles: ["The Problem", "The Solution"],
  description: ["Why microservice design is hard", "How ArcFind helps"],
  parts: [
    {
      points: [
        "Hard to visualize service-to-service calls.",
        "Chatty calls and god services appear only after production.",
        "Simulations are manual and slow.",
        "Performance issues cost time and money.",
      ],
    },
    {
      points: [
        "Upload YAML/JSON and instantly get an architecture graph.",
        "Automatic anti-pattern detection (chatty calls, shared DB, cycles, etc.).",
        "Simulation engine estimates performance under load.",
        "Visual cost and throughput summaries.",
      ],
    },
  ],
};


export const section3: Section4Props = {
  title: ["Key features", "Frequently asked questions"],

  points: [
    {
      part1: [
        { mainPoints: "Architecture Graph Visualization", subPoints: "Interactive graph of services, calls, and databases." },
        { mainPoints: "Anti-Pattern Detection", subPoints: "Find god services, chatty calls, cycles, shared DB writes, etc." },
        { mainPoints: "Scenario Simulation", subPoints: "Run “what if” experiments on traffic, latency, and failures." },
        { mainPoints: "Cost & Performance Analytics", subPoints: "Estimate impact on resources and cloud cost." },
        { mainPoints: "Versioned Projects", subPoints: "Save multiple architecture versions and compare designs." },
        { mainPoints: "Chat-Driven Interface", subPoints: "Ask questions in natural language, like ChatGPT, tailored to microservices." },
      ],
    },
    {
      part2: [
        { mainPoints: "Do I need to deploy my services to use GO-SIM ?", subPoints: "No. You can work from architecture specs (YAML/JSON) before deployment." },
        { mainPoints: "Is this free for students ?", subPoints: "Yes, there is a free tier suitable for academic projects." },
        { mainPoints: "Can I export diagrams and reports ?", subPoints: "Yes, you can export graphs and summaries (PDF/PNG/JSON)." },
        { mainPoints: "Is my code/architecture stored ?", subPoints: "Explain how you handle this (for prototype, just say locally / for demo)." },
      ],
    },
  ],
};