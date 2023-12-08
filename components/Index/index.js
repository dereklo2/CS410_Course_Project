import styles from '../../styles/Pages.module.css';
import React, { useState, useEffect } from 'react';


export default function Index({ navigateToPage }) {
  const [selectedText, setSelectedText] = useState('');
  useEffect(() => {
    // Ask background.js for the selected text
    chrome.runtime.sendMessage({ getText: true }, response => {
      if (response && response.text) {
        setSelectedText(response.text);
      }
    });
  }, []);
  
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
        <textarea value={selectedText} readOnly />
        <p>{"[ - Add some page content here - ]"}</p>
        <p onClick={() => navigateToPage('new')}>{"ANALYZE"}</p>
      </main>
    </div>
  );
}
