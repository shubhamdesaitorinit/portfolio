import React from 'react';
import styles from './style.module.scss';

import ProfilePic from '../../assets/profile.jpeg';

const About: React.FC = () => {
  return (
    <section className={styles.about} id="about">
      <h2>About Me</h2>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>
            Hey! I’m Shubham Desai, I’ve been close to a computer since an early age,
            and been passionate about it ever since. I really liked to build small or
            side no-code tools back in 2010, and from then on I never knew how to code
            myself; fast forward today, I’m programming in various languages and
            technologies, and have had the privilege to work at a Recruitment Company
            and a SaaS Company.
          </p>
          <p>
            I’m super interested in building products with no-code and automating tasks
            with code, currently focused on Web &amp; Mobile Development, Open Source,
            and Competitive Programming. When I’m not coding, I play games with my
            friends, watch some show on Netflix, or if the weather is good, play
            basketball.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img src={ProfilePic} alt="user profile picture" />
        </div>
      </div>
    </section>
  );
};

export default About;
