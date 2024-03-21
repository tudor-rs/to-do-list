const data = [
  {
    title: "Finish project",
    description: "",
    dueDate: "01-04-2024",
    priority: "High",
    label: "None",
    complete: true
  },

  {
    title: "Wash dishes",
    description: "Including pans",
    dueDate: "14-03-2024",
    priority: "Medium",
    label: "None",
    complete: true
  },

  {
    title: "Change brakes",
    description: "A lot of time has passed since last change",
    dueDate: "23-04-2024",
    priority: "Medium",
    label: "Car",
    complete: true
  },

  {
    title: "Check oil",
    description: "",
    dueDate: "25-03-2024",
    priority: "Low",
    label: "Car",
    complete: false
  },
];

class Storage {
  constructor() {
    localStorage.setItem("data", JSON.stringify(data));
  }

  get() {
    if (!JSON.parse(localStorage.getItem("data") === null)) {
      return JSON.parse(localStorage.getItem("data"));
    } else {
      return [];
    }
  }

  set(data) {
    localStorage.setItem("data", JSON.stringify(data));
  }
}

export { Storage };
