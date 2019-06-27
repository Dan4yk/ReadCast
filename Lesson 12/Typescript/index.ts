
namespace Util{
     export function isEmpty(data: any): boolean{
          return !data;//!-boolean tip
     }

    export function isUndefined(data: any): boolean{
          return typeof data === "undefined";
     }

    export const PI = Math.PI;
    export const EXP = Math.E;
}

const EXP = 'Testing';

console.log(Util.isEmpty(''));
console.log(Util.isEmpty('sa'));
console.log(Util.PI);
console.log(Util.EXP);
console.log(EXP);