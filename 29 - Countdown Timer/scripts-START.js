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
count(3);

function displayTimeLeft(seconds) {
  console.log(seconds);
}
