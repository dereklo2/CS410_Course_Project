let sentiment = "Please refresh the page and make sure you're reading a post!";
let text = '';

// Should only be used when running locally!
let API_KEY = '';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.getText) {
    text = request.text;
    // Perform normalization of post content via regex
    text = text.replace(/\[.*?\]/g, '');
    images = request.images;

    const apiUrl = "https://api.openai.com/v1/chat/completions";

    // Perform sentiment analysis on post and comments
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + API_KEY);

    var raw = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": "You are a reddit post admin bot. All responses should be three sentences or less."
        },
        {
          "role": "user",
          "content": "Perform sentiment analysis on this reddit post: " + text
        }
      ]
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(result => {
        sentiment = result.choices[0].message.content;
        return;
      })
      .catch(error => {
        sentiment = "Please provide a valid OpenAI API Key and try again!";
        return;
      });

    // TODO: Add image sentiment analysis via GPT Vision API

    sentiment = "Fetching the sentiment analysis. Please wait a few seconds and refresh the extension :)"
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.getSentiment) {
    sendResponse({ text: sentiment });
  }
});
