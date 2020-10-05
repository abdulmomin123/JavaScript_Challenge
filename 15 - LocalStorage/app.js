const input = document.querySelector("input[name=item]");
const submit = document.querySelector("input[type=submit]");
const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = [];
let index = 0;
let item = 0;
const reg = new RegExp("item", "gi");
const init = () => {
  if (!localStorage) return;

  const length = localStorage.length;
  for (i = 0; i < length; i++) {
    const key = localStorage.key(i);
    if (key.match(reg)) {
      const markup = localStorage.getItem(`item${i}`);

      itemsList.insertAdjacentHTML("beforeend", markup);
    }
  }
};

const addItem = (e) => {
  e.preventDefault();
  const userInput = input.value;
  const markup = `
   <li>
      <input type="checkbox" data-index="${index}" id="item0">
      <label for="item${item}">${userInput}</label>
   </li>
  `;
  itemsList.insertAdjacentHTML("beforeend", markup);
  input.value = "";
  localStorage.setItem(`item${item}`, markup);
  index++;
  item++;
};

addItems.addEventListener("submit", addItem);

init();
