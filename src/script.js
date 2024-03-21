import "./style.css";
import { Data, Todo } from "./data";
import { Ui } from "./ui";
import { FormComponents } from "./formcomponents";

const data = new Data();
const ui = new Ui();
const formComponents = new FormComponents();

const nav = document.querySelector("nav");
const content = document.querySelector("content");

function showSidebar() {
  // retrieve existing labels
  const labels = data.getAllLabels();

  // html
  const list = document.createElement("ul");
  nav.appendChild(list);

  for (const label of labels) {
    const item = document.createElement("li");
    list.appendChild(item);
    item.innerText = label;

    item.addEventListener("click", () => {
      refreshScreen(content);
      showList(label);
    });
  }
}
showSidebar();

// need to rename for better readability
function showList(label) {
  if (!label) {
    label = "None";
  }

  // can these be a ul?
  for (const todo of data.todolist) {
    if (todo.label !== label) {
      continue;
    }

    const div = ui.createTodo();
    content.appendChild(div);
    div.querySelector(".todo-title").innerText = todo.title;

    div.querySelector(".todo-title").addEventListener("click", () => {
      showEditTodo(todo.id);
    });

    // -- checkbox --
    const checkbox = div.querySelector("input[type=checkbox]");

    // load checked/unchecked
    if (todo.complete) {
      div.classList.add("complete");
      checkbox.checked = true;
    } else if (!todo.complete) {
      div.classList.remove("complete");
      checkbox.checked = false;
    }

    // assign checked/unchecked in storage
    checkbox.addEventListener("click", () => {
      const itemIndex = data.todolist.findIndex((i) => i.id === todo.id);
      if (checkbox.checked) {
        data.todolist[itemIndex].complete = true;
        data.storage.set(data.todolist);
        div.classList.add("complete");
      } else {
        data.todolist[itemIndex].complete = false;
        data.storage.set(data.todolist);
        div.classList.remove("complete");
      }
    });
  }

  const newTodoButton = ui.createButton("New to-do");
  content.appendChild(newTodoButton);

  newTodoButton.addEventListener("click", () => {
    showCreateTodoForm(label);
  });
}
showList();

function showEditTodo(id) {
  refreshScreen(content);
  const index = data.todolist.findIndex((i) => i.id === id);
  const currentLabel = data.todolist[index].label;

  // wrapper
  const wrapper = document.createElement("div");
  wrapper.classList.add("form-wrapper");
  content.appendChild(wrapper);

  // form
  const form = ui.createForm();
  wrapper.appendChild(form);

  // to-do title
  const title = formComponents.createTitleInput(
    "Title",
    data.todolist[index].title
  );
  form.appendChild(title);

  // description
  const description = formComponents.createDescriptionInput(
    "Description",
    data.todolist[index].description
  );
  form.appendChild(description);

  // priority select
  const priority = formComponents.createPrioritySelect(
    data.todolist[index].priority
  );
  form.appendChild(priority);

  // label
  const label = formComponents.createLabelSelect(
    data.getAllLabels(),
    "label",
    data.todolist[index].label
  );
  form.appendChild(label);

  // complete?
  const isComplete = data.todolist[index].complete;

  // save
  const saveButton = ui.createButton("Save");
  saveButton.addEventListener("click", () => {
    if (!title.value) {
      console.error("Please add a title");
      return;
    }

    data.editItem(
      index,
      new Todo(
        title.value,
        description.value,
        priority.value,
        form.querySelector(`input[name="label"]:checked`).value,
        "",
        isComplete
      )
    );
    refreshScreen(nav, content);
    showSidebar();
    showList(currentLabel);
  });
  form.appendChild(saveButton);

  // delete
  const deleteButton = ui.createButton("Delete");
  deleteButton.addEventListener("click", () => {
    data.deleteItem(index);
    refreshScreen(nav, content);
    showSidebar();
    showList(currentLabel);
  });
  form.appendChild(deleteButton);
}

function showCreateTodoForm(currentLabel) {
  refreshScreen(content);

  // wrapper
  const wrapper = document.createElement("div");
  wrapper.classList.add("form-wrapper");
  content.appendChild(wrapper);

  // form
  const form = ui.createForm();
  wrapper.appendChild(form);

  // to-do title
  const title = formComponents.createTitleInput("Title");
  form.appendChild(title);

  // description
  const description = formComponents.createDescriptionInput("Description");
  form.appendChild(description);

  // priority select
  const priority = formComponents.createPrioritySelect();
  form.appendChild(priority);

  // label
  const label = formComponents.createLabelSelect(
    data.getAllLabels(),
    "label",
    currentLabel
  );
  form.appendChild(label);

  // create button
  const createButton = ui.createButton("Create");
  createButton.addEventListener("click", () => {
    if (!title.value) {
      console.error("Please add a title");
      return;
    }

    data.addItem(
      new Todo(
        title.value,
        description.value,
        priority.value,
        form.querySelector(`input[name="label"]:checked`).value,
        "placeholder",
        false
      )
    );

    // refresh screen
    refreshScreen(nav, content);
    showSidebar();
    showList(currentLabel);
  });
  form.appendChild(createButton);

  // cancel button
  const cancelButton = ui.createButton("Cancel");
  cancelButton.addEventListener("click", () => {
    refreshScreen(content);
    showList(currentLabel);
  });
  form.appendChild(cancelButton);
}

function refreshScreen(...sectionsToClear) {
  sectionsToClear.forEach((element) => {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  });
}

// merge formcomponents.js with ui.js
// add possibility to insert new labels
// add due date
