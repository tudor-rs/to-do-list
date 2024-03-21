class Ui {
  constructor() {}

  createTodo() {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    const title = document.createElement("div");
    todo.appendChild(title);
    title.classList.add("todo-title");
    const checkbox = document.createElement("input");
    todo.appendChild(checkbox);
    checkbox.type = "checkbox";
    return todo;
  }

  createButton(innerText) {
    const button = document.createElement("div");
    button.innerText = innerText;
    return button;
  }

  createForm() {
    const form = document.createElement("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
    });
    return form;
  }

  createTextInput() {
    const input = document.createElement("input");
    input.type = "text";
    return input;
  }

  createTextArea() {
    const textArea = document.createElement("textarea");
    return textArea;
  }

  createSelect(arr) {
    if (arr.length === 0) {
      console.error("No options received for priority select input");
      return;
    }

    const select = document.createElement("select");
    const options = arr;

    for (let i = 0; i < options.length; i++) {
      const option = document.createElement("option");
      option.value = options[i];
      option.text = options[i];
      select.add(option);
    }
    return select;
  }
}

export { Ui };
