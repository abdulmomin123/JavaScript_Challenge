const input = document.querySelector("input[name=item]");
const label = document.querySelector("label");
const submit = document.querySelector("input[type=submit]");
const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = [];
let index = 0;
let item = 0;
const reg = new RegExp("item", "gi");

const setLocalItem = (key, value) => {
  localStorage.setItem(key, value);
};

const getLocalItem = () => {
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
      <input type="checkbox" data-index="${index}" id="item${item}">
      <label for="item${item}">${userInput}</label>
   </li>
  `;
  itemsList.insertAdjacentHTML("beforeend", markup);
  e.target.reset();
  setLocalItem(`item${item}`, markup);
  index++;
  item++;
};

const toggleState = (e) => {
  if (!e.target.id) return;

  e.target.toggleAttribute("checked");
  setLocalItem(
    e.target.id,
    `<li>
    ${e.target.parentNode.innerHTML}
  </li>`
  );
};

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleState);

getLocalItem();
