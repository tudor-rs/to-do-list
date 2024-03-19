import { Storage } from "./storage";

class Data {
  constructor() {
    this.storage = new Storage();
    this.data = this.storage.get();
  }

  getAllLabels() {
    const labelsSet = new Set();
    this.data.forEach((todo) => {
      labelsSet.add(todo.label);
    });
    const labels = Array.from(labelsSet);
    return labels;
  }

  filterByLabel(label) {
    const result = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].label === label) {
        result.push(this.data[i]);
      }
    }
    return result;
  }

  addItem(item) {
    this.data.push(item);
    this.storage.set(this.data);
  }

  editItem(index) {}

  deleteItem(index) {
    this.data.splice(index, 1);
  }
}

class Todo {
  constructor(title, description, priority, label, date) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.label = label;
    this.date = date;
    this.complete = false;
  }
}

export { Data, Todo };
