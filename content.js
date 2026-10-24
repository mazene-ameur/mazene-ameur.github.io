/*
  All site content lives here. Edit this file to update the website;
  index.html only handles layout and behaviour.

  Tips
  - To add a paper: copy one entry in `publications`, change the fields.
  - `threads` on a paper must match ids in `threads` below.
  - `video` takes a YouTube link. Leave it out if there is no recording.
  - Put your photo at assets/photo.jpg (square, about 600x600). If the file
    is missing, the site shows your initials instead.
*/
window.SITE = {
  person: {
    name: "Mazene Ameur",
    initials: "MA",
    role: "PhD Researcher in Computer Science",
    tagline: "AI/ML for zero-touch management of 5G/6G networks",
    affiliation: "EURECOM and Sorbonne University",
    location: "Sophia Antipolis, France",
    email: "mazene.ameur@eurecom.fr",
    photo: "assets/photo.jpg",
    cv: "assets/cv.pdf",
    summary:
      "I work on AI/ML-driven automation for 6G network management and orchestration. My research moves from paper to running testbed: drift-aware learning, LLM agents that turn operator intents into network actions, and MLOps built into the 3GPP core, all aligned with 3GPP, ETSI and TM Forum standards. I contribute to three European 6G flagship projects and maintain the open-source OAI-NWDAF.",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=L4Ilpa4AAAAJ&hl=en" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/mazene-ameur-1757a8221/" },
      { label: "GitLab", url: "https://gitlab.eurecom.fr/netsoft/nwdaf-rel17" }
    ]
  },

  threads: [
    { id: "drift", name: "Model drift and trustworthy learning",
      blurb: "Detecting and handling drift so deployed models stay reliable as 6G traffic changes." },
    { id: "agentic", name: "Agentic AI and LLMs",
      blurb: "LLM agents that read operator intents and configure, explain and audit the network." },
    { id: "nwdaf", name: "NWDAF and MLOps",
      blurb: "Model training, serving and federation inside the 3GPP core, Release 17/18." },
    { id: "compliance", name: "AI governance and compliance",
      blurb: "Automated auditing of network AI against the EU AI Act and telecom regulation." },
    { id: "drl", name: "Deep reinforcement learning",
      blurb: "DRL for slicing, routing and path selection, with uncertainty and explainability." }
  ],

  publications: [
    {
      type: "journal",
      title: "Dual Self-Attention is What You Need for Model Drift Detection in 6G Networks",
      authors: ["M. Ameur", "B. Brik", "A. Ksentini"],
      venue: "IEEE Transactions on Machine Learning in Communications and Networking",
      venueShort: "IEEE TMLCN",
      details: "vol. 3, pp. 690–709",
      year: 2025,
      doi: "10.1109/TMLCN.2025.3576727",
      threads: ["drift"]
    },
    {
      type: "journal",
      title: "EUROCOMPLY: Enabling Zero-Touch AI Compliance Auditing via LLM-based Agentic AI",
      authors: ["M. Ameur", "B. Brik", "A. Ksentini"],
      venue: "IEEE Communications Magazine",
      venueShort: "IEEE ComMag",
      doi: "10.1109/MCOM.001.2500366",
      threads: ["agentic", "compliance"]
    },
    {
      type: "conference",
      title: "Uncertainty-aware Zero-Touch Drift Management for Trustworthy DRL in 5G/6G Networks",
      authors: ["M. Ameur", "B. Brik", "A. Ksentini"],
      venue: "IEEE INFOCOM 2026, Tokyo, Japan",
      venueShort: "IEEE INFOCOM",
      rank: "Core A*",
      year: 2026,
      threads: ["drift", "drl"]
    },
    {
      type: "conference",
      title: "Agentic-NWDAF: Enabling Intent-driven Agentic Intelligence for Autonomous 6G Network Analytics",
      authors: ["M. Ameur", "B. Brik", "A. Ksentini"],
      venue: "IEEE ICC 2026, Glasgow, UK",
      venueShort: "IEEE ICC",
      year: 2026,
      threads: ["agentic", "nwdaf"]
    },
    {
      type: "conference",
      title: "Adapt but Do Not Forget: Towards Enhancing Drift Handling in 6G Networks",
      authors: ["M. Ameur", "B. Brik", "A. Ksentini"],
      venue: "IEEE ICMLCN 2025",
      venueShort: "IEEE ICMLCN",
      details: "pp. 1–6",
      year: 2025,
      threads: ["drift"]
    },
    {
      type: "conference",
      title: "Exploring Teacher-Student Learning with Multi-Agent DRL for QoS Routing in SDN",
      authors: ["M. Ameur", "A. Bradai", "N. Lagraa"],
      venue: "IEEE ICC 2025",
      venueShort: "IEEE ICC",
      year: 2025,
      threads: ["drl"]
    },
    {
      type: "conference",
      title: "Leveraging LLMs to Explain DRL Decisions for Transparent 6G Network Slicing",
      authors: ["M. Ameur", "B. Brik", "A. Ksentini"],
      venue: "IEEE NetSoft 2024",
      venueShort: "IEEE NetSoft",
      details: "pp. 204–212",
      year: 2024,
      threads: ["agentic", "drl"]
    },
    {
      type: "demo",
      title: "When MLOps Meet NWDAF Release 18",
      authors: ["M. Ameur", "A. Ksentini"],
      venue: "ETSI SNS4SNS 2026",
      venueShort: "ETSI SNS4SNS",
      year: 2026,
      threads: ["nwdaf"]
    },
    {
      type: "demo",
      title: "Automated Regulatory Compliance Validation for AI/ML Systems in Telecommunications via Agentic AI",
      authors: ["M. Ameur", "A. Ksentini"],
      venue: "ETSI AI & Data Conference 2026",
      venueShort: "ETSI AI & Data",
      year: 2026,
      threads: ["agentic", "compliance"]
    },
    {
      type: "demo",
      title: "EUROCOMPLY: Enabling Automated Regulatory Compliance Auditing AI Systems",
      authors: ["M. Ameur", "A. Ksentini"],
      venue: "EuCNC 2026",
      venueShort: "EuCNC",
      year: 2026,
      video: "https://www.youtube.com/watch?v=nczcZeryCxM",
      threads: ["agentic", "compliance"]
    }
  ],

  /* Shown in the "Demos" section. Each entry with a video gets a player. */
  demos: [
    {
      title: "EUROCOMPLY at EuCNC 2026",
      text: "Automated regulatory compliance auditing of AI systems in telecom networks, driven by LLM-based agentic AI. Demonstrated at EuCNC 2026.",
      video: "https://www.youtube.com/watch?v=nczcZeryCxM",
      threads: ["agentic", "compliance"]
    },
    {
      title: "When MLOps meet NWDAF Release 18",
      text: "Live demonstration at ETSI SNS4SNS 2026 of model training, deployment and monitoring running inside a Release 18 NWDAF.",
      threads: ["nwdaf"]
    },
    {
      title: "Compliance validation via agentic AI",
      text: "Demonstration at the ETSI AI & Data Conference 2026 of automated validation of telecom AI/ML systems against regulatory requirements.",
      threads: ["agentic", "compliance"]
    }
  ],

  openSource: {
    name: "OAI-NWDAF",
    role: "Maintainer and contributor, 2025 to present",
    summary:
      "Upgrade of the OpenAirInterface Network Data Analytics Function to 3GPP Release 17/18. I architected the cloud-native, service-based MLOps layer inside the NWDAF core and led the refactoring that separates the Analytics Logical Function (AnLF) from the Model Training Logical Function (MTLF), as the specifications require.",
    extra:
      "I also extended it with horizontal federated learning across NWDAF instances, so distributed MTLFs train a shared model without exchanging raw data.",
    links: [
      { label: "Repository", url: "https://gitlab.eurecom.fr/netsoft/nwdaf-rel17" },
      { label: "Federated learning branch", url: "https://gitlab.eurecom.fr/netsoft/nwdaf-rel17/-/tree/federated-learning" }
    ],
    stack: ["3GPP Release 17/18", "AnLF / MTLF split", "Horizontal federated learning", "Cloud-native MLOps"]
  },

  projects: [
    { name: "6G-DALI", period: "2024 to present", kind: "EU 6G project",
      full: "6G Data and ML Operations Automation via an End-to-End AI Framework",
      text: "Tailored MLOps for the NWDAF core network, led its upgrade from 3GPP Release 15 to Release 18, and strengthened AI governance and compliance mechanisms." },
    { name: "SUNRISE-6G", period: "2024 to present", kind: "EU 6G project",
      full: "Federation of Research Infrastructures for 6G Experimentation",
      text: "Upgraded EURECOM's 6G testbed with a Kubernetes-based MLOps platform for scalable training, deployment and experiment lifecycle management." },
    { name: "6G-BRICKS", period: "2024 to 2025", kind: "EU 6G project",
      full: "Reusable Testbed Infrastructures for Cloud-to-Device Technologies",
      text: "Applied LLMs to explain DRL decisions in network slicing use cases." },
    { name: "DRL path selection in SD-WAN", period: "2023", kind: "Master's project, XLIM Laboratory",
      text: "DRL framework for path selection, supervised by Prof. Abbas Bradai (University of Poitiers) and Prof. Nasreddine Lagraa (University of Laghouat)." },
    { name: "Energy reduction with Q-learning", period: "2022", kind: "Applied project",
      text: "Q-learning to reduce the energy consumption of an industrial installation." }
  ],

  experience: [
    { title: "Research Engineer, European 6G Research Projects", org: "EURECOM, Sophia Antipolis", period: "2024 to present",
      points: [
        "Built an end-to-end MLOps platform for EURECOM's 6G facility with MLflow, MinIO and Kubernetes.",
        "Built LLM-powered agents for intent-based networking that turn high-level intents into network configuration.",
        "Designed frameworks for AI governance and compliance: transparency, fairness and regulatory adherence.",
        "Worked with IBM Ireland, Lenovo Deutschland, Siemens, Sorbonne Université and the University of Oulu.",
        "Supervised PhD students and interns on intent-based networking, MLOps for 5G/6G cores, and 3GPP and TM Forum standards."
      ] },
    { title: "Teaching Assistant", org: "EURECOM", period: "Feb. to Jun. 2025",
      points: ["Lab sessions and grading for Introduction to Networks (engineering school) and 5G Core Network (master's level)."] },
    { title: "Research Intern", org: "XLIM Laboratory, Poitiers", period: "Feb. to Jun. 2023",
      points: ["Reviewed state-of-the-art DRL for path selection and proposed a new approach, as the master's graduation project."] }
  ],

  education: [
    { degree: "PhD in Computer Science", school: "Sorbonne University, research at EURECOM", start: 2024, end: "Nov. 2026",
      note: "Thesis: Novel AI/ML Techniques for Zero-Touch Service Management in 6G Networks" },
    { degree: "MSc in Networking and Distributed Systems", school: "University of Laghouat, Algeria", start: 2021, end: "2023",
      note: "Ranked 1st in cohort. Thesis: Machine Learning for Resource Allocation in Partially Observable Networks (18.25/20). GPA 15.44/20." },
    { degree: "BSc in Information Systems", school: "University of Laghouat, Algeria", start: 2018, end: "2021",
      note: "Ranked 1st in cohort. GPA 16.36/20." },
    { degree: "Baccalaureate, Experimental Sciences", school: "1st November 1954 High School, Laghouat", start: 2017, end: "2018",
      note: "GPA 17.02/20. Among the top 10 students at state level in the national examination." }
  ],

  service: {
    reviewer: ["IEEE Transactions on Mobile Computing", "IEEE Communications Magazine", "IEEE IoT Magazine", "IEEE NFV-SDN 2025", "IEEE CAMAD 2024", "IWCMC 2025"]
  },

  skills: [
    { group: "Standards and regulation", items: ["3GPP", "ETSI", "TM Forum", "EU AI Act", "GDPR"] },
    { group: "ML and AI", items: ["Deep learning", "Reinforcement learning", "Federated learning", "LLMs", "Agentic AI", "XAI"] },
    { group: "MLOps and cloud", items: ["MLflow", "MinIO", "Kubernetes", "Docker", "Ollama", "CrewAI", "ChromaDB", "FastAPI", "Flask", "n8n"] },
    { group: "Programming and simulation", items: ["Python", "Java", "OMNeT++", "NS-2", "Mininet", "Android Studio", "Scilab"] },
    { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server"] },
    { group: "Languages", items: ["English", "French", "Arabic"] }
  ],

  certifications: [
    "MLOps Bootcamp: Mastering AI Operations for Success (AIOps), Udemy, 2024",
    "Explainable AI (XAI) with Python, Udemy, 2023",
    "Deep Learning A-Z: Hands-On Artificial Neural Networks, Udemy, 2022",
    "EnglishScore C1, British Council, 2021"
  ]
};
