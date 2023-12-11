import styles from '../../styles/Pages.module.css';
import React, { useState, useEffect } from 'react';

export default function Index({ navigateToPage }) {
  const [analysis, setAnalysis] = useState('');
  useEffect(() => {
    // Ask background.js for the selected text
    chrome.runtime.sendMessage({ getSentiment: true }, response => {
      if (response && response.text) {
        setAnalysis(response.text);
      }
    });
  }, []);
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Reddit Sentiment Analyzer</h1>
        <h3>The sentiment of this post is...</h3>
        <p className={styles.description}>{analysis}</p>
      </main>
    </div>
  );
}
