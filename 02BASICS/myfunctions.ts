// let's see a different senerio

// Here the arguement type is discussed along with the return type

// function addOne(num: number):number{
//     return num + 1;
// }

// addOne(1);

// This is a different senerio where union should be used 
// We'll discuss it later

// function getValue(myVal:number){
//     if(myVal>5){
//         return true;
//     }
//     return "200 OK"
// }

// Giving the parameter type & return type in an ARROW FUNCTION

const getHello = (val: string):string => {
    return "";
}

// function consoleError(errmsg:string):void{
//     console.log(errmsg);
// }

// # Some Functions never return a value
function consoleError(errmsg:string):never{// If you want to make your errors more Robust and handling part of it use NEVER
    throw new Error(errmsg);// this line is used along with the never datatype
}
// never types represents values which are never read
// In return types it throw an Exception or Terminates execution of the program

// Basic Types 
// number 
// string
// boolean
// array 
// any
// Functions
// object types
// union types
// type aliases
// never
// null and undefined
// void
// unknown
// enum
// type
// interface
// literal types
// type assertions

// Less Common Primitives

// bigInt
// Symbol
