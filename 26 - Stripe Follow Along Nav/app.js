const links = document.querySelectorAll('[href="#"]');

function changeBG(e) {
  console.log(e);
}

links.forEach((link) => link.addEventListener("mouseover", changeBG));
