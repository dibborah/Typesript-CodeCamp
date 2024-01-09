// TUPLES are simply ARRAYS with RESTRICTIONS

// In normal situation orders of data in an array is not important
// So when we need an array of different types of data not necessarily in an specified order we use union

// Example :

// Order of data inside this array is not important
// const user: (string | number)[] = ["num", 1];
// const user: (string | number)[] = [1,"num"];

// But in case when order in an array is important
// Then we use Tuples
// A practical use case of this scenerio where tupes can be used is during API calls

let TUser: [string, number, boolean];
TUser = ["abc", 123, true];
// TUser = ["",123,true,123];// This also throws error as target allows only 3 elements but source has 4
// TUser = [123,true,""];// Order is important and has to be maintained orelse an Error will be thrown

// # In case TUPLES I cannot reverse the order but have to follow the order
// I have to follow the order as it is defined in the type
// If I changed the order conflicting the defined type an error will be thrown

let rgb: [number, number, number] = [255, 255, 255];

type User = [number, string];

const newUser: User = [123, "example@email.com"];

// Something wrong about Tuples
// Some ODD behaviour about Tuples:

// We can override or change the existing values of the tuples
// # To change the values the type of value we are pushing have to match the defined type in order
// Then values can be overrided
newUser[0] = 456;
newUser[1] = "dance";
// newUser[2] = "xyz";// This is not allowed and will throw error since User type is of length two and in the index[2] doesnot exist so no value at index 2

// newUser.push(true);// Boolean type is not assignable
// Tuples are simple ARRAYS with restrictions