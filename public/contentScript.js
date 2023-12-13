function scrapeText() {
  var postContent = "[Post]: " + document.querySelector('[data-test-id="post-content"]').innerText + "\n\n";

  var commentElements = document.querySelectorAll('[data-testid="comment"]');
  var commentContent = ''
  commentElements.forEach(function (div) {
    commentContent += "[Comment]: " + div.innerText  + "\n\n";
  });

  var imageElements = document.querySelector('[data-test-id="post-content"]').querySelectorAll('img');
  var imageURLs = [];
  imageElements.forEach(function (img) {
    imageURLs.push(img.src);
  });

  var allText = postContent + commentContent

  chrome.runtime.sendMessage({ getText: true, text: allText, images: imageURLs});
}

// Run the scraping function when the page is fully loaded
window.onload = scrapeText;