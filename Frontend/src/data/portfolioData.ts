import { Project, Experience } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Car Management System',
    description: '- Developed a full-stack automotive management platform using Flutter, React.js, Node.js, Express.js, Prisma ORM, and PostgreSQL.\n- Implemented role-based access control, secure authentication, order tracking, and advanced car search features.\n- Designed scalable APIs and optimized database architecture for transactions and price estimation.',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/PalMakadiya/',
    liveUrl: 'https://github.com/PalMakadiya/',
    tags: ['React.js', 'Flutter', 'Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL'],
    featured: true,
    order: 1,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Production Company Website',
    description: '- Developed a production-ready corporate website and platform for business operations.\n- Implemented secure administration dashboards, content management, and user authentication.\n- Optimized backend services for reliable page loads and database transactions.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/PalMakadiya/',
    liveUrl: 'https://github.com/PalMakadiya/',
    tags: ['React.js', 'Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL', 'Material UI'],
    featured: true,
    order: 2,
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    title: 'Foody Crave',
    description: '- Developed a full-stack food delivery application using MongoDB, Express.js, React.js, and Node.js.\n- Implemented secure user login, signup, shopping cart, and order processing functionalities.\n- Designed an administrative panel for order tracking, menu customization, and user management.',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/PalMakadiya/',
    liveUrl: 'https://github.com/PalMakadiya/',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    featured: true,
    order: 3,
    createdAt: new Date().toISOString()
  }
];

export const experiencesData: Experience[] = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Initio TechMedia Pvt. Ltd',
    location: 'Work from Office',
    duration: 'Dec 2025 – June 2026',
    description: [
      'Developed scalable full stack applications using React.js, Node.js, Express.js, Prisma ORM, and PostgreSQL.',
      'Built responsive frontend interfaces and scalable RESTful APIs with secure authentication systems.',
      'Optimized backend performance and database operations using PostgreSQL Stored Procedures.',
      'Collaborated with teams to deliver clean, production-ready web solutions with improved user experience.'
    ],
    category: 'Work',
    order: 1
  }
];
