export const profile = {
  name: "Kshitij Tiwari",
  roles: ["Software Engineer", "Full-Stack Developer", "Technology Enthusiast"],
  tagline:
    "I build fast, secure, and well-considered software , from client facing web platforms to Python driven research prototypes.",
  location: "Bengaluru, Karnataka, India",
  email: "kshitij11tiwari@gmail.com",
  phone: "+91-8827853928",
  linkedin: "https://linkedin.com/in/kshitij1112",
  linkedinLabel: "kshitij1112",
  github: "https://github.com/kshitij-1112",
  githubLabel: "kshitij-1112",
  resumeUrl: "/resume.pdf",
  // Set to true after you add a real photo at public/images/kshitij.jpg
  hasPhoto: true,
  photoSrc: "/images/kshitij.jpg",
};

export type ExperienceEntry = {
  id: string;
  role: string;
  org: string;
  period: string;
  summary: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "z14",
    role: "Software Engineer",
    org: "Z14 AI Solutions",
    period: "Dec 2025 — Jun 2026",
    summary:
      "End-to-end ownership of client web platforms, bridging technical delivery with business strategy.",
    bullets: [
      "Developed and managed 2 corporate websites, improving user engagement by approximately 20%.",
      "Led end-to-end website deployment and maintenance, reducing production issues by 15%.",
      "Collaborated with leadership on technical planning and business strategy, supporting multiple client acquisition initiatives.",
      "Prepared business presentations and technical proposals contributing to successful stakeholder engagements.",
      "Participated in client meetings and solution discussions, helping secure new business opportunities.",
      "Mentored interns and supported recruitment activities, assisting in candidate screening and technical evaluations.",
      "Contributed to a Python-based sustainability prototype addressing product obsolescence challenges, reducing manual analysis effort by an estimated 25%.",
      "Coordinated development priorities across technical and business teams to improve project delivery efficiency by 20%.",
    ],
  },
  {
    id: "cognizant-analyst",
    role: "Programmer Analyst Trainee",
    org: "Cognizant",
    period: "Aug 2025 — Nov 2025",
    summary:
      "Full-stack contribution to a live pharmaceutical client application, working across the MVC stack.",
    bullets: [
      "Onboarded to a pharmaceutical client project and contributed to an MVC-based full-stack application.",
      "Developed frontend components and supported backend integration, gaining hands-on experience across application layers.",
      "Worked with existing application workflows, debugging, integration, and enterprise development practices.",
    ],
  },
  {
    id: "cognizant-intern",
    role: "Intern",
    org: "Cognizant",
    period: "Apr 2025 — Jul 2025",
    summary:
      "Enterprise training in the .NET stack, capped by leading a 5-member team through a full Agile delivery cycle.",
    bullets: [
      "Completed enterprise training in .NET, SQL Server, REST APIs, Git, Unix, Agile, and software engineering practices.",
      "Led a 5-member team in developing a Bank Loan Management System using ASP.NET MVC, C#, SQL Server, Bootstrap, and REST APIs.",
      "Coordinated Agile sprints and achieved 100% milestone completion across the training project.",
      "Designed database workflows that reduced loan-processing turnaround time by approximately 20%.",
      "Applied Git-based development and Agile practices to improve team collaboration and delivery efficiency by 15%.",
    ],
  },
];

export const education = {
  degree: "B.E. Information Science & Engineering",
  school: "Cambridge Institute of Technology, Bengaluru",
  period: "2021 — 2025",
};

export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  href?: string;
  hrefLabel?: string;
  metric?: string;
};

