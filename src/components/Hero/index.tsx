import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './style.module.scss';

const Hero: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.intro}>Hey there, I&apos;m</p>
        <h1 className={styles.name}>Shubham Desai.</h1>
        <h2 className={styles.title}>Software Engineer.</h2>
        <p className={styles.description}>
          A self-taught developer with an interest in Computer Science
        </p>

        <ul className={styles.infoList}>
          <li>Currently specializing in Frontend (React / Next.js)</li>
          <li>FullStack Engineer at Torinit</li>
        </ul>

        <div className={styles.links}>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:someone@example.com">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
