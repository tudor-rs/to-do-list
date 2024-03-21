import { Storage } from "./storage";

class Data {
  constructor() {
    this.storage = new Storage();
    this.todolist = this.storage.get();
    for (let i = 0; i < this.todolist.length; i++) {
      this.todolist[i].id = i;
    }
  }

  getAllLabels() {
    const labelsSet = new Set();
    this.todolist.forEach((todo) => {
      labelsSet.add(todo.label);
    });
    const labels = Array.from(labelsSet);
    labels.sort();
    return labels;
  }

  // unused
  filterByLabel(label) {
    const result = [];
    for (let i = 0; i < this.todolist.length; i++) {
      if (this.todolist[i].label === label) {
        result.push(this.todolist[i]);
      }
    }
    return result;
  }

  addItem(item) {
    if (item.label === "") {
      item.label = "None";
    }
    this.todolist.push(item);
    this.storage.set(this.todolist);
  }

  editItem(index, item) {
    this.todolist[index] = item;
    this.storage.set(this.todolist);
  }

  deleteItem(index) {
    this.todolist.splice(index, 1);
    this.storage.set(this.todolist);
  }
}

class Todo {
  constructor(title, description, priority, label, date, complete) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.label = label;
    this.date = date;
    this.complete = complete;
  }
}

export { Data, Todo };
