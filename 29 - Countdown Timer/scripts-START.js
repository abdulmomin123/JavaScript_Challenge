let countdown;

function count(sec) {
  const now = Date.now();
  const then = now + sec * 1000;

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) clearInterval(countdown);

    console.log(secondsLeft);
  }, 1000);

  // console.log({ now, then });
}
count(3);
