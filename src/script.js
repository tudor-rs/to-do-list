import { App } from "./logic";

const data = [
  {
    title: "title-1-1",
    description: "description-1-1",
    dueDate: "date-1-1",
    priority: "priority-1-1",
  },

  {
    title: "title-1-2",
    description: "description-1-2",
    dueDate: "date-1-2",
    priority: "priority-1-2",
  },

  {
    title: "title-2-1",
    description: "description-2-1",
    dueDate: "date-2-1",
    priority: "priority-2-1",
  },

  {
    title: "title-2-2",
    description: "description-2-2",
    dueDate: "date-2-2",
    priority: "priority-2-2",
  },
];

// localStorage.setItem("data", JSON.stringify(data));

const app = new App();
