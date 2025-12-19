export class Todo {

    constructor(public id: number, public title: string, public completed: boolean, public urgency: 'minor' | 'major' | 'critical') {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.urgency = urgency;
    }

    // Method to toggle the completion status of the todo
    toggleCompletion() {
        this.completed = !this.completed;
    }

    completeTodo() {
        this.completed = true;
    }

    reopenTodo() {
        this.completed = false;
    }
}