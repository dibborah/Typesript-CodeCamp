// Enums: Enumerations => Meaning: Specifically Listed

// Enums are used to give restrictions in choice
// When Enum used one has to choose between only the selected types
// It is like object just the equal(=) sign is not used => That's a synta difference with objects ({})
// When assigned STRING value is assigned the value below it has to be assigned with some value
// WhereAs if a NUMBER value is assigned than a value assigned criteria is not mandatory in Enum(since it automatically assigns than)
// When number are assigned it assignes whatever value are below it by itself based on an ascending order

// const enum seatChoice {
//     AISLE = "AISLE",
//     MIDDLE = 2,
//     WINDOW = "",
//     FOURTH = "FOUR"
// }

// const seat = seatChoice.AISLE;

// In case of situation where we need RESTRICTIVE options ENUMS serves us really well
// Ex: seat position in Plane. Only 3 seat options are avaible and customers have to choose between only those 3 options

// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;
// let seat;
// if(seat === 0){
//   console.log("Available");
// }

// const enum examVar1 {
//     APLHA = 42,// this is a enum member
//     BETA,// this is another enum member
//     GAMA = 37,// this is another enum member
//     X,// this is another enum member
// }

// const examVar2 = examVar1.X;

const enum examVar1 {// Defining enum as CONST is really really important since it makes the Javascript code (inner mechanism) much more efficient
    APLHA = "42",// this is a enum member
    THETA = 7,// this is a enum member
    BETA = "",// this is another enum member
    GAMA = "Apple",// this is another enum member
    X = 3,// this is another enum member
    y,// this is another enum member
}
//# putting strings as a value than one has to provide the value below the string value with a value(THAN INITIALISING IS MANDATORY)
const examVar2 = examVar1.APLHA;