import styles from '../../styles/Pages.module.css';

export default function Index({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Reddit Sentiment Analyzer</h1>
        <p className={styles.description}>
          Using information retrieval techniques learned in this course, we will create a Chrome Extension 
          written in JS that scrapes and retrieves information from Reddit posts and performs a sentiment 
          analysis on whether the post is positive, neutral, or negative. Currently, Reddit only labels 
          posts as neutral (default state) or NSFW (not safe for work). The addition of sentiment labels 
          will help users with mental health conditions avoid content that could potentially be disturbing 
          or cause emotional harm.  
        </p>
        <h1 className={styles.code}>Index Page ./components/Index/index.js</h1>
        <p>{"[ - Add some page content here - ]"}</p>
        <p onClick={() => navigateToPage('new')}>{"ANALYZE"}</p>
      </main>
    </div>
  );
}
