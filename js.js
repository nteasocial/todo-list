let inputEl = document.querySelector("input");
let formEl = document.querySelector("form");
let listEl = document.querySelector("ul");
let totalEl = document.querySelector("#total-tasks");

let taskList = ["Buy Groceries", "Car Services"];

function deleteItem(e) {
  task = e.target.parentElement.previousElementSibling.innerHTML;
  let index = taskList.indexOf(task);
  if (index !== -1) {
    taskList.splice(index, 1);
  }

  populateList();
}
function populateList() {
  listEl.innerHTML = "";
  taskList.forEach(function (item) {
    let newItem = document.createElement("li");

    //  new span for text
    let span = document.createElement("span");
    span.innerHTML = item;
    newItem.appendChild(span);

    //  delete button
    let delEl = document.createElement("a");
    delEl.classList.add("delete");
    delEl.innerHTML = '<i class="fas fa-trash-alt"></i>';
    newItem.appendChild(delEl);

    delEl.addEventListener("click", (e) => deleteItem(e));

    // add li to ul
    listEl.appendChild(newItem);
  });

  totalEl.innerHTML = taskList.length;
}
populateList();

function nowhitespace(s) {
  let stringwospace = s.trim();
  return stringwospace.length > 0;
}

function addTask() {
  if (
    inputEl.value &&
    nowhitespace(inputEl.value) &&
    taskList.includes(inputEl.value)
  ) {
    taskList.push(inputEl.value);
    populateList();
  }
  inputEl.value = "";
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask();
});
