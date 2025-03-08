import React, { useRef, useEffect } from 'react';
import styles from './style.module.scss';

import CreativeHomeImg from '../../assets/project.png';
import OpinionMeterImg from '../../assets/project2.png';
import PrayerTimeImg from '../../assets/project3.png';

type Project = {
  title: string;
  tags: string[];
  description: string;
  image: string;
  link?: string;
};

const projectData: Project[] = [
  {
    title: 'creative@home',
    tags: ['Javascript', 'Sass'],
    description:
      'A website that provides roadmaps for various fields in programming and helps people learn to code for free.',
    image: CreativeHomeImg,
    link: 'https://example.com/creative-home', 
  },
  {
    title: 'Opinionmeter',
    tags: ['React', 'Python', 'Charts.js'],
    description:
      'A web app to analyze whether an opinion on a specific topic is positive or negative using NLP sentiment analysis.',
    image: OpinionMeterImg,
    link: 'https://example.com/opinionmeter', 
  },
  {
    title: 'Prayer Time API',
    tags: ['Python', 'FastAPI', 'Beautiful Soup'],
    description:
      'An easy-to-use API to fetch today’s (and tomorrow’s) prayer times in any city worldwide, based on Muslim Pro data.',
    image: PrayerTimeImg,
    link: 'https://example.com/prayer-time-api', 
  },
];

const Works: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          } else {
            entry.target.classList.remove(styles.show);
          }
        });
      },
      {
        threshold: 0.15, 
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className={styles.works} id="works">
      <h2>All Creative Works.</h2>
      <p className={styles.subtitle}>
        Here’s some of my projects that I have worked on.{' '}
        <a href="#projects">Explore more &rarr;</a>
      </p>

      <div className={styles.projectsContainer}>
        {projectData.map((project, index) => (
          <div
            key={project.title}
            className={styles.projectCard}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            {/* Clickable image/card if link is provided */}
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imageLink}
              >
                <img src={project.image} alt={project.title} />
              </a>
            ) : (
              <img src={project.image} alt={project.title} />
            )}

            <div className={styles.cardContent}>
              <h3>{project.title}</h3>
              <p className={styles.tags}>
                {project.tags.map((tag) => `#${tag} `)}
              </p>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
