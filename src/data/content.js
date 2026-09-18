import rrgfiberCover from '../assets/rrgfiber-cover.png';
import nworksCover from '../assets/nworks-cover.png';
import rrgfiberLogo from '../assets/rrgfiber-logo.png';
import nworksLogo from '../assets/nworks-logo.png';

export const personalInfo = {
  name: 'Wilster Dela Cruz',
  role: 'BACKEND / FULL-STACK DEVELOPER',
  tagline: 'Building web applications that solve real problems with clean code and modern technologies.',
  location: 'Bulacan, Philippines',
  email: 'delacruz.wilster15@gmail.com',
  github: 'github.com/wilsterdc',
  githubUrl: 'https://github.com/wilsterdc',
  linkedin: '#',
  bio: [
    "I'm a Computer Science graduate with hands-on experience in backend and full-stack development. I enjoy building scalable systems, integrating third-party services, and creating solutions that make life easier for users and businesses.",
    "I'm passionate about learning new technologies, improving my skills, and contributing to meaningful projects.",
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const projects = [
  {
    id: 1,
    title: 'RRG Fiber',
    subtitle: 'Online Billing & Payment System',
    description:
      'A complete billing and payment platform with subscriber management, payment tracking, reminders, and an admin portal. Integrated with PayMongo for online payments and Redis for caching.',
    image: rrgfiberCover,
    logo: rrgfiberLogo,
    liveUrl: 'https://rrgfiber.com',
    tags: ['React', 'TypeScript', 'Vue', 'Node.js', 'Express.js', 'Supabase', 'Redis', 'PayMongo'],
    dateRange: 'Apr 2026 – Sep 2026',
    type: 'Freelance Project',
  },
  {
    id: 2,
    title: 'Nworks',
    subtitle: 'Shopify E-commerce Platform',
    description:
      'A guest shopping experience with cart persistence, customer info caching, and Shopify product integration. Automatically creates draft orders and sends email notifications via Shopify Flow for checkout and quotations.',
    image: nworksCover,
    logo: nworksLogo,
    liveUrl: 'https://nworks.store',
    tags: ['Shopify', 'Hydrogen', 'Oxygen', 'React', 'Vue', 'JavaScript'],
    dateRange: 'May 2026 – Jun 2026',
    type: 'Freelance Project',
  },
];

export const skills = [
  {
    category: 'Backend',
    icon: 'server',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Redis'],
  },
  {
    category: 'Frontend',
    icon: 'layout',
    items: ['React', 'TypeScript', 'Vue', 'JavaScript', 'HTML & CSS'],
  },
  {
    category: 'Databases',
    icon: 'database',
    items: ['PostgreSQL', 'MySQL', 'Supabase'],
  },
  {
    category: 'E-commerce & Payments',
    icon: 'cart',
    items: ['Shopify', 'Hydrogen', 'Oxygen', 'PayMongo'],
  },
  {
    category: 'Languages',
    icon: 'code',
    items: ['JavaScript', 'TypeScript', 'Python', 'C', 'C++'],
  },
];

export const experience = [
  {
    id: 1,
    role: 'Freelance Full-Stack Developer',
    company: 'RRG Fiber',
    companyUrl: 'https://rrgfiber.com',
    date: 'Apr 2026 – Sep 2026',
    type: 'Freelance',
    details: [],
  },
  {
    id: 2,
    role: 'Freelance Full-Stack Developer',
    company: 'Nworks',
    companyUrl: 'https://nworks.store',
    date: 'May 2026 – Jun 2026',
    type: 'Freelance',
    details: [],
  },
  {
    id: 3,
    role: 'Fullstack Developer Intern',
    company: 'Top Century Textile (Guiguinto, Bulacan)',
    companyUrl: null,
    date: '',
    type: 'Internship',
    details: [
      'Revamped POS system, built UI, handled data migration, integrated APIs, improved validation and error handling.',
    ],
  },
  {
    id: 4,
    role: 'Backend Developer',
    company: 'Codemania',
    companyUrl: null,
    date: '',
    type: 'Academic Project',
    details: [
      'Built and maintained backend logic and database operations using Express.js and PostgreSQL (Supabase).',
    ],
  },
];

export const education = {
  school: 'College of Mary Immaculate',
  degree: 'Bachelor of Science in Computer Science',
  date: 'March 31, 2026',
};
