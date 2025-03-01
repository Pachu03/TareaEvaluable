import "./style.css";

const body = document.body;

let createElements = () => {
  let divContainer = document.createElement("div");
  divContainer.className = "container";

  let h1 = document.createElement("h1");
  h1.textContent = "Todo List";

  let divForm = document.createElement("div");
  divForm.className = "search";

  let form = document.createElement("form");

  let inputText = document.createElement("input");
  inputText.type = "text";
  inputText.placeholder = "Agregar tarea...";

  let inputBtn = document.createElement("input");
  inputBtn.type = "button";
  inputBtn.value = "+";
  inputBtn.className = "btn-add";

  form.append(inputText, inputBtn);
  divForm.append(form);

  let divUl = document.createElement("div");
  divUl.className = "li-container";

  let ul = document.createElement("ul");

  divUl.append(ul);

  let divP = document.createElement("div");
  divP.className = "empty";

  let p = document.createElement("p");
  p.textContent = "You have no pending tasks.";

  divP.append(p);

  let divSpan = document.createElement("div");
  divSpan.className = "task-count";

  let spanText = document.createElement("span");
  spanText.textContent = "Number of tasks: ";

  let spanNum = document.createElement("span");
  spanNum.textContent = "0";

  divSpan.append(spanText, spanNum);

  divContainer.append(h1, divForm, divUl, divP, divSpan);
  body.append(divContainer);

  
  inputBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (inputText.value.trim() !== "") {
      createTask(inputText.value);
      inputText.value = "";
    }
  });
};

let createTask = (taskText) => {
  let ul = document.querySelector(".li-container ul");

  let li = document.createElement("li");

  let p = document.createElement("p");

  let span = document.createElement("span");
  span.textContent = taskText;

  span.addEventListener("click", () => {
    span.style.textDecoration =
      span.style.textDecoration === "line-through" ? "none" : "line-through";
  });

  p.append(span);

  let inpBtn = document.createElement("input");
  inpBtn.type = "button";
  inpBtn.value = "X";
  inpBtn.className = "btn-delete";

  inpBtn.addEventListener("click", () => {
    li.remove();
    updateTask();
  });

  li.append(p, inpBtn);
  ul.append(li);

  updateTask();
};

let updateTask = () => {
  let count = document.querySelectorAll(".li-container ul li").length;
  document.querySelector(".task-count span:last-child").textContent = count;

  let emptyP = document.querySelector(".empty p");
  emptyP.textContent = count === 0 ? "You have no pending tasks." : "";
};

document.addEventListener("DOMContentLoaded", createElements);
