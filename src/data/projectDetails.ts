export interface ProjectDetails {
  id: string;
  hero: {
    name: string;
    subtitle: string;
    status: string;
    category: string;
    duration: string;
    role: string;
  };
  problem: {
    intro: string;
    bullets: string[];
    conclusion: string;
  };
  architecture: {
    nodes: string[];
  };
  features: string[];
  techStack: {
    category: string;
    techs: string[];
  }[];
  workflow: {
    stage: string;
    title: string;
  }[];
  innovations: string[];
  metrics: {
    value: string;
    label: string;
  }[];
  gallery: string[];
  roadmap: {
    phase: string;
    title: string;
  }[];
  links: {
    source: string;
    demo: string;
    docs: string;
  };
}

export const projectDetailsData: Record<string, ProjectDetails> = {
  "01": {
    id: "01",
    hero: {
      name: "PRAHARI",
      subtitle: "AI Railway Safety Intelligence Platform",
      status: "Active Development",
      category: "Railway Safety + Artificial Intelligence",
      duration: "2025 – Present",
      role: "Founder • AI Engineer • Full Stack Developer"
    },
    problem: {
      intro: "Indian Railways faces critical challenges including:",
      bullets: [
        "Loco Pilot Fatigue",
        "Microsleep Incidents",
        "SPAD Accidents",
        "Operational Risk Visibility",
        "Delayed Emergency Response"
      ],
      conclusion: "PRAHARI was created to address these challenges through real-time AI monitoring and predictive risk intelligence."
    },
    architecture: {
      nodes: [
        "Camera",
        "Face Detection",
        "Feature Extraction",
        "CNN Classification",
        "BiLSTM Analysis",
        "Risk Fusion Engine",
        "CCRS Engine",
        "Alerts & Dashboard"
      ]
    },
    features: [
      "Fatigue Detection",
      "Microsleep Detection",
      "Citizen Safety Module",
      "SOS Alert System",
      "Railway Command Center",
      "Risk Intelligence Dashboard",
      "Real-Time Telemetry",
      "Explainable AI Analytics"
    ],
    techStack: [
      { category: "Frontend", techs: ["React", "TypeScript", "Tailwind", "Framer Motion"] },
      { category: "Backend", techs: ["FastAPI", "Python", "WebSockets"] },
      { category: "AI/ML", techs: ["PyTorch", "MediaPipe", "YOLOv8", "BiLSTM", "OpenCV"] },
      { category: "Cloud & Infrastructure", techs: ["Firebase", "Docker", "Prometheus", "Grafana"] }
    ],
    workflow: [
      { stage: "Stage 1", title: "Data Acquisition" },
      { stage: "Stage 2", title: "Feature Extraction" },
      { stage: "Stage 3", title: "Model Inference" },
      { stage: "Stage 4", title: "Risk Evaluation" },
      { stage: "Stage 5", title: "Alert Generation" },
      { stage: "Stage 6", title: "Dashboard Monitoring" }
    ],
    innovations: [
      "Composite Convergence Risk Score (CCRS)",
      "Multi-modal AI Fusion",
      "Real-Time Fatigue Prediction",
      "Railway Safety Intelligence Platform"
    ],
    metrics: [
      { value: "95%+", label: "Detection Accuracy" },
      { value: "50ms", label: "Inference Latency" },
      { value: "30 FPS", label: "Real-Time Processing" },
      { value: "97%+", label: "Recall Rate" }
    ],
    gallery: [
      "https://www.image2url.com/r2/default/images/1781632931820-8f19fc1f-b22b-4496-8069-f1a70a3b3929.png"
    ],
    roadmap: [
      { phase: "Phase 1", title: "Fatigue Detection" },
      { phase: "Phase 2", title: "CCRS Engine" },
      { phase: "Phase 3", title: "Citizen Safety" },
      { phase: "Phase 4", title: "Railway Digital Twin" },
      { phase: "Phase 5", title: "National Deployment" }
    ],
    links: { source: "#", demo: "#", docs: "#" }
  },
  "02": {
    id: "02",
    hero: {
      name: "UzhavanAI",
      subtitle: "AI-driven intelligent farming assistant",
      status: "Beta Testing",
      category: "Agri-Tech + Machine Learning",
      duration: "2024 – Present",
      role: "Lead Developer • ML Engineer"
    },
    problem: {
      intro: "Farmers in Tamil Nadu face severe challenges including:",
      bullets: [
        "Unpredictable crop diseases",
        "Soil degradation",
        "Inefficient water usage",
        "Lack of real-time crop insights",
        "Delayed expert intervention"
      ],
      conclusion: "UzhavanAI provides real-time, AI-driven decision support directly to farmers via their smartphones."
    },
    architecture: {
      nodes: [
        "Mobile Upload",
        "Image Preprocessing",
        "Leaf Segmentation",
        "CNN Disease Classification",
        "Weather API Fusion",
        "Generative Recommendations",
        "Farmer Dashboard"
      ]
    },
    features: [
      "Crop Disease Detection",
      "Soil Health Analysis",
      "Hyper-local Weather Alerts",
      "Fertilizer Recommendations",
      "Yield Prediction",
      "Regional Language Support",
      "Offline Mode Analytics",
      "Direct Agronomist Chat"
    ],
    techStack: [
      { category: "Frontend", techs: ["React Native", "TypeScript", "Tailwind"] },
      { category: "Backend", techs: ["Node.js", "Express", "GraphQL"] },
      { category: "AI/ML", techs: ["TensorFlow", "Keras", "OpenCV"] },
      { category: "Cloud & Infrastructure", techs: ["AWS S3", "MongoDB", "Heroku"] }
    ],
    workflow: [
      { stage: "Stage 1", title: "Image Capture" },
      { stage: "Stage 2", title: "Cloud Sync" },
      { stage: "Stage 3", title: "CNN Inference" },
      { stage: "Stage 4", title: "Remedy Generation" },
      { stage: "Stage 5", title: "User Notification" }
    ],
    innovations: [
      "Offline-first Edge AI Models",
      "Tamil NLP Integration",
      "Zero-Latency Field Scans",
      "Automated Soil Mapping"
    ],
    metrics: [
      { value: "92%", label: "Disease Accuracy" },
      { value: "10k+", label: "Farmers Reached" },
      { value: "2 sec", label: "Scan Time" },
      { value: "5+", label: "Crops Supported" }
    ],
    gallery: [
      "https://www.image2url.com/r2/default/images/1777112094688-dea72660-ec86-4e18-8a09-2d963a8b7748.png"
    ],
    roadmap: [
      { phase: "Phase 1", title: "Disease Recognition" },
      { phase: "Phase 2", title: "Vernacular Chatbot" },
      { phase: "Phase 3", title: "Drone Integrations" },
      { phase: "Phase 4", title: "Automated Irrigation" },
      { phase: "Phase 5", title: "Pan-India Launch" }
    ],
    links: { source: "#", demo: "#", docs: "#" }
  },
  "03": {
    id: "03",
    hero: {
      name: "Uzhavan Bazaar",
      subtitle: "Digital marketplace connecting farmers and consumers",
      status: "Deployed",
      category: "E-Commerce + Logistics",
      duration: "2023",
      role: "Full Stack Developer"
    },
    problem: {
      intro: "The agricultural supply chain suffers from inefficiencies:",
      bullets: [
        "Multiple exploitative middlemen",
        "High post-harvest losses",
        "Unfair pricing for farmers",
        "Lack of direct market access",
        "Poor supply chain transparency"
      ],
      conclusion: "Uzhavan Bazaar eliminates middlemen, establishing a direct, transparent pipeline between farmers and consumers."
    },
    architecture: {
      nodes: [
        "Farmer Portal",
        "Product Cataloging",
        "Dynamic Pricing Engine",
        "Order Orchestration",
        "Payment Gateway",
        "Logistics Routing",
        "Consumer App"
      ]
    },
    features: [
      "Direct B2C Transactions",
      "Dynamic Fair Pricing",
      "Real-Time Order Tracking",
      "Secure UPI Payments",
      "Automated Invoicing",
      "Multi-vendor Support",
      "Hyperlocal Delivery Routing",
      "Rating & Review System"
    ],
    techStack: [
      { category: "Frontend", techs: ["React", "Next.js", "Redux"] },
      { category: "Backend", techs: ["Node.js", "Express", "Socket.io"] },
      { category: "Databases", techs: ["MongoDB", "Redis"] },
      { category: "Cloud & Payments", techs: ["Razorpay", "AWS EC2", "Cloudflare"] }
    ],
    workflow: [
      { stage: "Stage 1", title: "Harvest Listing" },
      { stage: "Stage 2", title: "Quality Verification" },
      { stage: "Stage 3", title: "Consumer Purchase" },
      { stage: "Stage 4", title: "Logistics Dispatch" },
      { stage: "Stage 5", title: "Delivery Confirmation" }
    ],
    innovations: [
      "Dynamic Pricing Algorithm",
      "Zero-Commission Architecture",
      "Blockchain Trust Ledger (Beta)",
      "Smart Routing for Perishables"
    ],
    metrics: [
      { value: "50k+", label: "Monthly Orders" },
      { value: "0%", label: "Middlemen Fees" },
      { value: "30%", label: "Farmer Profit Boost" },
      { value: "24hr", label: "Farm-to-Table" }
    ],
    gallery: [
      "https://www.image2url.com/r2/default/images/1777112150697-746a4c86-caf6-4e0b-a4e5-ce3b03ce8bc7.png"
    ],
    roadmap: [
      { phase: "Phase 1", title: "P2P Marketplace" },
      { phase: "Phase 2", title: "Cold Chain Integration" },
      { phase: "Phase 3", title: "AI Demand Prediction" },
      { phase: "Phase 4", title: "B2B Export Module" }
    ],
    links: { source: "#", demo: "#", docs: "#" }
  },
  "04": {
    id: "04",
    hero: {
      name: "MOONIQ",
      subtitle: "AI-powered productivity and intelligent workspace platform",
      status: "Production",
      category: "Productivity + Generative AI",
      duration: "2024",
      role: "Lead Software Engineer"
    },
    problem: {
      intro: "Knowledge workers struggle with severe information overload:",
      bullets: [
        "Scattered documentation",
        "Inefficient meeting summaries",
        "Context switching fatigue",
        "Unorganized task pipelines",
        "Slow information retrieval"
      ],
      conclusion: "MOONIQ acts as an intelligent second brain, centralizing knowledge and automating workspace productivity."
    },
    architecture: {
      nodes: [
        "User Input",
        "Context Parsing",
        "Vector Embeddings",
        "Semantic Search",
        "LLM Generation",
        "Task Extraction",
        "Dashboard Output"
      ]
    },
    features: [
      "Auto-Generated Meeting Notes",
      "Semantic Document Search",
      "Task Auto-Categorization",
      "Intelligent Calendar Sync",
      "Knowledge Graph Mapping",
      "Voice-to-Text Memos",
      "Automated Follow-ups",
      "Team Collaboration Hub"
    ],
    techStack: [
      { category: "Frontend", techs: ["Next.js", "Zustand", "Tailwind"] },
      { category: "Backend", techs: ["Go", "gRPC", "PostgreSQL"] },
      { category: "AI/ML", techs: ["OpenAI API", "Pinecone", "LangChain"] },
      { category: "Infrastructure", techs: ["Vercel", "GCP", "Kubernetes"] }
    ],
    workflow: [
      { stage: "Stage 1", title: "Data Ingestion" },
      { stage: "Stage 2", title: "Vectorization" },
      { stage: "Stage 3", title: "Semantic Indexing" },
      { stage: "Stage 4", title: "Query Processing" },
      { stage: "Stage 5", title: "AI Synthesis" }
    ],
    innovations: [
      "Real-time Context Mapping",
      "Zero-Shot Task Extraction",
      "Privacy-First Local LLM Fallback",
      "Fluid Workspace UI"
    ],
    metrics: [
      { value: "40%", label: "Time Saved" },
      { value: "99%", label: "Search Accuracy" },
      { value: "100ms", label: "Query Latency" },
      { value: "5k+", label: "Active Users" }
    ],
    gallery: [
      "https://www.image2url.com/r2/default/images/1777112272586-24e548de-0551-4d5f-bac6-81769922a5cc.png"
    ],
    roadmap: [
      { phase: "Phase 1", title: "Smart Notes" },
      { phase: "Phase 2", title: "Vector Search" },
      { phase: "Phase 3", title: "Team Knowledge Graphs" },
      { phase: "Phase 4", title: "Autonomous Agents" }
    ],
    links: { source: "#", demo: "#", docs: "#" }
  },
  "05": {
    id: "05",
    hero: {
      name: "EchoLive",
      subtitle: "Real-time multilingual AI communication platform",
      status: "Deployed",
      category: "Telecommunications + NLP",
      duration: "2023 – 2024",
      role: "Architect • Full Stack Engineer"
    },
    problem: {
      intro: "Global communication is hindered by language barriers:",
      bullets: [
        "High latency in live translation",
        "Loss of contextual meaning",
        "Poor speech recognition in noisy environments",
        "Lack of emotional tone preservation",
        "Expensive human interpreters"
      ],
      conclusion: "EchoLive utilizes advanced NLP to provide seamless, real-time translated voice and text communication."
    },
    architecture: {
      nodes: [
        "Audio Stream",
        "Noise Suppression",
        "ASR (Whisper)",
        "NMT Translation",
        "Voice Cloning TTS",
        "WebRTC Transmission",
        "Receiver Playback"
      ]
    },
    features: [
      "Real-Time Speech Translation",
      "Live Translated Captions",
      "Speaker Diarization",
      "Emotion-Preserving TTS",
      "Low-Latency WebRTC",
      "End-to-End Encryption",
      "Multi-party Conferencing",
      "Meeting Transcript Export"
    ],
    techStack: [
      { category: "Frontend", techs: ["React", "WebRTC", "Socket.io"] },
      { category: "Backend", techs: ["Node.js", "C++ Media Server"] },
      { category: "AI/ML", techs: ["Whisper AI", "NLLB", "XTTS"] },
      { category: "Infrastructure", techs: ["AWS EC2", "Redis", "TURN/STUN"] }
    ],
    workflow: [
      { stage: "Stage 1", title: "Audio Capture" },
      { stage: "Stage 2", title: "VAD & Denoising" },
      { stage: "Stage 3", title: "ASR Transcription" },
      { stage: "Stage 4", title: "Neural Translation" },
      { stage: "Stage 5", title: "TTS Synthesis" },
      { stage: "Stage 6", title: "Stream Delivery" }
    ],
    innovations: [
      "Sub-500ms Translation Pipeline",
      "Voice Clone Passthrough",
      "Dynamic Vocabulary Adaptation",
      "Edge-Optimized ASR"
    ],
    metrics: [
      { value: "50+", label: "Languages" },
      { value: "<500ms", label: "Pipeline Latency" },
      { value: "95%", label: "WER Accuracy" },
      { value: "256-bit", label: "Encryption" }
    ],
    gallery: [
      "https://www.image2url.com/r2/default/images/1777112444624-afe9e95f-359b-4f06-a576-3f4b5541c9ca.png"
    ],
    roadmap: [
      { phase: "Phase 1", title: "Text Translation" },
      { phase: "Phase 2", title: "Speech-to-Text" },
      { phase: "Phase 3", title: "Real-time TTS" },
      { phase: "Phase 4", title: "Video Lip Sync" }
    ],
    links: { source: "#", demo: "#", docs: "#" }
  },
  "06": {
    id: "06",
    hero: {
      name: "SecureLand",
      subtitle: "Blockchain-enabled land registry and ownership verification system",
      status: "Proof of Concept",
      category: "Blockchain + Legal Tech",
      duration: "2023",
      role: "Smart Contract Developer"
    },
    problem: {
      intro: "Traditional land registry systems are highly vulnerable:",
      bullets: [
        "Document forgery and fraud",
        "Lengthy verification processes",
        "Disputed land boundaries",
        "Corrupt central authorities",
        "Lack of historical transparency"
      ],
      conclusion: "SecureLand decentralizes land records, making ownership immutable, transparent, and instantly verifiable."
    },
    architecture: {
      nodes: [
        "User Interface",
        "Identity Verification",
        "IPFS Document Storage",
        "Ethereum Smart Contracts",
        "Consensus Mechanism",
        "Immutable Ledger",
        "Blockchain Explorer"
      ]
    },
    features: [
      "Immutable Title Deeds",
      "Smart Contract Transfers",
      "Decentralized Document Storage",
      "Historical Ownership Traceability",
      "Multi-Signature Approvals",
      "Automated Tax Compliance",
      "Geo-Spatial Coordinate Logging",
      "Zero-Knowledge Identity Proofs"
    ],
    techStack: [
      { category: "Frontend", techs: ["React", "Ethers.js", "Web3Modal"] },
      { category: "Smart Contracts", techs: ["Solidity", "Hardhat", "OpenZeppelin"] },
      { category: "Storage", techs: ["IPFS", "Filecoin"] },
      { category: "Networks", techs: ["Ethereum", "Polygon", "Alchemy"] }
    ],
    workflow: [
      { stage: "Stage 1", title: "KYC/KYB Verification" },
      { stage: "Stage 2", title: "Asset Minting (NFT)" },
      { stage: "Stage 3", title: "Registry Update" },
      { stage: "Stage 4", title: "Transfer Agreement" },
      { stage: "Stage 5", title: "Smart Contract Execution" }
    ],
    innovations: [
      "Property-as-NFT Architecture",
      "Fractional Ownership Protocols",
      "Automated Escrow Contracts",
      "Decentralized Dispute Resolution"
    ],
    metrics: [
      { value: "100%", label: "Uptime" },
      { value: "0", label: "Fraud Incidents" },
      { value: "3s", label: "Transaction Time" },
      { value: "100x", label: "Cost Reduction" }
    ],
    gallery: [
      "https://www.image2url.com/r2/default/images/1777112530383-9b705a0b-3ef9-4f64-8ac0-64946c29aaf9.png"
    ],
    roadmap: [
      { phase: "Phase 1", title: "Smart Contracts" },
      { phase: "Phase 2", title: "IPFS Integration" },
      { phase: "Phase 3", title: "Govt API Bridges" },
      { phase: "Phase 4", title: "Tokenized Real Estate" }
    ],
    links: { source: "#", demo: "#", docs: "#" }
  },
  "07": {
    id: "07",
    hero: {
      name: "Bioxen",
      subtitle: "Healthcare and biotechnology intelligence platform",
      status: "Active Development",
      category: "Healthcare + IoT",
      duration: "2024",
      role: "IoT Solutions Architect"
    },
    problem: {
      intro: "Biomedical and pharmaceutical environments require extreme precision:",
      bullets: [
        "Undetected cleanroom anomalies",
        "Equipment temperature deviations",
        "Contamination risks",
        "Manual regulatory compliance logging",
        "Delayed equipment failure alerts"
      ],
      conclusion: "Bioxen provides an intelligent IoT network for automated, real-time monitoring of sensitive biomedical environments."
    },
    architecture: {
      nodes: [
        "IoT Sensors",
        "Edge Gateway",
        "MQTT Broker",
        "Stream Processing",
        "Anomaly Detection AI",
        "Time-Series Database",
        "Alert Orchestrator"
      ]
    },
    features: [
      "Real-Time Environmental Telemetry",
      "Predictive Maintenance AI",
      "Automated Compliance Reports (FDA/ISO)",
      "Cleanroom Particle Monitoring",
      "Cold Chain Tracking",
      "Encrypted Data Logging",
      "Mobile Alerting System",
      "Digital Twin Visualization"
    ],
    techStack: [
      { category: "Frontend", techs: ["Vue.js", "Three.js", "Tailwind"] },
      { category: "Backend", techs: ["Python", "MQTT", "Kafka"] },
      { category: "AI/ML", techs: ["TensorFlow", "Isolation Forests", "Prophet"] },
      { category: "Infrastructure", techs: ["InfluxDB", "AWS IoT Core", "Grafana"] }
    ],
    workflow: [
      { stage: "Stage 1", title: "Sensor Telemetry" },
      { stage: "Stage 2", title: "Edge Aggregation" },
      { stage: "Stage 3", title: "Cloud Streaming" },
      { stage: "Stage 4", title: "AI Anomaly Scanning" },
      { stage: "Stage 5", title: "Dashboard Update" }
    ],
    innovations: [
      "Ultra-Low Power Sensor Grid",
      "Federated Learning on Edge",
      "3D Digital Twin Integration",
      "Zero-Trust Network Architecture"
    ],
    metrics: [
      { value: "99.9%", label: "Sensor Uptime" },
      { value: "24/7", label: "Continuous Monitoring" },
      { value: "<10ms", label: "Alert Latency" },
      { value: "100%", label: "Audit Compliance" }
    ],
    gallery: [
      "https://www.image2url.com/r2/default/images/1777112217931-c11e0c56-886f-4b9a-b418-e9c2cdc522df.png"
    ],
    roadmap: [
      { phase: "Phase 1", title: "Sensor Prototyping" },
      { phase: "Phase 2", title: "Cloud Infrastructure" },
      { phase: "Phase 3", title: "Predictive AI" },
      { phase: "Phase 4", title: "Hospital Deployment" }
    ],
    links: { source: "#", demo: "#", docs: "#" }
  }
};
