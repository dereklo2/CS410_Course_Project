document.addEventListener('mouseup', () => {
    let selectedText = window.getSelection().toString();
    if (selectedText.length > 0) {
      chrome.runtime.sendMessage({ text: selectedText });
    }
  });
  console.log(selectedText);