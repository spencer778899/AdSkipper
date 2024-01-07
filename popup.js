window.addEventListener('DOMContentLoaded', () => {
  document.getElementById("muteAndSkipButton").addEventListener('click',() => {
    chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'skip'},
        (response) => {
          if(response?.subject === 'sucess'){
            // window.close();
          }
        });
  });
  })
});