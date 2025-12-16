export const pricingConstants = {
  header: {
    title: "Simple pricing for architecture-first teams",
    subtitle:
      "Start free, then upgrade when you need more projects, workspaces, and collaboration features.",
    note: "Perfect for students, consultants, and engineering teams exploring iterative design.",
  },

  plans: {
    free: {
      title: "Free",
      subtitle: "$0 ",
      description: "forever",
      descriptionText:
        "Try GO-SIM on small architectures, explore graphs, and run basic checks.",
      for: "Best for\nstudents & experiments",
      button: "Start for free",
      buttonNote: "No credit card required",
    },
    pro: {
      title: "Pro",
      subtitle: "$12 / month",
      description: "per user (mock price for UI)",
      for: "Most popular",
      descriptionText:
        "For individual engineers who want full simulations and deeper analysis.",
      button: "Upgrade to Pro",
      buttonNote: "Best match for FYP, research, and serious side projects",
    },
    team: {
      title: "Team",
      subtitle: "$29 / month",
      description: "per team (mock price for UI)",
      for: "For teams & labs",
      descriptionText:
        "Share projects across a team, standardize architecture reviews, and track changes.",
      button: "Contact us for Team",
      buttonNote:
        "Ideal for research labs, capstone teams, and small engineering squads",
    },
  },

  features: {
    free: [
      "Up to 3 projects",
      "Up to 20 services per project",
      "Basic architecture graph visualization",
      "Core anti-pattern detection (chatty calls, cycles, god services)",
      "Sample YAML/JSON templates",
      "Export graphs as PNG",
      "Community / email support (best-effort)",
    ],
    pro: [
      "Unlimited projects",
      "Up to 60 services per project",
      "Full architecture graph features (filters, layers, tags)",
      "Full anti-pattern suite (chatty calls, cycles, god service, shared DB writes, cross-DB reads, tight coupling)",
      "Simulation scenarios: Different RPS / traffic patterns, Latency injection, Failure scenarios",
      "Cost estimation & performance reports",
      "Export graphs as PNG / SVG",
      "Export reports as PDF / JSON",
      "Priority email support",
    ],
    team: [
      "Everything in Pro, plus:",
      "Up to 5 team members (you can adjust this)",
      "Shared project workspace",
      "Role-based access: Viewer / Editor",
      "Shared pattern rules across team projects",
      "Team-wide simulation presets",
      "Change history for architectures",
      "Priority support / faster response",
      "Custom domain & SSO – Coming soon",
    ],
  },

  comparisonTable: {
    headers: ["", "Free", "Pro", "Team"],
    rows: [
      ["Projects", "3", "Unlimited", "Unlimited"],
      ["Max services / project", "20", "80", "60+"],
      ["Architecture graph", "Basic", "Advanced", "Advanced + shared"],
      ["Anti-pattern detection", "Core", "Full", "Full"],
      ["Simulation engine", "No", "Yes", "Yes"],
      ["Cost analysis", "No", "Yes", "Yes"],
      ["Export PNG", "Yes", "Yes", "Yes"],
      ["Export PDF / JSON", "No", "Yes", "Yes"],
      ["Team workspace", "No", "No", "Yes"],
      ["Support", "Community", "Priority", "Priority + team"],
    ],
    note: "Feature set and limits are for demonstration and can be adjusted as the research evolves.",
  },

  whatsIncluded: {
    title: "What's included in every plan",
    items: [
      {
        title: "1. Design Input Processing",
        description:
          "Import microservice and system flows in YAML/JSON or use broad mock specs. DG file names identify the data stores in a documented blockchain mode.",
      },
      {
        title: "2. Architecture Model & Anti-Pattern Detection (AMD & ASD)",
        description:
          "Combine all patterns at a user plan (and in an architectural model) to detect problems at every layer. Tracks code-performance, impact-isolation, and feature usage.",
      },
      {
        title: "3. Real - Time System Simulation",
        description:
          "An open architecture to simulate, run real-time scenarios to determine behavior, throughput, and middleware built-in feature by a predictable.",
      },
      {
        title: "4. Architecture Analysis & Suggestions",
        description:
          "Includes control-level area, suggests different architecture versions, and get suggestions on needed resource capacity, resource residence, and current cost.",
      },
    ],
  },

  faq: {
    title: "Pricing & plans FAQ",
    items: [
      {
        question: "1. Is GO-SIM free for students?",
        answer:
          "Yes. The Free plan is designed for students and small research experiments with limited project size.",
      },
      {
        question: "2. Can I upgrade or downgrade anytime?",
        answer:
          "Yes. You can switch between plans at any time; changes simply apply to your next billing cycle.",
      },
      {
        question: "3. What happens if I hit the limits on the Free plan?",
        answer:
          "You can delete old projects to stay within the limits, or upgrade to Pro for more capacity.",
      },
      {
        question: "4. Do you offer academic or lab licenses?",
        answer:
          "Yes. The Team plan can be customized for labs or capstone groups. Contact us to discuss.",
      },
      {
        question: "5. Do you store my architecture data?",
        answer:
          "For the prototype, data is used only inside GO-SIM for analysis and visualization. You can delete your projects at any time.",
      },
      {
        question: "6. Can I cancel my subscription?",
        answer:
          "You can cancel anytime. You'll keep access to Pro/Team features until the end of your billing period.",
      },
    ],
  },

  cta: {
    title: "Not sure which plan to choose?",
    subtitle:
      "Start with the Free plan, measure your ArcFind architecture, and upgrade only if you need more projects, add simulations.",
    buttons: {
      free: "Start Free",
      talk: "Talk to us",
    },
  },
} as const;
