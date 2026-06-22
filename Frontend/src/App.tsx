import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Project, Experience as ExperienceType } from './types';

const API_BASE_URL = 'http://localhost:5000/api';

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  
  const [loading, setLoading] = useState({
    projects: true,
    experiences: true,
  });

  useEffect(() => {
    // Fetch Projects
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/projects`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error('Failed to fetch projects');
      } finally {
        setLoading((prev) => ({ ...prev, projects: false }));
      }
    };

    // Fetch Experiences
    const fetchExperiences = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/experience`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setExperiences(data);
      } catch (err) {
        console.error('Failed to fetch experiences');
      } finally {
        setLoading((prev) => ({ ...prev, experiences: false }));
      }
    };

    fetchProjects();
    fetchExperiences();
  }, []);

  return (
    <>
      {/* Ambient background glows */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>

      {/* Main navigation */}
      <Navbar />

      {/* Main sections */}
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects projects={projects} loading={loading.projects} />
        <Experience experiences={experiences} loading={loading.experiences} />
        <Contact apiBaseUrl={API_BASE_URL} />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
