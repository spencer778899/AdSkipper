console.log('test background.js')
chrome.runtime.onMessage.addListener((msg, sender) => {
    console.log('test msg',msg)
    // if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
    //   // Enable the page-action for the requesting tab.
    //   chrome.pageAction.show(sender.tab.id);
    // }
  });