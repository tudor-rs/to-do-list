class App {
  constructor() {
    this.storage = new Storage();
    this.storage.deleteItem(0);
    this.storage.saveChanges();
  }

  createTodo() {
    const test = new Todo(
      "Clean room",
      "Need to buy cleaner",
      "Medium",
      "Home",
      "15-03-2024"
    );

    this.storage.addItem(test);
    this.storage.saveChanges();
  }
}

class Todo {
  // all these really necessary?
  constructor(title, description, priority, category, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.category = category;
    this.dueDate = dueDate;
    this.complete = false;
  }
}

class Storage {
  constructor() {
    JSON.parse(localStorage.getItem("data")) === null
      ? (this.data = [])
      : (this.data = this.getData());
  }

  getData() {
    // what if no data is present?
    return JSON.parse(localStorage.getItem("data"));
  }

  addItem(todo) {
    this.data.push(todo);
  }

  deleteItem(index) {
    this.data.splice(index, 1);
  }

  saveChanges() {
    localStorage.setItem("data", JSON.stringify(this.data));
  }
}

export { App };

// add edit function
