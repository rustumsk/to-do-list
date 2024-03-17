export class Project{
    constructor(title){
        this.title = title;
    }
    
    get Title(){
        return this.title;
    }
    set Title(tit){
        this.title = tit;
    }
}