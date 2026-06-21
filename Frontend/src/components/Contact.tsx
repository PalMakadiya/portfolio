import React, { useState } from 'react';
import styles from './Contact.module.css';
import { Mail, Send, CheckCircle2, AlertCircle, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  apiBaseUrl: string;
}

const Contact: React.FC<ContactProps> = ({ apiBaseUrl }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(`${apiBaseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('Submit error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className={styles.grid}>
          {/* Info cards */}
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Let's talk about your project</h3>
            <p className={styles.infoDescription}>
              I'm interested in freelance opportunities, open-source projects, or full-time roles. If you have a question or just want to say hi, feel free to drop me a message!
            </p>

            <div className={styles.infoList}>
              <div className={`${styles.infoItem} glass-panel`}>
                <Mail className={styles.infoIcon} size={20} />
                <div>
                  <h4>Email Me</h4>
                  <a href="mailto:palmakadiya2005@gmail.com" className={styles.infoLink}>palmakadiya2005@gmail.com</a>
                </div>
              </div>

              <div className={`${styles.infoItem} glass-panel`}>
                <Phone className={styles.infoIcon} size={20} />
                <div>
                  <h4>Call Me</h4>
                  <span className={styles.infoLink}>+91 7016762144</span>
                </div>
              </div>

              <div className={`${styles.infoItem} glass-panel`}>
                <MapPin className={styles.infoIcon} size={20} />
                <div>
                  <h4>Location</h4>
                  <span className={styles.infoLink}>Gujarat, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form card */}
          <div className={`${styles.formContainer} glass-panel`}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name <span className={styles.required}>*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={styles.input}
                  disabled={status === 'submitting'}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email <span className={styles.required}>*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={styles.input}
                  disabled={status === 'submitting'}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={styles.input}
                  disabled={status === 'submitting'}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message <span className={styles.required}>*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows={5}
                  className={styles.textarea}
                  disabled={status === 'submitting'}
                  required
                ></textarea>
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className={`${styles.alert} ${styles.alertSuccess}`}>
                  <CheckCircle2 size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {status === 'error' && (
                <div className={`${styles.alert} ${styles.alertError}`}>
                  <AlertCircle size={20} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>Sending...</>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
