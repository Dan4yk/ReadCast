function genericGetter <T>(data: T):T {
     return data;
}

let newGenericFunction :<T>(data: T) => T = genericGetter;

//=========================================================

class Multiply<T extends number | string> {
     constructor(private a: T , private b: T){}

     public getResult(): number{
          return +this.a * +this.b;
     }     
}

const mNum = new Multiply(10 , 5);
console.log('Number is: ' , mNum.getResult());

const mStr = new Multiply('40' , '50');
console.log('String is: ' , mStr.getResult());

