import { App } from "./todo";

const jsonData = [
    {
        "title": "test-title",
        "description": "test-description",
        "dueDate": "test-due-date",
        "priority": "test-priority"
    },

    {
        "title": "test-title-2",
        "description": "test-description-2",
        "dueDate": "test-due-date-2",
        "priority": "test-priority-2"
    },

    {
        "title": "test-title-3",
        "description": "test-description-3",
        "dueDate": "test-due-date-3",
        "priority": "test-priority-3"
    },
];

//localStorage.setItem('todos', JSON.stringify(jsonData));

const app = new App();