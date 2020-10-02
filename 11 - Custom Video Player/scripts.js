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

const ctrlProgress = (e) => {
  if (!isMouseDown) return;

  console.log(e);
};

const ctrlSkip = (e) => {
  video.currentTime += parseFloat(e.target.dataset.skip);
};

// Duration bar
progress.addEventListener("mousedown", () => {
  isMouseDown = true;
  ctrlProgress();
});
progress.addEventListener("mouseup", () => (isMouseDown = false));
progress.addEventListener("mousemove", ctrlProgress);

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
