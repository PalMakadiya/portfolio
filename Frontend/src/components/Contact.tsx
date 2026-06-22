import React from 'react';
import styles from './Contact.module.css';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Contact</span>
          <h2 className="section-title">Get In <span className="pink-text">Touch</span></h2>
          <p className="section-description">
            I'm interested in freelance opportunities, open-source projects, or full-time roles. If you have a question or just want to say hi, feel free to drop me a message!
          </p>
        </div>

        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.infoList}>
              <a href="mailto:palmakadiya2005@gmail.com" className={`${styles.infoItem} glass-panel`}>
                <div className={styles.infoIcon}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email Me</h4>
                  <span className={styles.infoLink}>palmakadiya2005@gmail.com</span>
                </div>
              </a>

              <a href="tel:+917016762144" className={`${styles.infoItem} glass-panel`}>
                <div className={styles.infoIcon}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Call Me</h4>
                  <span className={styles.infoLink}>+91 7016762144</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/pal-makadiya-421331340" target="_blank" rel="noopener noreferrer" className={`${styles.infoItem} glass-panel`}>
                <div className={styles.infoIcon}>
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4>LinkedIn</h4>
                  <span className={styles.infoLink}>pal-makadiya-421331340</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
