let score: number | string;
score = 78;
score = "seventy-eight";

type User = {
  name: string;
  id: string;
};

type Admin = {
  username: string;
  id: string;
};

let dibya: User | Admin = { name: "react", id: "123" };
dibya = { username: "typescript", id: "789" };
// dibya = {username:"typescript", name:"789"};// This is not allowed // Putting incomplete details of any one type is not allowed

// const getDbId = (id: number | string) => {
//   console.log(`DB id is ${id}`);
// };
// getDbId(7);
// getDbId("seven");

const getDbId = (id: number | string) => {
  // id.toLowerCase();// This throws error as toLowerCase method cannot be done with numbers

  // if(typeof id === "number"){// This is the inner mechanism of the above code of why it throws error when id.toLowerCase is done with union type of number | string
  //   id.toLowerCase();
  // }

  if (typeof id === "string") {
    id.toLowerCase();
  }
};

// Arrays in Union

const data1: number[] = [1, 2, 3]; // number []
const data2: string[] = ["1", "2", "3"]; // string []
const data3: number | string[] = 6; // data3 is now a type where one can assign numbers or string array
// Mark that number array not is cannot be assigned
const dataThree: number | string[] = ["a", "1"]; // data3 is now a type where one can assign numbers or string array
// Mark that number array not is cannot be assigned
// const data4: number[]|string[] = ["6", 6]//This will throw error as one has just to provide in this data type purely number array or purely string array
const data4: number[] | string[] = ["6", "7", "abc"];
const dataFour: number[] | string[] = [5, 6, 8];

// Union array formed by more than one data types

const data5: (number | string)[] = ["abc", 6]; // This is a array data type where value of both number and string can be assigned
const data6: (number | string | boolean)[] = ["abc", 6, false];
// The less efficient and meaningless way of achieving the same above result is :
const data8: any[] = ["uj", 78, true];

// any will not just make you assigned assign this three data types above but removes any restriction to assign data:
const data7: any[] = ["", 78, true, null, undefined, {}];

// Example to Restrict assigning any value other than a specific value :

// let pi: 3.14 = 3.14;
// pi = 3.14;

// A practical use case of the above Example
// A practical use case of restricting with only a specific value:

let seatallotment : "aisle" | "middle" | "window";

// This three are fine
seatallotment = "aisle";
seatallotment = "middle";
seatallotment = "window";

// But
// seatallotment = "crew";// Throws error
// seatallotment = "ugef";// Any string other than the above mentioned union types of those above three throws error;
