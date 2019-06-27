// interface ILength{
//      length: number;
// }

// function getLength(variabiles: ILength): void {
//      console.log('getLength' , variabiles.length);       
// }

// const box = {
//      name: 'Name',
//      length: 20
// };

// getLength(box);
// getLength([1, 2, 3]);


interface iUser{
     name: string;
     age?: number;
     logInfo(info: string): void;
}

interface IGetYear{
     getYear():number;
}

class User implements iUser, IGetYear{


     name:string = 'user';
     job?:string;
     newAge?: number;

     logInfo(info: string): void{
          console.log(info);
          
     }

     getYear():number{
          return 200;
     }
}