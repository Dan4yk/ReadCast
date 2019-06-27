type User = {name: string  , age: number};

const user = {
    name: "Danu",
    age: 50
}

function logUser(user: User): void{
    console.log(user.name + ' ' + user.age);    
}

logUser(user);

let primitiv: any;
primitiv = 1;
primitiv = '1';