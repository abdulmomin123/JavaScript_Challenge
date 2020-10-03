let keys = "";
const pattern = new RegExp("ily", "gi");

window.addEventListener("keyup", (e) => {
  keys += e.key;
  if (!keys.match(pattern)) return;
  cornify_add();
  keys = "";
});
