
import axios from 'axios';

let sentiment = "Sorry, I can't perform sentiment analysis on this page.";
let text = '';

function loadEnvVariables() {
  // Read the .env file content
  const envContent = chrome.runtime.getURL('.env');

  // Split the content into lines
  const lines = envContent.split('\n');

  // Process each line and set environment variables
  for (const line of lines) {
    const [key, value] = line.split('=');
    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  }
}

// Load environment variables
loadEnvVariables();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.getText) {
    text = request.text;
    images = request.images;

    const apiUrl = "https://api.openai.com/v1/chat/completions";

    var imageSentiments = ""
    var requestData = {}
    images.forEach(function (img) {
      requestData = {
        model: "gpt-4-vision-preview",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "In a single word, what is the sentiment analysis of this image?"
              },
              {
                type: "image_url",
                image_url: {
                  url: "img",
                  detail: "low"
                }
              }
            ]
          }
        ],
        max_tokens: 300
      };
      axios.post(apiUrl, requestData, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.API_KEY}`
        }
      })
        .then(response => {
          console.log("Response from OpenAI:", response.data);
          imageSentiments += response.data + ", "
        })
        .catch(error => {
          console.error("Error:", error);
        });
    });

    // Perform sentiment analysis on post and comments
    requestData = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a reddit post admin bot. All responses should be three sentences or less."
        },
        {
          role: "user",
          content: "Perform sentiment analysis on this reddit post: " + text
        }
      ]
    };
    axios.post(apiUrl, requestData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.API_KEY}`
      }
    })
      .then(response => {
        console.log("Response from OpenAI:", response.data);
        sentiment = response.data
      })
      .catch(error => {
        console.error("Error:", error);
      });

    // Summarize image sentiments
    requestData = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: "In two or less words, what is the average sentiment of all these words: " + imageSentiments
        }
      ]
    };
    axios.post(apiUrl, requestData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.API_KEY}`
      }
    })
      .then(response => {
        console.log("Response from OpenAI:", response.data);
        sentiment += "\n\n The sentiment analysis of the images is: " + response.data
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.getSentiment) {
    sendResponse({ text: sentiment });
  }
});
