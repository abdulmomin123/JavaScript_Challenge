const elements = {
  search: () => document.querySelector(".search"),
  suggestions: () => document.querySelector(".suggestions"),
};

const getData = async () => {
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
  const response = await fetch(endpoint);
  return response.json();
};

const getInput = (e) => e.target.value;

const clearElement = (el) => {
  el.innerHTML = "";
};

const renderElement = (arr, parent) => {
  arr.forEach((el) => {
    parent.insertAdjacentHTML("beforeend", el);
  });
};

const returnResults = (data, input) => {
  const result = data.filter((el) => {
    if (
      input !== " " &&
      (el.city.toLowerCase().includes(input.toLowerCase()) ||
        el.state.toLowerCase().includes(input.toLowerCase()))
    ) {
      return el;
    }
  });

  return result;
};

const renderResults = (arr, input) => {
  const markup = arr.map((el) => {
    const element = `
      <li>
         <span class="name">${el.city
           .toLowerCase()
           .replace(
             input.toLowerCase(),
             `<span class="hl">${input.toLowerCase()}</span>`
           )}, ${el.state
      .toLowerCase()
      .replace(
        input.toLowerCase(),
        `<span class="hl">${input.toLowerCase()}</span>`
      )}
     </span>
         <span class="population">${el.population}</span>
      </li>
    `;

    return element;
  });

  renderElement(markup, elements.suggestions());
};

const init = async () => {
  const data = await getData();

  //   listen for user input
  elements.search().oninput = (e) => {
    //   get input
    const userInput = getInput(e);

    //  clear ul
    clearElement(elements.suggestions());

    //  Do the filtering
    const matchingResults = returnResults(data, userInput);

    //  display results
    renderResults(matchingResults, userInput);
  };
};
init();
