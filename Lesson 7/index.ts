class User{
   protected age: number = 30;
   private isTeacher?: boolean;

    constructor(public name: string, public job:string){
    }

    private getAge(): number {
        return this.age;
    }

    public setTitle(title:boolean){
        this.isTeacher = title;
        console.log(this.isTeacher);
        console.log(this.getAge());
        
    }
}
const user = new User('Danu','BackEnd');
user.setTitle(false);
