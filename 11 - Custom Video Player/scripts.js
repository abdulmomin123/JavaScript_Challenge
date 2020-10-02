const video = document.querySelector("video");
const playPause = document.querySelector(".toggle");
const volume = document.querySelector("input[name=volume]");
const rate = document.querySelector("input[name=playbackRate]");
const forward = document.querySelector("button:nth-of-type(3)");
const backward = document.querySelector("button:nth-of-type(2)");

video.onclick = () => {
  console.dir(video);
};

playPause.onclick = () => {
  video.paused = false;
  video.seeking = true;
  console.dir(video.paused, video.seeking);
};
