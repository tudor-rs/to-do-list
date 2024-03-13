class Todo {
  constructor(title) {
    this.title = title;
    this.description;
    this.priority;
    this.category;
    this.dueDate;
    this.complete = false;
  }
}

class Data {
  constructor() {
    this.storage = new Storage();
    this.data = this.storage.getData();
  }

  addItem(item) {
    this.data.push(item);
  }

  editItem(index) {

  }

  deleteItem(index) {
    this.data.splice(index, 1);
  }
}

class Storage {
  getData() {
    if (!JSON.parse(localStorage.getItem("data") === null)) {
      return JSON.parse(localStorage.getItem("data"));
    } else {
      return [];
    }
  }

  saveChanges(input) {
    localStorage.setItem("data", JSON.stringify(input));
  }
}

export { Todo, Data };
