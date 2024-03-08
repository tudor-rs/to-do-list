class App {
    constructor() {
        this.storage = new Storage();
    }

    createTodo(form) {
        const todo = new Todo(form.title, form.description, form.dueDate, form.priority);
        this.storage.createTodo(todo);
        this.storage.saveChanges();
    }
}

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class Storage {
    constructor() {
        this.todos = this.getTodos(); // array of objects
    }

    getTodos() {
        return JSON.parse(localStorage.getItem('todos'));
    }

    createTodo(todo) {
        // verify if valid?

        this.todos.push(todo);
    }

    deleteTodo(index) { // it will not work with projects
        this.todos.splice(index, 1);
    }

    saveChanges() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
}

export { App };

// add edit function
// add projects
// set as complete
// localStorage shoud be array of arrays of objects?