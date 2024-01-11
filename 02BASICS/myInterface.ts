interface User {
  // Scenerio: We are creating a user where we want to give him/her a free trail of our service that too in a discount offer
  readonly dbID: number,
  email: string,
  userId: number,
  googleId?: number,
//   startTrail: () => string,// Syntax similar to ARROW FUNCTION
  startTrail():string,// This method is telling: To jo v logic d par Ye method User main Hona h hoga and ye method hamesa ek STRING return karna padega h padega // LOGIC chahe jo v ho
  // 2 Point: 
  // a. Is method ko User se banaye varibale main HONA H HONA h
  // b. Is method ko ek STRING return karna h karna padega
  getCoupon(couponName:string, value: number): number,
}
// const startTrail = () => {
//     return "";
// }

const dibya: User = { dbID: 29, email: "d@d.co", userId: 123,// Here all the property are passed from the interface types since all the properties defined in the interface type are compulsory and has to be there except the optional defined ones
startTrail: () => {
    return "trail started";
},
getCoupon:(name:"dibya100", off: 10) => { // key or property_name in the interface defination need not match the name where we are actually providing the value
    return 6;    
},  };
dibya.email = "change@email.co";
// dibya.dbID = 69; Throws error b/c can't change read-Only property

// # In interface all the parameters are compulsory to be passed on except the optional ones
// # USE CASES helps us to understand any concept or anything more deeply and in actual and practical sense
// # So always use USE CASES to understand anything
// # The first question always should be what is it's use 
//  What's the point of learning this
// Where this can be useful
// Why does this even exist and not that


// Note:(Interface says as :)
// This name is necessary
// This property is necessary
// This method is necessary

// interface vs type
// Syntax Difference :
// 1. Type has got equal (=) sign but interface doesnot have equal(=) sign in it.

// Interface may be kind of similar with the types with some similar USE CASES
// But soon we'll learn interfaces differences with types