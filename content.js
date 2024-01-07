console.log('content.js')
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if ((msg.from === 'popup' || 'background') && (msg.subject === 'skip')) {
    const videoPlayer = document.getElementsByClassName("video-stream")[0];
    videoPlayer.muted = true;
    videoPlayer.currentTime = videoPlayer.duration - 0.1;
    videoPlayer.paused && videoPlayer.play()
    document.querySelector(".ytp-ad-skip-button")?.click();
    document.querySelector(".ytp-ad-skip-button-modern")?.click();

    response({from: 'content.js',subject: 'sucess'})
  }
});
  