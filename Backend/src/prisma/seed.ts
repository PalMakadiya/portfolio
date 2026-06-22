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
      description: '- Developed a full-stack automotive management platform using Flutter, React.js, Node.js, Express.js, Prisma ORM, and PostgreSQL.\n- Implemented role-based access control, secure authentication, order tracking, and advanced car search features.\n- Designed scalable APIs and optimized database architecture for transactions and price estimation.',
      imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop',
      githubUrl: 'https://github.com/PalMakadiya/',
      liveUrl: 'https://github.com/PalMakadiya/',
      tags: ['React.js', 'Flutter', 'Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL'],
      featured: true,
      order: 1,
    },
    {
      title: 'Production Company Website',
      description: '- Developed a production-ready corporate website and platform for business operations.\n- Implemented secure administration dashboards, content management, and user authentication.\n- Optimized backend services for reliable page loads and database transactions.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
      githubUrl: 'https://github.com/PalMakadiya/',
      liveUrl: 'https://github.com/PalMakadiya/',
      tags: ['React.js', 'Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL', 'Material UI'],
      featured: true,
      order: 2,
    },
    {
      title: 'Foody Crave',
      description: '- Developed a full-stack food delivery application using MongoDB, Express.js, React.js, and Node.js.\n- Implemented secure user login, signup, shopping cart, and order processing functionalities.\n- Designed an administrative panel for order tracking, menu customization, and user management.',
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop',
      githubUrl: 'https://github.com/PalMakadiya/',
      liveUrl: 'https://github.com/PalMakadiya/',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      featured: true,
      order: 3,
    },
  ];

  for (const project of projects) {
    await prisma.project.create({ data: project });
  }

  console.log('Seeding experience...');
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Initio TechMedia Pvt. Ltd',
      location: 'Work from Office',
      duration: 'Dec 2025 – June 2026',
      description: [
        'Developed scalable full stack applications using React.js, Node.js, Express.js, Prisma ORM, and PostgreSQL.',
        'Built responsive frontend interfaces and scalable RESTful APIs with secure authentication systems.',
        'Optimized backend performance and database operations using PostgreSQL Stored Procedures.',
        'Collaborated with teams to deliver clean, production-ready web solutions with improved user experience.',
      ],
      category: 'Work',
      order: 1,
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
