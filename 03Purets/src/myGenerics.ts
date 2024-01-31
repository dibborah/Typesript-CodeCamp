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



 