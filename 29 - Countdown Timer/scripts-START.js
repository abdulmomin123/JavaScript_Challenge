let time;

function count(sec) {
  const now = Date.now();
  const then = now + sec * 1000;

  setInterval(() => {
    const secondsLeft = (then - Date.now()) / 1000;
    console.log(secondsLeft);
  }, 1000);

  // console.log({ now, then });
}
count(3600);
