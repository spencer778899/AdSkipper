
  chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message's structure.
  if ((msg.from === 'popup') && (msg.subject === 'skip')) {
    const videoPlayer = document.getElementsByClassName("video-stream")[0];
    videoPlayer.muted = true; // videoPlayer.volume = 0;
    videoPlayer.currentTime = videoPlayer.duration - 0.1;
    videoPlayer.paused && videoPlayer.play()
    // CLICK ON THE SKIP AD BTN
    document.querySelector(".ytp-ad-skip-button")?.click();
    document.querySelector(".ytp-ad-skip-button-modern")?.click();
  }
});
  