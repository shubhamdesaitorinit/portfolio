import React from 'react';
import styles from './style.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Designed and developed by <strong>Shubham Desai</strong>.
      </p>
      <p>
        Built with <strong>React.js &amp; SCSS</strong>. Hosted on{" "}
        <strong>Github Pages</strong>.
      </p>
    </footer>
  );
};

export default Footer;
