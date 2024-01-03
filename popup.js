  
  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("muteAndSkipButton").addEventListener('click',() => {
        chrome.tabs.query({
      active: true,
      currentWindow: true
    }, tabs => {
      // ...and send a request for the DOM info...
      chrome.tabs.sendMessage(
          tabs[0].id,
          {from: 'popup', subject: 'skip'},
          () => console.log('done'));
    });
    })
  });
//   window.addEventListener('DOMContentLoaded', () => {
//     // ...query for the active tab...
//     chrome.tabs.query({
//       active: true,
//       currentWindow: true
//     }, tabs => {
//       // ...and send a request for the DOM info...
//       chrome.tabs.sendMessage(
//           tabs[0].id,
//           {from: 'popup', subject: 'DOMInfo'},
//           // ...also specifying a callback to be called 
//           //    from the receiving end (content script).
//           setDOMInfo);
//     });
//   });
  