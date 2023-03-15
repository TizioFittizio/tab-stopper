document.addEventListener('DOMContentLoaded', () => {
  const buttonStopTab = document.getElementById('button-stop-tab');

  buttonStopTab.addEventListener('click', async evt => {
    console.log(evt);
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log(tab);
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['stop-tab.js']
    })
  });
})
