const video = document.querySelector(".player__video");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const playPause = document.querySelector(".toggle");
const volume = document.querySelector("input[name=volume]");
const speed = document.querySelector("input[name=playbackRate]");
const buttons = [
  document.querySelector("button:nth-of-type(3)"),
  document.querySelector("button:nth-of-type(2)"),
];

let isMouseDown;
let percentange = 0;
let clickedArea;

const togglePlay = () => {
  if (!video.paused) {
    playPause.innerHTML = "►";
    video.pause();
  } else {
    playPause.innerHTML = "❚❚";
    video.play();
  }
};

const ctrlVolume = () => {
  if (!isMouseDown) return;

  const inputVolume = volume.value;
  video.volume = inputVolume;
};

const ctrlSpeed = () => {
  if (!isMouseDown) return;

  const inputSpeed = speed.value;
  video.playbackRate = inputSpeed;
};

const ctrlProgress = () => {
  if (video.paused) return;

  progressFilled.style.flex = `0 0 ${
    (video.currentTime / video.duration) * 100
  }%`;
};

const ctrlSkip = (e) => {
  video.currentTime += parseFloat(e.target.dataset.skip);
};

// Duration bar
progress.addEventListener("mousedown", (e) => {
  isMouseDown = true;

  clickedArea = e.offsetX;
  video.currentTime = (video.duration * clickedArea) / progress.clientWidth;
});
progress.addEventListener("mouseup", () => {
  isMouseDown = false;

  video.play();
});
progress.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;

  clickedArea = e.offsetX;
  video.currentTime = (video.duration * clickedArea) / progress.clientWidth;

  video.play().then(() => video.pause());
});

video.ontimeupdate = () => ctrlProgress();

// play pause
playPause.onclick = () => togglePlay();
video.onclick = () => togglePlay();
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

// skip
buttons.forEach((button) => button.addEventListener("click", ctrlSkip));

const init = () => {
  video.volume = volume.value;
  video.playbackRate = speed.value;
};
init();
