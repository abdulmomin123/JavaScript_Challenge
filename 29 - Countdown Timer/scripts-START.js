let time;

function count(sec) {
  const now = Date.now();
  const then = now + sec * 1000;

  setInterval(() => {
    //
  }, 1000);
  console.log({ now, then });
}
count(3600);
