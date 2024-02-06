
function detectType(val: string | number){
    // return val.toLowerCase();// Property 'toLowerCase' does not exist on type 'string | number'.
    if(typeof val === "string"){
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null){// We developers are always needed to be extra cautious with NULL . 
    // Not treating null as any other data types like objects or number can break our entire code
    if(!id){
        console.log("Please Provide Id");
        return;        
    }
    return id.toLowerCase();
}

// # Note: In TypeScript typeof operator is called Type Guard

function printAll(strs: string | string[] | null) {
    if(strs){
        if (typeof strs === "object") {
            for (const s of strs) {
                //   'strs' is possibly 'null'.
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
  }

// typeof operator (Type Guards)
// Js has a typeof operator which returns the type of the values
// Js expects this to return a certain set of string:
// The are 8 sets of strings typeof operator can return:
// 1. number 2. string 3. boolean 4. undefined  5. object 6. function 7. bigInt 8. symbol

// typeof in Js => 1. object === object 
                // 2. Array === object
                // 3. null === object

                // In JS OBJECTS, NULL, ARRAYS === OBJECTS


// "in" operator in Typescript

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin;
    };
}


// Class & Constructor function => They are not the same

// Class is a blueprint or template for creating objects in Object Oriented Programming
// Constructor : It is a special method used within a class for initializing the states of created objects 

// Factory Functions => Normal fc's which are not used to create Instances 

// objects vs new Objects
// Objects literals objects => Object type. Js Fundamental Data Type 
// new Object => Instance which is created by a Constructor function

// Typeguards : Gives typescript additional types information 
// Typeguards : narrows down types within a block.
// Especially usefull with union types and when a type of a variable is not immediately apparent.

// Type Guards : 
// 1. typeof type guards
// 2. instanceof guards => used with instance created using new keyword
// 3. user-defined Typeguard => Custom fc that return type predicate

// Objects that can be create using new keyword

// 1. custom objects
// instances of built-in constructors functions and class

// const arr = new Array();
// const obj = new Object();
// const today = new Date();
// const map = new Map(); // create new map object for storing key value pairs
// const reg = new RegExp(pattern);
// const set = new Set(); // creating set object for storing unique values(UNIQUE VALUES)

// user defined constructor

// ES6 classes

// instance of fc object

// instances of DOM element
// const divElement = new HTMLDivElement();
// const anchorElement = new HTMLAnchorElement();






// instanceof and Type Predicate

// instanceof Narrowing

// #Note: Anything that can be constructed with the new keyword, that's where
// the instanceof comes into the picture

// Javascript has a operator called instanceof operator to check whether or not an value is an instance or not of another value
// For example : x instanceof foo.prototype