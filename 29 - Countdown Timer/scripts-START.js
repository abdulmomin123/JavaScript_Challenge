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
}
count(120);

function displayTimeLeft(seconds) {
  const minute = Math.floor(seconds / 60);
  seconds = seconds % 60;
  const second = seconds;

  console.log(minute, seconds);
}
