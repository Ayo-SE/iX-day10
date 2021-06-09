export default class Task {
    constructor(name, completed, dateCompleted) {
        this.id = Date.now();
        this.name = name;
        this.completed = completed;
        this.dateCompleted = dateCompleted;
    }
}