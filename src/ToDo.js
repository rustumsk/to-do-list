export class ToDo {
    constructor(task,description,priority,date){
        this.task = task;
        this.description = description;
        this.priority = priority;
        this.date = date;
    }
    get Task(){
        return this.task;
    }
    get Description(){
        return this.description;
    }
    get Priority(){
        return this.priority;
    }
    get Date(){
        return this.Date;
    }
}