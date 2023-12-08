
let selectedText = '';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.text) {
    selectedText = request.text;
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.getText) {
      sendResponse({ text: selectedText });
    }
  });