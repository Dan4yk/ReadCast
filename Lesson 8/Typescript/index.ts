class User{
     protected age: number = 30;
     private isTeacher?: boolean;
  
      constructor(public name: string, public job:string){
      }
  
      public getAge(): string {
          return this.age + '';
      }
  
     
  }

  class Admin extends User{
     constructor(job){
          super('Admin' , job);
          this.age = 100;
     }

     getAge(): string{
          return 'Hello ' + this.age;
     }

  }
  const user = new User('Danu','Frontend');
  const admin = new Admin('Frontend');
  
  abstract class Car {
       model?: string;
       year: number = 2010;

      abstract logInfo(info: string): void;

       getCarYear():number{
            return this.year;
       }
  }

  class Mercedes extends Car{
       logInfo(info: string): void{
          console.log(info);
       }
  }
  const car = new Mercedes();
  console.log(car);
  console.log('info');
  car.getCarYear();
  