export const projects: Project[] = [
  {
    id: "crop-classification",
    name: "Crop Classification Using Deep Learning",
    category: "Research & Machine Learning",
    description:
      "A deep learning pipeline for classifying crop types from image data, applying machine learning and data analytics techniques to support agricultural decision-making. Presented at the international conference ICNGSDSCA-24 and contributed to a published research paper.",
    stack: ["Python", "Deep Learning", "Machine Learning", "Data Analytics"],
    metric: ">90% classification accuracy",
    hrefLabel: "Published Research",
  },
  {
    id: "stock-tracker",
    name: "Stock Price Tracker",
    category: "Web Application",
    description:
      "Real-time stock analysis platform with live updates, sorting, and comparison tools, built on a modular architecture for scalability and performance. Data-refresh checks are automated with Selenium.",
    stack: ["React", "Firebase", "JavaScript", "Selenium"],
    href: "https://github.com/kshitij-1112/Stock-Price-Tracker",
    hrefLabel: "View Repository",
  },
  {
    id: "cab-management",
    name: "Employee Cab Management System",
    category: "Web Application",
    description:
      "Database-driven web application for managing employee transportation logistics, handling scheduling and route coordination for a corporate fleet.",
    stack: ["PHP", "MySQL", "JavaScript", "XAMPP"],
    href: "https://github.com/kshitij-1112/Employee-Cab-Management-System",
    hrefLabel: "View Repository",
  },
  {
    id: "rcb-website",
    name: "RCB Fan Website",
    category: "Web Application",
    description:
      "Fan-focused site for IPL team RCB featuring team updates, player statistics, match results, and interactive fan polls for engagement.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/kshitij-1112/RCB-Website",
    hrefLabel: "View Repository",
  },
  {
    id: "loan-management",
    name: "Bank Loan Management System",
    category: "Team Project — Cognizant Internship",
    description:
      "Led a 5-member team building an MVC loan-processing platform, from database workflow design through to a full Agile sprint cycle with 100% milestone completion.",
    stack: ["ASP.NET MVC", "C#", "SQL Server", "Bootstrap", "REST APIs"],
    metric: "~20% faster loan-processing turnaround",
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Python", "C", "Java", "C#"] },
  {
    label: "Web Development",
    items: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Tailwind CSS",
      "ASP.NET Core",
    ],
  },
  {
    label: "Database",
    items: ["SQL", "SQL Server", "MySQL", "SSMS", "Firestore"],
  },
  {
    label: "Tools",
    items: ["Git", "REST APIs", "Selenium", "Unix Shell Scripting", "XAMPP"],
  },
  {
    label: "Concepts",
    items: [
      "Full-Stack Development",
      "SDLC",
      "OOP",
      "Agile Methodologies",
      "Problem Solving",
    ],
  },
];

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  href: string;
};

export const certifications: Certification[] = [
  {
    id: "azure-ai-fundamentals",
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/62908834/6D78834767B97ABC?sharingId",
  },
  {
    id: "azure-nlp",
    name: "Build NLP with Azure AI Language",
    issuer: "Microsoft",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/62908834/B3B4513A9DC64E39?sharingId",
  },
  {
    id: "google-cybersecurity",
    name: "Google Cybersecurity Specialization",
    issuer: "Google · Coursera",
    href: "https://www.coursera.org/account/accomplishments/specialization/C5JU6MS7GXWP",
  },
  {
    id: "google-ai-essentials",
    name: "Google AI Essentials",
    issuer: "Google · Coursera",
    href: "https://www.coursera.org/account/accomplishments/records/F3X85H6N3H2E",
  },
  {
    id: "hackerrank-python",
    name: "Python (Basic)",
    issuer: "HackerRank",
    href: "https://www.hackerrank.com/certificates/ec121ccc3f7e",
  },
  {
    id: "infosys-python",
    name: "Programming Fundamentals using Python",
    issuer: "Infosys Springboard",
    href: "https://drive.google.com/file/d/1Ate6kUGf_8xhhnPbshfQtRG2S8RBOEPc/view?usp=sharing",
  },
  {
    id: "infosys-dbms",
    name: "Database Management System & SQL",
    issuer: "Infosys Springboard",
    href: "https://drive.google.com/file/d/1d4D_jPMHnDEyHRk8JPcpMah0zwQ12v81/view?usp=sharing",
  },
  {
    id: "great-learning-pm",
    name: "Project Management",
    issuer: "Great Learning",
    href: "https://drive.google.com/file/d/19qg5f7cwB3cW6iniAHZdcpItfohr7pq5/view?usp=sharing",
  },
];
