
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

function logValue(x: Date | string){// instanceof type guard can only be used when there is a new keyword
    // Used only when new keyword is used
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toLowerCase());        
    }
}

// using TYPE PREDICATES(is keyword)

// we'll se some kind of a flaw or logical flow of it

// This way gives us a more DIRECT CONTROL on type checking

// To define a user-defined (is keyword) type guard we simply need to define a function
// whose return type is type predicate ((RETURN TYPE => TYPE PREDICATE)) 

type Fish = { swim: () => void };
type Bird = { fly: () => void };

// pet Validation fc/ method
function isFish(pet: Fish | Bird): pet is Fish{// When we write here with is keyword the Type(ex. Fish) and not a boolean value like true
    return (pet as Fish).swim !== undefined;// Then when this line returns true the return type Fish(setted) will be taken as the type of pet 
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet;
        return "Fish Food";
    }else{
        pet;
        return "Bird Food"
    }
}

// # In the above code as refers to type assertion 
// In (pet as Fish) we are telling the typescript compliler to treat the pet as Fish type explicitly (this is called type assertion)
// Since pet can be either Fish or Bird 


// DISCRIMINATED UNIONS AND EXHAUTIVENESS CHECKING WITH NEVER

// DISCRIMINATED UNIONS

interface Circle{
    kind: "circle",
    radius: number,
}

interface Square{
    kind: "square",
    side: number
}

interface Rectangle{
    kind: "rectangle",
    length: number,
    width: number
}

interface Triangle{
    kind: "triangle",
    length: number,
    width: number
}

// Here we are having a same property kind in each of the interfaces
// But instead of mentioning as Kind : string or number we are directly mentioning or giving a value
// This is the concept of DISCRIMINATED UNIONS with help to check misspelling errors

// usages of the above created interfaces

type Shape = Circle | Square | Rectangle ;

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side;
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;        
        default:
            const _defaultForShape: never = shape;// This line is yelling error since I am not checking for all the exhaustive cases. And this is what we want to yell error at us when we donot do exhaustive checking
            // This is wrong since we have defined and used Rectangle but not checking for Rectangle
            return _defaultForShape;
            // # Type Never should never be assigned to any varible 
            // It is just used for future- proofing the code
            // # This default method should never be running than only our code is fine
            // ### But this doesnot mean that its existance is useless
            // ### The default is like an insurance and is very important for type narrowing and checking
    }
}

