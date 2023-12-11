import styles from '../../styles/Pages.module.css';

export default function New({ navigateToPage}) {
    return (
        <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>The sentiment of this post is...</h1>
          <p className={styles.description}>
          NEGATIVE/POSITIVE/NEUTRAL
          </p>
          <h1 className={styles.code}>New Page ./components/New/index.js</h1>
          <p>{"[ - This is New page content - ]"}</p>
          <p onClick={() => navigateToPage('index')}>{"< Go Back"}</p>
        </main>
      </div>
    );
  }