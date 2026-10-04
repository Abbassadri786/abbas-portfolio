export const profile = {
  name: 'Abbas Sadriwala',
  title: 'Software Developer | AI Engineer | Full-Stack Developer',
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
    description: 'Built a recruitment screening platform that helps recruiters process candidate resumes through structured ATS scoring, semantic matching, and AI-generated explanations instead of relying on an LLM as the sole scoring mechanism.',
    bullets: [
      'Designed a FastAPI backend with organization-level roles, HTTP-only authentication cookies, refresh-token sessions, CSRF protection and protected API routes.',
      'Built a screening pipeline that combines keyword matching, experience fit, resume completeness and local sentence-transformer embeddings to generate an explainable candidate score.',
      'Implemented secure resume processing with PDF/DOCX validation, file-size and MIME checks, SHA-256 hashing and PII redaction before optional external AI processing.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'pgvector', 'Sentence Transformers', 'React', 'Gemini', 'Docker'],
    link: 'https://github.com/Abbassadri786/hirelens-ai', image: '/assets/hirelens-ai.png', variant: 'dark',
  },
  {
    title: 'The Amber Hotel', eyebrow: 'Hotel Booking & Customer Support Platform',
    description: 'Built a full-stack hotel booking system with separate customer and admin workflows for room discovery, reservations, cancellations, customer management and AI-assisted support.',
    bullets: [
      'Implemented Spring Boot REST APIs with a MySQL-backed booking workflow covering room availability, date-based search, reservations, cancellations and post-stay feedback.',
      'Built separate customer and admin workflows, including room CRUD, booking filters, reservation updates and customer management.',
      'Integrated a LLaMA Groq 7B chatbot for room availability queries and customer support, with conversation history and new-thread management.',
      'Implemented authentication and admin access-code flows to separate customer operations from administrative booking management.',
    ],
    stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'LLaMA', 'Groq'],
    link: 'https://github.com/Abbassadri786/Hotel-Booking-System', image: '/assets/hbs.png', variant: 'light',
  },
    {
    title: 'Matrix Dashboard',
    eyebrow: 'Business Analytics Platform',
    description:
      'Built a full-stack data analytics dashboard using Django REST Framework and React to transform table-based business data into interactive visualizations and actionable performance insights.',
    bullets: [
      'Built a Django REST Framework ingestion pipeline using Pandas and OpenPyXL to process Excel files, including multi-sheet datasets, and persist normalized data into MySQL.',
      'Implemented REST APIs powering dashboard views for bookings, new logos, ACV, ARR, revenue and executive-level metrics.',
      'Added authenticated Excel upload workflows for financial and Agentic AP datasets, with server-side processing and structured database insertion.',
      'Implemented multi-sheet AP analytics covering Pre-Agentic, Go-Live and Post-Agentic stages with monthly performance tracking.',
    ],
    stack: [ 'Django', 'Django REST Framework', 'React', 'Python', 'MySQL', 'Pandas', 'OpenPyXL'],
    link: 'https://github.com/Abbassadri786/Matrix-Dashboard', image: '/assets/matrix-dashboard.png', variant: 'dark',
  },
]

const devicon = (slug) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`

export const skills = [
  { name: 'Python', icon: devicon('python'), tone: 'blue' },
  { name: 'Java', icon: devicon('java'), tone: 'red' },
  { name: 'C/C++', icon: devicon('cplusplus'), tone: 'blue' },
  { name: 'FastAPI', icon: devicon('fastapi'), tone: 'green' },
  { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', tone: 'green' },
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

// The calculation uses calendar months, so the value advances automatically on the 1st of each month.
export const experienceStartDate = '2024-03-01'

export const getTotalExperienceMonths = (now = new Date()) => {
  const start = new Date(`${experienceStartDate}T00:00:00`)
  let months = (now.getFullYear() - start.getFullYear()) * 12
    + (now.getMonth() - start.getMonth())

  if (now.getDate() < start.getDate()) months -= 1
  return Math.max(0, months)
}

export const stats = [
  { value: 'experience', label: 'Total Experience' },
  { value: '4', label: 'Featured Projects' },
  { value: '19', label: 'Technologies' },
  { value: 'AI + Backend', label: 'Engineering Focus' },
]

export const timeline = [
  { level: '03', role: 'SDE',  company: '@Genpact India', period: 'Jan 2025 - Present', bullets: ['FastAPI + React sourcing workflows', 'Semantic matching and RAG', 'Explainable LLM-assisted scoring', 'Conversational AI interface'], tags: ['FastAPI', 'React', 'PostgreSQL','TypeScript', 'LLM', 'RAG','AI chatbots', 'Claude'] },
  { level: '02', role: 'AI & Backend Development',  company: '@Walkover', period: 'Feb 2024 - Dec 2024', bullets: ['Multi-tenant architecture', 'AI middleware orchestration', 'High‑traffic concurrency validation', 'Optimized backend query handling'], tags: ['FastAPI', 'Node.js', 'Python', 'LLM','MongoDB','HuggingFace', 'JMeter'] },
  { level: '01', role: 'Full Stack AI Engineer',  company: '@Freelancer', period: 'Jul 2025 - Present', bullets: ['Backend APIs and full-stack products', 'AI-assisted workflows and automation', 'Clean, scalable engineering practices'], tags: ['Python','Java', 'AWS', 'React.js','Automation', 'AI', 'LangGraph', 'Git', 'Communication Skills'] },
]

export const achievements = [
  ['Epic', 'Code Warrior', 'Mastered multiple programming languages', '+500 XP'],
  ['Epic', 'Project Master', 'Completed 4+ full-stack projects', '+750 XP'],
  ['Legendary', 'AI Integrator', 'RAG, LangGraph and multi-provider AI workflows', '+1000 XP'],
  ['Rare', 'Problem Solver', 'Solved 500+ coding challenges', '+200 XP'],
  ['Common', 'Team Player', 'Collaborated on multiple team projects', '+300 XP'],
  ['Epic', 'UI Artist', 'Designed beautiful and responsive interfaces', '+600 XP'],
  ['Rare', 'Bug Hunter', 'Debugged complex issues across projects', '+400 XP'],
  ['Epic', 'Database Master', 'Designed and optimized complex databases', '+550 XP'],
]
