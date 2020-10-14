const elements = {
  time: document.querySelector(".display__time-left"),
  title: document.querySelector("title"),
  endTime: document.querySelector(".display__end-time"),
  inputs: document.querySelectorAll("button"),
  form: document.customForm,
};
let countdown;

elements.inputs.forEach((input) => {
  input.addEventListener("click", startTimer);
});

elements.form.addEventListener("submit", startTimer);

function displayTimeLeft(seconds) {
  const minute = Math.floor(seconds / 60);
  seconds = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;

  elements.time.textContent = `${minute}:${seconds}`;
  elements.title.textContent = `Countdown Timer: ${minute}:${seconds}`;
}

function displayEndTime(stamp) {
  const time = new Date(stamp);
  const timeFormat = time.toLocaleTimeString();
  let hour;
  const minute =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

  if (timeFormat.match(/am/gi) || timeFormat.match(/pm/gi)) {
    hour = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  }

  elements.endTime.textContent = `Come back at ${hour}:${minute}`;
}

function startTimer(e) {
  e.preventDefault();

  let time;
  if (this.dataset.time) {
    time = parseFloat(this.dataset.time);
  } else {
    time = parseFloat(this.minutes.value) * 60;
  }

  this.reset();
  count(time);
}

function count(sec) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + sec * 1000;

  displayTimeLeft(sec);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);

  displayEndTime(then);
}
