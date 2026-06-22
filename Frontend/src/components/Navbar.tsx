import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const logoText = "pal.makadiya";
  const [logoSubIndex, setLogoSubIndex] = useState(0);
  const [logoReverse, setLogoReverse] = useState(false);
  const [logoBlink, setLogoBlink] = useState(true);

  // Logo typewriter effect
  useEffect(() => {
    if (logoSubIndex === logoText.length + 1 && !logoReverse) {
      const timeout = setTimeout(() => setLogoReverse(true), 2500);
      return () => clearTimeout(timeout);
    }

    if (logoSubIndex === 0 && logoReverse) {
      setLogoReverse(false);
      return;
    }

    const timeout = setTimeout(() => {
      setLogoSubIndex((prev) => prev + (logoReverse ? -1 : 1));
    }, logoReverse ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [logoSubIndex, logoReverse]);

  // Logo cursor blinking
  useEffect(() => {
    const timeout = setTimeout(() => setLogoBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [logoBlink]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      // Background blur scroll effect
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section highlight logic
      const sections = ['home', 'about', 'techstack', 'projects', 'experience', 'academic', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'techstack', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'academic', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <a href="#home" className={styles.logo} onClick={(e) => handleNavClick(e, 'home')}>
          <Terminal className={styles.logoIcon} size={22} />
          <span className={styles.typingField}>
            {logoText.substring(0, logoSubIndex)}
            <span className={`${styles.cursor} ${logoBlink ? styles.visible : ''}`}>_</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className={styles.desktopNav}>
          {navLinks.map((link) => {
            const isContact = link.id === 'contact';
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={
                  isContact
                    ? `${styles.navLink} ${styles.contactBtn}`
                    : `${styles.navLink} ${activeSection === link.id ? styles.active : ''}`
                }
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Mobile Nav Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Dropdown Menu */}
        {isOpen && (
          <div className={styles.mobileNav}>
            {navLinks.map((link) => {
              const isContact = link.id === 'contact';
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={
                    isContact
                      ? `${styles.mobileNavLink} ${styles.mobileContactBtn}`
                      : `${styles.mobileNavLink} ${activeSection === link.id ? styles.active : ''}`
                  }
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
