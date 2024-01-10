chrome.contextMenus.create({
    "type": "normal",
    "title": 'skip ad',
    "id": 'skip ad',
})
console.log('background.js')

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if(info.menuItemId === "skip ad"){
        chrome.tabs.query({
            active: true,
            currentWindow: true
          }, tabs => {
            chrome.tabs.sendMessage(
              tabs[0].id,
              { from: 'background', subject: 'skip' },
              (response) => {
                if (response?.subject === 'success') {
                  // window.close();
                }
              });
          });
    }
  });
  
