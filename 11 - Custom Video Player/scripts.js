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

const ctrlProgress = (state) => {
  if (video.paused) return;

  if (state === "normal") {
    const videoLength = video.duration;
    const currentTime = video.currentTime;
    percentange += 100 / videoLength;

    progressFilled.style.flex = `0 0 ${percentange}%`;
  } else if (state === "notNormal") {
    console.log("hi");
  }
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

video.onplay = () =>
  setInterval(() => {
    ctrlProgress("normal");
    console.log(parseFloat(speed.value) * 1000);
  }, 1000);

video.onratechange = () => {
  console.log("hi");
};

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
