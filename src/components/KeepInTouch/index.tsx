import React from 'react';
import styles from './style.module.scss';
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const KeepInTouch: React.FC = () => {
  return (
    <section className={styles.keepInTouch} id="contact">
      <h2>Keep In Touch.</h2>
      <p className={styles.description}>
        I’m currently specializing in <span>Full-Stack Development.</span>
        <br />
        Feel free to get in touch and talk more about your projects.
      </p>
      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>
        <a href="mailto:someone@example.com">
          <FaEnvelope size={20} /> Email
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <FaFileAlt size={20} /> Resume
        </a>
      </div>
    </section>
  );
};

export default KeepInTouch;
