const video = document.querySelector(".player__video");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const playPause = document.querySelector(".toggle");
const volume = document.querySelector("input[name=volume]");
const speed = document.querySelector("input[name=playbackRate]");
const forward = document.querySelector("button:nth-of-type(3)");
const backward = document.querySelector("button:nth-of-type(2)");

let isMouseDown;

const ctrlVolume = () => {
  if (!isMouseDown) return;

  const inputVolume = volume.value;
  video.volume = inputVolume;

  console.dir(video);
};

const ctrlSpeed = () => {
  if (!isMouseDown) return;

  const inputSpeed = speed.value;
  video.playbackRate = inputSpeed;
};

const ctrlProgress = (e) => {
  if (!isMouseDown) return;

  console.log(e);
};

// Duration bar
progress.addEventListener("mousedown", () => {
  isMouseDown = true;
  ctrlProgress();
});
progress.addEventListener("mouseup", () => (isMouseDown = false));
progress.addEventListener("mousemove", ctrlProgress);

// play pause
playPause.onclick = () => (video.paused ? video.play() : video.pause());

// volume
volume.addEventListener("mousedown", () => {
  isMouseDown = true;
  ctrlVolume();
});
volume.addEventListener("mouseup", () => (isMouseDown = false));
volume.addEventListener("mousemove", ctrlVolume);

// speed / playbackRate
speed.addEventListener("mousedown", () => {
  isMouseDown = true;
  ctrlSpeed();
});
speed.addEventListener("mouseup", () => (isMouseDown = false));
speed.addEventListener("mousemove", ctrlSpeed);
