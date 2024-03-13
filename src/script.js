import "./style.css";
import { Data, Todo } from "./logic";

const data = [
  {
    title: "title-1-1",
    description: "description-1-1",
    dueDate: "date-1-1",
    priority: "priority-1-1",
    category: "none",
  },

  {
    title: "title-1-2",
    description: "description-1-2",
    dueDate: "date-1-2",
    priority: "priority-1-2",
    category: "none",
  },

  {
    title: "title-2-1",
    description: "description-2-1",
    dueDate: "date-2-1",
    priority: "priority-2-1",
    category: "test",
  },

  {
    title: "title-2-2",
    description: "description-2-2",
    dueDate: "date-2-2",
    priority: "priority-2-2",
    category: "test",
  },
];

class App {
  constructor() {
    this.data = new Data();
    this.content = document.querySelector("content");
    this.nav = document.querySelector("nav");
    this.initialize();
    this.showMainScreen();
  }

  initialize() {
    const newTodoButton = document.createElement("button");
    newTodoButton.type = "button";
    newTodoButton.innerText = "New";
    this.nav.appendChild(newTodoButton);

    newTodoButton.addEventListener("click", () => {
      this.createTodo();
    });
  }

  showMainScreen() {
    // nav

    removeAllChildElements(this.content);
    this.showCategory("One");
  }

  showCategory(categoryName) {
    const container = document.createElement("div");
    container.classList.add("container");
    this.content.appendChild(container);

    for (const item of this.data.data) {
      if (item.category === categoryName) {
        const todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerText = item.title;
        container.appendChild(todo);

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        todo.appendChild(checkbox);

        //
        checkbox.addEventListener("change", () =>
          console.log(`${item.title} changed.`)
        );
      }
    }
  }

  createTodo() {
    removeAllChildElements(this.content);

    const form = document.createElement("form");
    form.setAttribute("method", "post"); // necessary?
    this.content.appendChild(form);

    const title = document.createElement("input");
    title.setAttribute("name", "title");
    title.type = "text";
    title.placeholder = "Title";
    form.appendChild(title);

    const description = document.createElement("textarea");
    description.setAttribute("name", "description");
    description.placeholder = "Description";
    form.appendChild(description);

    const priority = document.createElement("select");
    priority.setAttribute("name", "priority");
    const options = ["Low", "Medium", "High"];
    for (let i = 0; i < options.length; i++) {
      const option = document.createElement("option");
      option.value = options[i];
      option.text = options[i];
      priority.add(option);
    }
    form.appendChild(priority);

    const category = document.createElement("input");
    category.type = "text";
    category.setAttribute("name", "category");
    category.value = "None";
    form.appendChild(category);

    // add #tags with already created categories

    // due date?

    const submit = document.createElement("button");
    submit.type = "button";
    submit.innerText = "Create";
    form.appendChild(submit);

    submit.addEventListener("click", () => {
      const todo = new Todo();
      todo.title = title.value;
      todo.description = description.value;
      todo.priority = priority.value;
      todo.category = category.value;
      this.data.addItem(todo);
      this.data.storage.saveChanges(this.data.data); // change this asap
      this.showMainScreen();
    });
  }

  editTodo(todo) {
    removeAllChildElements(this.content);
  }
}

function removeAllChildElements(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
}

// localStorage.setItem("data", JSON.stringify(data));

const app = new App();
