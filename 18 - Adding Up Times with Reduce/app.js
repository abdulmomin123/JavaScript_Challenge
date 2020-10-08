const times = [...document.querySelectorAll("li")].map((el) => el.dataset.time);

// Using map
const seconds = times
  .map((el) => {
    const [mins, secs] = el.split(":").map(parseFloat);

    return mins * 60 + secs;
  })
  .reduce((acc, cur) => acc + cur);

let secondsLeft = seconds;
const hour = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minute = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hour, minute, secondsLeft);
