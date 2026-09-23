export const profile = {
  name: 'Abbas Sadriwala',
  title: 'Software Developer | AI Engineer | Full-Stack Developer',
  about: 'Dynamic Software Developer adept at engineering elegant solutions for complex challenges. Proficient in diverse tech stacks, I excel in innovative, team-driven environments. Driven to create impactful and efficient software that makes a difference.',
  resume: '/assets/resume.pdf',
  email: 'abbassadri786@gmail.com',
  phone: '+91-887192XXX9',
  linkedin: 'https://www.linkedin.com/in/abbas-s-0a9522225',
  github: 'https://github.com/Abbassadri786',
  leetcode: 'https://leetcode.com/u/abbassadri786',
  photo: '/assets/profile.jpeg',
}

export const projects = [
  {
    title: 'HireLens AI', eyebrow: 'AI-Powered Recruitment Screening Platform',
    description: 'Integrated automated resume parsing and data normalization pipelines to standardize candidate submissions and reduce manual preprocessing for hiring teams.',
    bullets: [
      'Built a multi-tenant recruitment SaaS using PostgreSQL/pgvector and LangGraph to asynchronously parse, semantically match and rank candidate resumes against job requirements.',
      'Implemented hybrid candidate scoring combining deterministic skill matching, vector similarity and LLM-based reasoning, with explainable evidence for each score.',
      'Designed JWT/HttpOnly-cookie authentication, rate limiting, audit logging and AI-provider fallback between Gemini and Groq.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'pgvector', 'LangGraph', 'React', 'Gemini', 'Groq'],
    link: 'https://github.com/Abbassadri786/hirelens-ai', image: '/assets/hirelens-ai.png', variant: 'dark',
  },
  {
    title: 'Hotel Booking System', eyebrow: 'Full-Stack Booking Platform',
    description: 'Deployed a scalable hotel booking platform that processed 1,200+ monthly reservations, using Django and React to achieve a 40% reduction in booking-related user queries and support tickets within 6 months.',
    bullets: [
      'Implemented advanced filtering and sorting features for booking records with JavaScript and Bootstrap, enabling staff to efficiently locate reservations and enhance workflow productivity.',
      'Deployed a conversational AI interface to deliver instant responses to user inquiries and streamline chat history management.',
    ],
    stack: ['Django', 'React', 'JavaScript', 'Bootstrap', 'MySQL', 'AI Chatbot'],
    link: 'https://github.com/Abbassadri786/Hotel-Booking-System', image: '/assets/hbs.png', variant: 'light',
  },
]

const devicon = (slug) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`

export const skills = [
  { name: 'Python', icon: devicon('python'), tone: 'blue' },
  { name: 'Java', icon: devicon('java'), tone: 'red' },
  { name: 'C/C++', icon: devicon('cplusplus'), tone: 'blue' },
  { name: 'FastAPI', icon: devicon('fastapi'), tone: 'green' },
  { name: 'Django', icon: devicon('django'), tone: 'green' },
  { name: 'Spring Boot', icon: devicon('spring'), tone: 'green' },
  { name: 'Node.js', icon: devicon('nodejs'), tone: 'green' },
  { name: 'LangGraph', icon: '/assets/skill-ai.svg', tone: 'purple' },
  { name: 'Agentic AI', icon: '/assets/skill-agent.svg', tone: 'purple' },
  { name: 'TypeScript', icon: devicon('typescript'), tone: 'blue' },
  { name: 'ReactJS', icon: devicon('react'), tone: 'blue' },
  { name: 'RAG', icon: '/assets/skill-rag.svg', tone: 'purple' },
  { name: 'PostgreSQL', icon: devicon('postgresql'), tone: 'blue' },
  { name: 'MongoDB', icon: devicon('mongodb'), tone: 'green' },
  { name: 'Git', icon: devicon('git'), tone: 'orange' },
  { name: 'JUnit', icon: devicon('junit'), tone: 'red' },
  { name: 'JMeter', icon: '/assets/skill-testing.svg', tone: 'orange' },
  { name: 'Selenium', icon: devicon('selenium'), tone: 'green' },
  { name: 'VS Code', icon: devicon('vscode'), tone: 'blue' },
]

export const stats = [
  { value: '30 months', label: 'Total Experience' }, // Put a logic of date time where after begin of new calenddar month, this value should automatically update to reflect the new total experience in months.
  { value: '4', label: 'Featured Projects' },
  { value: '19', label: 'Core Skills' },
  { value: 'AI Full Stack', label: 'Engineering Focus' },
  { value: '24/7', label: 'Curiosity Mode' },
]

export const timeline = [
  { level: '03', role: 'SDE',  company: '@Genpact India', period: 'Jan 2025 - Present', bullets: ['FastAPI + React sourcing workflows', 'Semantic matching and RAG', 'Explainable LLM-assisted scoring', 'Conversational AI interface'], tags: ['FastAPI', 'React', 'PostgreSQL','TypeScript', 'LLM', 'RAG','AI chatbots', 'Claude'] },
  { level: '02', role: 'AI & Backend Development',  company: '@Walkover', period: 'Feb 2024 - Dec 2024', bullets: ['Multi-tenant architecture', 'AI middleware orchestration', 'High‑traffic concurrency validation', 'Optimized backend query handling'], tags: ['FastAPI', 'Node.js', 'Python', 'LLM','MongoDB','HuggingFace', 'JMeter'] },
  { level: '01', role: 'Full Stack AI Engineer',  company: '@Freelancer', period: 'Jul 2025 - Present', bullets: ['Backend APIs and full-stack products', 'AI-assisted workflows and automation', 'Clean, scalable engineering practices'], tags: ['Python','Java', 'AWS', 'React.js','Automation', 'AI', 'LangGraph', 'Git', 'Communication Skills'] },
]

export const achievements = [
  ['Epic', 'Code Warrior', 'Mastered multiple programming languages', '+500 XP'],
  ['Epic', 'Project Master', 'Completed 5+ full-stack projects', '+750 XP'],
  ['Legendary', 'AI Integrator', 'RAG, LangGraph and multi-provider AI workflows', '+1000 XP'],
  ['Rare', 'Problem Solver', 'Solved 500+ coding challenges', '+200 XP'],
  ['Common', 'Team Player', 'Collaborated on multiple team projects', '+300 XP'],
  ['Epic', 'UI Artist', 'Designed beautiful and responsive interfaces', '+600 XP'],
  ['Rare', 'Bug Hunter', 'Debugged complex issues across projects', '+400 XP'],
  ['Epic', 'Database Master', 'Designed and optimized complex databases', '+550 XP'],
]
