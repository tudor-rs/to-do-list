class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class App {
    constructor() {
        // check local storage
        let allItems = [];
    }

    createTodo() {
        const date = new Date();
        const todo = new Todo('test title', 'test description', `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`, 'low');
        console.log(todo);
    }
}

export { Todo, App };