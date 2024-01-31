// const score: Array<number> = []
// const names: Array<string> = []

// function identityOne(val:boolean|number):boolean|number{
//     return val;// we can do conditional checking to set a particular return type
//     // But this increase the code lines and also the complexity(unnecessarily)
// }

// function identityTwo(val: any):any{// Typescript have not idea about the type actually
//     // Typescript is just saying: " use anything and I am not going to say you anything only on in this matter go on ".
//     return val;
// }

// function identityThree<Type>(val:Type):Type{// Once you pass any particular type that type is actually logged 
//     // Which means only that value type can be returned 
//     return val;
// }

// // This values is logged and 3 has to be returned // Since it is a generic
// // identityThree(3)//function identityThree<3>(val: 3): 3

// // Same here : Since identityThree is a generic and string "3" is passed so 3 is locked as a input value and also as a returned type
// // identityThree("3")// function identityThree<"3">(val: "3"): "3"

// // identityThree(false);

// // Standart way to declare or set a GENERIC
// function identityFour<T>(val: T): T{
//     return val;
// }

// // Just use same letter T or H // But just remember whatever you use you just have to use that same letter to when define that generic
// function identityFive<H>(val: H): H{
//     return val;
// }

// interface Bottle {
//     brand: string,
//     type: number,
// }

// identityFour<Bottle>({
//     brand: "",
//     type: 8
// })

// For Array

// // Problem on Generic type with Array.length method

// First way to define an Array []
function getSearchProduct1Way<T>(products:T[]): T {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];// This is one of the value of the T[n] since return type is just T and T[]
}
function getSearchProduct1WayAgain<T>(products:T[]): T[] {
    return products;// Here products is a whole Array [] since return type is T[] a whole array and not just an element of the Array
}
// Second way to define an Array <>
function getSearchProduct2ndWay<T>(products: Array<T>):Array<T>{
    return products;
}


// Defining the same above Array Generic function using ARROW function

// 1st way
const getMoreSearchProducts = <T, >(products: T[]): T => {
    const myIndex = 4;
    products.length;// Since the paremeter is an Array so length method can also be used
    return products[myIndex];
}

// 2nd way
 
const getMoreSearchProduct = <T>(products: Array<T>): T => {
    const myIndex = 4;
    products.length;
    return products[myIndex];
}
 