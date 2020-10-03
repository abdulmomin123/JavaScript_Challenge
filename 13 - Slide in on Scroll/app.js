function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll(".slide-in");

const checkSlide = () => {
  images.forEach((image) => {
    const slideAt = window.innerHeight + window.scrollY - image.height / 2;
    if (window.scrollY >= slideAt) image.classList.add("active");
    console.log(slideAt);
  });
};

window.addEventListener("scroll", debounce(checkSlide));
