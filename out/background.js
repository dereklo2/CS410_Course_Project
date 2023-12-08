
let selectedText = '';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.text) {
    selectedText = request.text;
    console.log(request.text);
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.getText) {
      sendResponse({ text: selectedText });
    }
  });