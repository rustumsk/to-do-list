export class Project{
    arr = [];
    constructor(title){
        this.title = title;
    }
    
    get Title(){
        return this.title;
    }
    set Title(tit){
        this.title = tit;
    }
    get ToDo(){
        return this.arr;
    }
}