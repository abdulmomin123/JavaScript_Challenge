const elements = {
  time: document.querySelector(".display__time-left"),
  title: document.querySelector("title"),
  endTime: document.querySelector(".display__end-time"),
};
let countdown;

function count(sec) {
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
count(65);

function displayTimeLeft(seconds) {
  const minute = Math.floor(seconds / 60);
  seconds = seconds % 60 < 10 ? `0${seconds % 60}` : seconds;

  elements.time.textContent = `${minute}:${seconds}`;
  elements.title.textContent = `Countdown Timer: ${minute}:${seconds}`;
}

function displayEndTime(stamp) {
  const time = new Date(stamp);
  const hour = time.getHours();
  const minute = time.getMinutes();

  elements.endTime.textContent = `Come back at: ${hour}:${minute}`;
}
