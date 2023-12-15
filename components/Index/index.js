import styles from '../../styles/Pages.module.css';
import React, { useState, useEffect } from 'react';

// This is the main page of the extension. 
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

  // Render the sentiment analysis of the post
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>The sentiment of this post is...</h2>
        <p className={styles.description}>{analysis}</p>
      </main>
    </div>
  );
}
