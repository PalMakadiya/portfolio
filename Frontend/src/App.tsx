import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Project, Experience as ExperienceType, GroupedSkills } from './types';

const API_BASE_URL = 'http://localhost:5000/api';

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [skills, setSkills] = useState<GroupedSkills>({});
  
  const [loading, setLoading] = useState({
    projects: true,
    experiences: true,
    skills: true,
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

    // Fetch Skills
    const fetchSkills = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/skills`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setSkills(data);
      } catch (err) {
        console.error('Failed to fetch skills');
      } finally {
        setLoading((prev) => ({ ...prev, skills: false }));
      }
    };

    fetchProjects();
    fetchExperiences();
    fetchSkills();
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
        <About skills={skills} loading={loading.skills} />
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
