import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Clearing database...');
  await prisma.project.deleteMany({});
  await prisma.experience.deleteMany({});
  await prisma.skill.deleteMany({});
  await prisma.admin.deleteMany({});

  console.log('Seeding admin user...');
  const passwordHash = await bcrypt.hash('admin123', 10);
  await prisma.admin.create({
    data: {
      username: 'admin',
      password: passwordHash,
    },
  });

  console.log('Seeding skills...');
  const skills = [
    // Frontend
    { name: 'React', category: 'Frontend', proficiency: 90, icon: 'ReactIcon', order: 1 },
    { name: 'TypeScript', category: 'Frontend', proficiency: 85, icon: 'TypeScriptIcon', order: 2 },
    { name: 'HTML5/CSS3', category: 'Frontend', proficiency: 95, icon: 'HtmlIcon', order: 3 },
    { name: 'Next.js', category: 'Frontend', proficiency: 80, icon: 'NextIcon', order: 4 },
    { name: 'Tailwind CSS', category: 'Frontend', proficiency: 90, icon: 'TailwindIcon', order: 5 },
    { name: 'Zustand / Redux', category: 'Frontend', proficiency: 82, icon: 'ReduxIcon', order: 6 },
    { name: 'TanStack Query', category: 'Frontend', proficiency: 85, icon: 'QueryIcon', order: 7 },
    // Backend
    { name: 'Node.js', category: 'Backend', proficiency: 88, icon: 'NodeIcon', order: 1 },
    { name: 'Express.js', category: 'Backend', proficiency: 90, icon: 'ExpressIcon', order: 2 },
    { name: 'NestJS', category: 'Backend', proficiency: 70, icon: 'NestIcon', order: 3 },
    { name: 'RESTful APIs', category: 'Backend', proficiency: 95, icon: 'RestIcon', order: 4 },
    { name: 'GraphQL', category: 'Backend', proficiency: 78, icon: 'GraphqlIcon', order: 5 },
    { name: 'WebSockets (Socket.io)', category: 'Backend', proficiency: 80, icon: 'SocketIcon', order: 6 },
    // Database
    { name: 'PostgreSQL', category: 'Database', proficiency: 85, icon: 'PostgresIcon', order: 1 },
    { name: 'MongoDB', category: 'Database', proficiency: 80, icon: 'MongoIcon', order: 2 },
    { name: 'Prisma ORM', category: 'Database', proficiency: 88, icon: 'PrismaIcon', order: 3 },
    // Tools
    { name: 'Git & GitHub', category: 'Tools', proficiency: 90, icon: 'GitIcon', order: 1 },
    { name: 'Docker', category: 'Tools', proficiency: 75, icon: 'DockerIcon', order: 2 },
    { name: 'AWS', category: 'Tools', proficiency: 70, icon: 'AwsIcon', order: 3 },
    { name: 'CI/CD (GitHub Actions)', category: 'Tools', proficiency: 80, icon: 'CicdIcon', order: 4 },
    { name: 'Vercel / Netlify / Render', category: 'Tools', proficiency: 88, icon: 'HostingIcon', order: 5 },
  ];

  for (const skill of skills) {
    await prisma.skill.create({ data: skill });
  }

  console.log('Seeding projects...');
  const projects = [
    {
      title: 'Car Management System',
      description: 'Developed a full stack automotive management platform for car listings, insurance services, order processing, inspections, and delivery tracking operations.\n- Built responsive interfaces using Flutter and React.js for customers, sellers, service providers, delivery personnel, and administrators with role-based access control.\n- Designed scalable backend APIs using Node.js and Express.js for authentication, secure transactions, real-time order tracking, and advanced car search functionality.\n- Managed secure PostgreSQL database architecture using Prisma ORM with shipping/custom price estimation and transaction management.',
      imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop',
      githubUrl: 'https://github.com/PalMakadiya/',
      liveUrl: 'https://github.com/PalMakadiya/',
      tags: ['React.js', 'Flutter', 'Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL'],
      featured: true,
      order: 1,
    },
    {
      title: 'Automotive Marketplace Platform',
      description: 'Developed and maintained a production-ready marketplace platform with product management, cart handling, blogs, purchases, and user management features.\n- Built responsive frontend interfaces using React.js and Material UI while developing scalable RESTful APIs using Node.js and Express.js.\n- Managed secure PostgreSQL database architecture using Prisma ORM with optimized performance and smooth user experience.\n- Focused on scalable backend architecture, workflow optimization, and efficient order and payment handling.',
      imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop',
      githubUrl: 'https://github.com/PalMakadiya/',
      liveUrl: 'https://github.com/PalMakadiya/',
      tags: ['React.js', 'Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL', 'Material UI'],
      featured: true,
      order: 2,
    },
  ];

  for (const project of projects) {
    await prisma.project.create({ data: project });
  }

  console.log('Seeding experience...');
  const experiences = [
    {
      role: 'Full Stack Engineer',
      company: 'InnovateTech Solutions',
      location: 'San Francisco, CA (Remote)',
      duration: '2024 - Present',
      description: [
        'Architected and deployed scalable RESTful APIs using Node.js, Express, and PostgreSQL, increasing server response times by 25%.',
        'Implemented modern React user interfaces with absolute control over global state management and modular CSS structures.',
        'Mentored junior engineers and led containerization of backend microservices with Docker.',
      ],
      category: 'Work',
      order: 1,
    },
    {
      role: 'Frontend Developer Intern',
      company: 'Alpha Startups Inc.',
      location: 'New York, NY',
      duration: '2023 - 2024',
      description: [
        'Developed interactive, pixel-perfect layouts using React and TypeScript matching Figma specifications.',
        'Optimized core web vitals and overall page speed, achieving a 15% increase in mobile page load metrics.',
        'Wrote integration tests for essential user authorization workflows.',
      ],
      category: 'Work',
      order: 2,
    },
    {
      role: 'B.S. in Computer Science',
      company: 'Tech State University',
      location: 'Boston, MA',
      duration: '2020 - 2024',
      description: [
        'Graduated Magna Cum Laude with a minor in Data Analytics.',
        'Coursework: Data Structures & Algorithms, Database Systems, Software Engineering, Web Development.',
        'Built a capstone project utilizing Express APIs and relational databases.',
      ],
      category: 'Education',
      order: 3,
    },
  ];

  for (const exp of experiences) {
    await prisma.experience.create({ data: exp });
  }

  console.log('Database seeding finished successfully!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
