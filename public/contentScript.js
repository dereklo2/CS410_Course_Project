function scrapeText() {
  // Grab Reddit post text
  var postContent = "[Post]: " + document.querySelector('[data-test-id="post-content"]').innerText + "\n\n";

  // Grab Reddit comment text
  var commentElements = document.querySelectorAll('[data-testid="comment"]');
  var commentContent = ''
  commentElements.forEach(function (div) {
    commentContent += "[Comment]: " + div.innerText  + "\n\n";
  });

  // Grab Reddit image URLs for sentiment analysis
  var imageElements = document.querySelector('[data-test-id="post-content"]').querySelectorAll('img');
  var imageURLs = [];
  imageElements.forEach(function (img) {
    imageURLs.push(img.src);
  });

  // Combine post and comment text for sentiment analysis
  var allText = postContent + commentContent

  chrome.runtime.sendMessage({ getText: true, text: allText, images: imageURLs});
}

// Run the scraping function when the page is fully loaded
window.onload = scrapeText;