const times = [...document.querySelectorAll("li")].map((el) => el.dataset.time);

const totalTime = times.reduce((acc, cur) => {
  //
}, 0);

console.log(times);
