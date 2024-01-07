var user = {
    name: "dibya",
    email: "dibya@typescriptcoder.com",
    isActive: true,
};
// Two common use Case of functions:
// 1. We pass on object through a function 
// 2. We return objects through a function
// This are two common use case of functions
// Use Case 1: Taking object as an arguement
function createUser1(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
;
createUser1({ name: "dibya", isPaid: false });
// Use Case 2: Returning an object
function createCourse() {
    return { name: "typescript", price: 34 };
}
// The odd behaviour regarding Typescript which comes in Typescript
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
;
var newUser = { name: "typescript", isPaid: false, email: "dibya@email.com" };
createUser(newUser); // Here email is also pass which violates the typesript basic functionality and point of usage
// This is a bug in typescript
// createUser({name:"typescript", isPaid:false, email:"dibya@email.com"})// Kind of this is allowed in the above code
