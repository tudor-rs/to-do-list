import "./style.css";
import { Data, Todo } from "./data";
import { Ui } from "./ui";

const data = new Data();
const ui = new Ui();

const nav = document.querySelector("nav");
const content = document.querySelector("content");

function showSidebar() {
  const labels = data.labels;
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

  const newLabel = ui.createSidebarButton();
  newLabel.innerText = "+";
  container.appendChild(newLabel);

  newLabel.addEventListener("click", () => {
    const newLabelName = document.createElement("input");
    newLabelName.type = "text";

    newLabelName.addEventListener("blur", function (event) {
      if (newLabelName.value != "") {
        data.labels.push(newLabelName.value);
      } else {
      }
      ui.removeAllChildElements(nav);
      showSidebar();
    });
    container.appendChild(newLabelName);
  });
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

    div.querySelector(".todo-title").addEventListener("click", () => {
      showEditTodo(todo.id);
    });

    const checkbox = div.querySelector("input[type=checkbox]");
    // load stored states
    if (todo.complete) {
      div.classList.add("complete");
      checkbox.checked = true;
    } else if (!todo.complete) {
      div.classList.remove("complete");
      checkbox.checked = false;
    }

    // change state
    checkbox.addEventListener("click", () => {
      const itemIndex = data.data.findIndex((i) => i.id === todo.id);
      if (checkbox.checked) {
        data.data[itemIndex].complete = true;
        data.storage.set(data.data);
        div.classList.add("complete");
      } else {
        data.data[itemIndex].complete = false;
        data.storage.set(data.data);
        div.classList.remove("complete");
      }
    });
  }
  const newTodoButton = ui.createNewTodoButton();
  container.appendChild(newTodoButton);

  newTodoButton.addEventListener("click", () => {
    showCreateTodoForm(label);
    container.removeChild(newTodoButton);
  });
  content.appendChild(container);
}
// first init
showList("None");

function showCreateTodoForm(label) {
  const todoListContainer = document.querySelector(".to-do-list-container");
  const form = ui.createNewTodoForm();
  todoListContainer.appendChild(form);
  const errorContainer = ui.createContainer();
  form.appendChild(errorContainer);

  const submitButton = form.querySelector("#form-submit-button");
  submitButton.addEventListener("click", () => {
    const title = form.querySelector(`[data-name="title"]`).value;
    const description = form.querySelector(`[data-name="description"]`).value;
    const priority = form.querySelector(`[data-name="priority"]`).value;

    if (title === "") {
      errorContainer.innerText = "Please add a title";
      return;
    }

    data.addItem(
      new Todo(title, description, priority, label, "placeholder", false)
    );

    // refresh screen
    ui.removeAllChildElements(nav);
    showSidebar();
    ui.removeAllChildElements(content);
    showList(label);
  });

  const cancelButton = form.querySelector("#form-delete-button");
  cancelButton.innerText = "Cancel";
  cancelButton.addEventListener("click", () => {
    ui.removeAllChildElements(content);
    showList(label);
  });
}

function showEditTodo(id) {
  const todoListContainer = document.querySelector(".to-do-list-container");
  const form = ui.createNewTodoForm();
  const formLabelsContainer = form.querySelector(".form-labels-container");
  const labels = data.labels;

  ui.removeAllChildElements(todoListContainer);
  todoListContainer.appendChild(form);

  // const errorContainer = ui.createContainer();
  // errorContainer.classList.add("error-container")
  // form.appendChild(errorContainer);

  labels.forEach((element) => {
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "form-label";
    radioButton.id = element;
    radioButton.value = element;
    formLabelsContainer.appendChild(radioButton);

    const labelElem = document.createElement("label");
    labelElem.htmlFor = element;
    labelElem.textContent = element;

    formLabelsContainer.appendChild(labelElem);
  });

  // find item in data array by id
  const itemIndex = data.data.findIndex((i) => i.id === id);

  // load current values
  form.querySelector(`[data-name="title"]`).value = data.data[itemIndex].title;
  form.querySelector(`[data-name="description"]`).value =
    data.data[itemIndex].description;
  form.querySelector(`[data-name="priority"]`).value =
    data.data[itemIndex].priority;
  const currentLabel = data.data[itemIndex].label;
  if (currentLabel) {
    form.querySelector(`input[value="${currentLabel}"]`).checked = true;
  }

  // submit new values
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

    data.editItem(itemIndex, new Todo(title, description, priority, label));

    // refresh screen
    ui.removeAllChildElements(nav);
    showSidebar();
    ui.removeAllChildElements(content);
    showList(data.data[itemIndex].label);
  });

  const deleteButton = form.querySelector("#form-delete-button");
  deleteButton.addEventListener("click", () => {
    const lab = data.data[itemIndex].label;
    data.deleteItem(itemIndex);
    ui.removeAllChildElements(nav);
    showSidebar();
    ui.removeAllChildElements(content);
    showList(lab);
  });
}
