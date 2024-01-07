// const user = {
//     name: "dibya",
//     email: "dibya@typescriptcoder.com",
//     isActive: true,
// }

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
// function createUser1({name:string, isPaid:boolean}){};
// createUser1({name:"dibya", isPaid:false});

// Use Case 2: Returning an object
// function createCourse():{name:string, price:number}{
//     return {name:"typescript", price:34};
// }

// The odd behaviour regarding Typescript which comes in Typescript
// function createUser({name:string, isPaid:boolean}){};
// let newUser = {name:"typescript", isPaid:false, email:"dibya@email.com"}
// createUser(newUser);// Here email is also pass which violates the typesript basic functionality and point of usage
// This is a bug in typescript
// createUser({name:"typescript", isPaid:false, email:"dibya@email.com"})// Kind of this is allowed in the above code

//There are more such properties such as names, email & isActive and we have created a type for it!!!

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// type Mystring = string;// This is also can be done and one can use Mystring wherever one wants to use string one can use Mystring

// function createUser(user: User): User {
//     return { name: "", email: "", isActive: false };
// }
// createUser({name:"", email:"dibya@t.com", isActive:false});
// createUser();// This is not allowed as in the error 1 arguement is asked as per the way we defined the function and the error is saying that it got 0 arguement
// # A function whose return type is neither undefined , void nor any must return a value

// readonly => Access Modifier
// ?: => Meaning a property is option to be used when the type aliases container this optional property is used
// User Case

type User = {
  readonly _id: string; // If you want that nobody should be able to touch specifically MANIPULATE this _id since touching this _id can ruin the whole program we use the readonly property
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number; // Optional ? // Use kiya tab v chalega aur nahi use kiya tab v chalega
};

let myUser: User = {
  _id: "1234",
  name: "d",
  email: "d@d.com",
  isActive: false,
  //   credCardDetails:345,
};

type cardNumber = {
  cardnumber: string;
};
type cardDate = {
  carddate: string;
};

// Using & operator one can make a type by combining various other types
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "dibya@d.com";
// myUser._id = "6789";// Throws error // Says _id is a read-only property and we cannot assign it any other value
// # If _id would be an array , we can push values to array in case of READONLY
// In case of Array Readonly is allowed since the memory address is not changed just new values are added along with the existing values in the same memory address

// There are four types of Access Modifiers in Typescript:
// 1. Public
// 2. Private
// 3. Protected
// 4. Readonly => We are currently studing this

export {};
