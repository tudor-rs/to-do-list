import "./style.css";
import { Data, Todo } from "./data";
import { Ui } from "./ui";

const data = new Data();
const ui = new Ui();

const nav = document.querySelector("nav");
const content = document.querySelector("content");

function showSidebar() {
  const labels = data.getAllLabels();
  const container = ui.createContainer();
  for (const label of labels) {
    const div = ui.createSidebarButton();
    div.innerText = label;
    container.appendChild(div);

    div.addEventListener("click", () => {
      ui.removeAllChildElements(content);
      showList(label);
    });
  }
  nav.appendChild(container);
}
showSidebar();

function showList(label) {
  const todos = data.filterByLabel(label);
  const container = ui.createContainer();
  container.classList.add("to-do-list-container");
  for (const todo of todos) {
    const div = ui.createTodo();
    div.querySelector(".todo-title").innerText = todo.title;
    container.appendChild(div);
  }
  const newTodoButton = ui.createNewTodoButton();
  container.appendChild(newTodoButton);
  newTodoButton.addEventListener("click", () => {
    showCreateTodoForm();
  });
  content.appendChild(container);
}
// first init
showList("None");

function showCreateTodoForm() {
  const todoListContainer = document.querySelector(".to-do-list-container");
  const form = ui.createNewTodoForm();
  const formLabelsContainer = form.querySelector(".form-labels-container");
  const labels = data.getAllLabels();
  todoListContainer.appendChild(form);
  const errorContainer = ui.createContainer();
  todoListContainer.appendChild(errorContainer);

  labels.forEach((element) => {
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "form-label";
    radioButton.id = element;
    radioButton.value = element;
    if (radioButton.value === "None") {
      radioButton.setAttribute("checked", true);
    }
    formLabelsContainer.appendChild(radioButton);

    // just labels for radio buttons
    const labelElem = document.createElement("label");
    labelElem.htmlFor = element;
    labelElem.textContent = element;

    formLabelsContainer.appendChild(labelElem);
  });

  const submitButton = form.querySelector("#form-submit-button");
  submitButton.addEventListener("click", () => {
    const title = form.querySelector(`[data-name="title"]`).value;
    const description = form.querySelector(`[data-name="description"]`).value;
    const priority = form.querySelector(`[data-name="priority"]`).value;
    const label = form.querySelector(`input[name="form-label"]:checked`).value;

    if (title === "") {
      errorContainer.innerText = "Please add a title";
      return;
    }

    data.addItem(new Todo(title, description, priority, label));

    // refresh screen
    ui.removeAllChildElements(content);
    showList("None");
  });
}
