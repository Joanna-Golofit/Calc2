const texts = [
  "C",
  "/",
  "*",
  "&larr;",
  "7",
  "8",
  "9",
  "-",
  "4",
  5,
  6,
  "+",
  1,
  2,
  3,
  ".",
  "(",
  0,
  ")",
  "=",
];

const divButtons = document.querySelector(".buttons");
const display = document.querySelector("#display");
console.log("divButtons", divButtons);

const markup = texts
  .map((text) => `<div class="button">${text}</div>`)
  .join("");

// Check the console
console.log(markup);

// Adding all the markup in one operation + adding id
divButtons.innerHTML = markup;
divButtons.lastElementChild.setAttribute("id", "equal");

divButtons.addEventListener("click", (e) => {
  // console.log("clicked");
  // console.log("e", e);
  // console.log("e.target", e.target);
  console.log("e.target.innerHTML", e.target.innerHTML);
  // console.log("e.target.className", e.target.className);
  // console.log("e.target.NodeName", e.target.nodeName);
  // console.log("e.type", e.type);
  // console.log("e.target.outerHTML", e.target.outerHTML);
  // console.log("e.path", e.path);
  // display.innerHTML += e.target.innerHTML;

  switch (e.target.innerHTML) {
    case "C":
      display.innerHTML = "";
      break;
    case "=":
      try {
        display.innerHTML = eval(display.innerHTML);
      } catch {
        display.innerHTML = "Error!";
      }
      break;
    case "←":
      if (display.innerHTML) {
        display.innerHTML = display.innerHTML.slice(0, -1);
      }
      break;
    default:
      display.innerHTML += e.target.innerHTML;
  }
});
