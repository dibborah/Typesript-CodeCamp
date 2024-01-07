// 1. Wrong 1
// const superHeroes = [];// Here just an empty array is assigned, no type is given
// giving no types in this array implicitly gives a type of never
// superHeroes.push("dibya");// One can't push a string to type never

// # never is supposed to never execute the program . It is supposed to terminate or end the things

// 2. Wrong 2
// const superHeroes: [] = [];
// superHeroes.push("Tony Start");// This will also give error as the type is defined to be an "array" but the array type is still "never" // And in never type a string cannot be assigned

// 3. Right way
// 1st way
// const superHeroes: string[] = [];// Type is a string Array
// 2nd way
const superHeroes: Array<string> = []; // Or Type is a Array of string
superHeroes.push("Elon Musk");

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

const allUsers: User[] = [];

const MLModels: number[][] = [ // This is a number array of array
  [255, 255, 255],
//   [""],""// This two can't happen// String cannot be assigned to type number and string cannot be assing to number array
];

// 1st of writing
// const heroPower: number[] = []; // Type is a Number Array
// 2nd way of writing
const heroPower: Array<number> = []; // Array of Number
heroPower.push(5000);

// allUsers.push("")// This will also give error// Arguement of string is not assignable to type object
// allUsers.push({})// This too will give me error// {} The empty object is missing the properties defined in User type
allUsers.push({ name: "dibya", email: "dibya@d.com", isActive: false });
