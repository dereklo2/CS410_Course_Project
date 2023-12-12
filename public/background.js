let sentiment = "Sorry, I can't perform sentiment analysis on this page.";
let text = '';

// Should only be used when running locally!
let API_KEY = '';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.getText) {
    text = request.text;
    images = request.images;

    // Uncomment this block once you get the chatgpt api key
    /*
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
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify(requestData)
      })
        .then(response => response.json())
        .then(data => {
          console.log("Response from OpenAI:", data);
          imageSentiments += data + ", "
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
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify(requestData)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Response from OpenAI:", data);
        sentiment = data
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
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify(requestData)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Response from OpenAI:", data);
        sentiment += "\n\n The sentiment analysis of the images is: " + data
      })
      .catch(error => {
        console.error("Error:", error);
      });
      */

    // Remove this line once you get the chatgpt api key
    sentiment = "The sentiment in the Reddit post is generally positive as the user shares their journey with their Steam Deck, including personalizing it with a red shell. However, some comments express negativity and criticism, particularly regarding the user's long fingernails. Despite the mixed reactions, the overall sentiment leans towards a positive and enthusiastic tone."
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.getSentiment) {
    sendResponse({ text: sentiment });
  }
});
