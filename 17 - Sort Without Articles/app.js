const list = document.querySelector("#bands");

const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const sortBands = (arr) => {
  const sorted = arr.sort((a, b) => {
    let indexA;
    let indexB;

    if (a.includes("A ")) {
      indexA = 2;
    } else if (a.includes("An ")) {
      indexA = 3;
    } else if (a.includes("The ")) {
      indexA = 4;
    } else {
      indexA = 0;
    }

    if (b.includes("A ")) {
      indexB = 2;
    } else if (b.includes("An ")) {
      indexB = 3;
    } else if (b.includes("The ")) {
      indexB = 4;
    } else {
      indexB = 0;
    }

    if (a[indexA] > b[indexB]) {
      return -1;
    } else {
      return 1;
    }
  });

  return sorted;
};

const renderEl = (arr) => {
  arr.forEach((el) => {
    list.insertAdjacentHTML("afterbegin", `<li>${el}</li>`);
  });
};

const sortedBands = sortBands(bands);
renderEl(sortedBands);
