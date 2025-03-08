import React from 'react';
import styles from './style.module.scss';

type Article = {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  link: string;
};

const articles: Article[] = [
  {
    title: '2024 Retrospective',
    date: 'January 21 2025',
    readTime: '6 min read',
    excerpt:
      'A look back at the key events and lessons learned in 2024, plus a peek at what’s ahead.',
    link: '#',
  },
  {
    title: 'Unleash Your Dev Blog: Write More with GitHub Issues as Your CMS',
    date: 'April 2 2024',
    readTime: '3 min read',
    excerpt:
      'Explore how to use GitHub Issues to power your blog content, from drafting to publishing.',
    link: '#',
  },
  {
    title: 'Code Faster with Vim Shortcuts!',
    date: 'October 16 2023',
    readTime: '5 min read',
    excerpt:
      'Level up your coding workflow with these essential Vim shortcuts, whether you’re a beginner or pro.',
    link: '#',
  },
  {
    title: 'Easily Boost Your Productivity With Code Snippets',
    date: 'September 22 2023',
    readTime: '3 min read',
    excerpt:
      'Save time by creating and organizing your own library of reusable snippets across multiple languages.',
    link: '#',
  },
];

const LatestArticles: React.FC = () => {
  return (
    <section className={styles.latestArticles} id="articles">
      <div className={styles.header}>
        <h2>Latest Article.</h2>
        <a href="#all-articles" className={styles.viewAll}>
          View all articles &rarr;
        </a>
      </div>

      <div className={styles.articlesGrid}>
        {articles.map((article) => (
          <div className={styles.articleCard} key={article.title}>
            <h3>{article.title}</h3>
            <p className={styles.meta}>
              {article.date} &middot; {article.readTime}
            </p>
            <p className={styles.excerpt}>{article.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
