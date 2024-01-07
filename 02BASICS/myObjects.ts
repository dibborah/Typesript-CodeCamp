const user = {
    name: "dibya",
    email: "dibya@typescriptcoder.com",
    isActive: true,
}

// When defining type aliases to give a name to object type semi colon can also be used after assigning the value
// type point = {
//     x:number;
//     y:number;
// }

// Two common use Case of functions:

// 1. We pass on object through a function 
// 2. We return objects through a function
// This are two common use case of functions


// Use Case 1: Taking object as an arguement
function createUser1({name:string, isPaid:boolean}){};
createUser1({name:"dibya", isPaid:false});

// Use Case 2: Returning an object
function createCourse():{name:string, price:number}{
    return {name:"typescript", price:34};
}

// The odd behaviour regarding Typescript which comes in Typescript
function createUser({name:string, isPaid:boolean}){};
let newUser = {name:"typescript", isPaid:false, email:"dibya@email.com"}
createUser(newUser);// Here email is also pass which violates the typesript basic functionality and point of usage
// This is a bug in typescript
// createUser({name:"typescript", isPaid:false, email:"dibya@email.com"})// Kind of this is allowed in the above code



export {};

