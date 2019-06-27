type User = {name:string,age:number,jobs: string[],getJobs: () => string[],LogName?: () => void}

let user: User = {
    name: 'Danu',
    age: 50,
    jobs:['a','b'],
   getJobs(): string[]{
        return this.jobs;
    },
    LogName (): void {
        console.log(this.name)
    } 
};

let user2: User = {
    name :"Olesea",
    age:25,
    jobs:['2'],
    getJobs(): string[]{
        return this.jobs;
    }
}