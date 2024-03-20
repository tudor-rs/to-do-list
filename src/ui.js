class Ui {
  constructor() {}

  createContainer() {
    const container = document.createElement("div");
    container.classList.add("container");
    return container;
  }

  createSidebarButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("sidebar-button");
    return button;
  }

  createTodo() {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    const title = document.createElement("div");
    title.classList.add("todo-title");
    todo.appendChild(title);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    todo.appendChild(checkbox);
    return todo;
  }

  createNewTodoButton() {
    const button = document.createElement("div");
    button.classList.add("new-todo-button");
    button.innerText = "+";
    return button;
  }

  // not refactored:

  createNewTodoForm() {
    // container
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    // form
    const form = document.createElement("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
    });
    formContainer.appendChild(form);

    // title
    const title = document.createElement("input");
    title.type = "text";
    title.dataset.name = "title";
    title.placeholder = "Title";
    form.appendChild(title);

    // description
    const description = document.createElement("textarea");
    description.dataset.name = "description";
    description.placeholder = "Description";
    form.appendChild(description);

    // priority
    const priority = document.createElement("select");
    priority.dataset.name = "priority";
    const options = ["Low", "Medium", "High"];
    for (let i = 0; i < options.length; i++) {
      const option = document.createElement("option");
      option.value = options[i];
      option.text = options[i];
      priority.add(option);
    }
    form.appendChild(priority);

    // label
    const formLabelsContainer = document.createElement("div");
    formLabelsContainer.classList.add("form-labels-container");
    form.appendChild(formLabelsContainer);

    // new label button
    // close form button

    // due date?

    const submit = document.createElement("button");
    submit.type = "button";
    submit.id = "form-submit-button";
    submit.innerText = "Ok";
    form.appendChild(submit);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.id = "form-delete-button";
    deleteButton.innerText = "Delete";
    form.appendChild(deleteButton);

    return formContainer;
  }

  removeAllChildElements(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}

export { Ui };
