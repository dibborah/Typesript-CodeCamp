"use strict";
// const user = {
//     name: "dibya",
//     email: "dibya@typescriptcoder.com",
//     isActive: true,
// }

// THIS IS JUST THE CONFIG FILE OF THE TYPESCRIPT 

// The readonly error which is shown in the typescript file is not reflected here in the config file of the typescript , in the js file
// So there is nothing which stops me to change the _id key here in the javascript
// Which implies that the readonly is purely a property of the TYPESCRIPT and not of JAVASCRIPT

Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "1234",
    name: "d",
    email: "d@d.com",
    isActive: false,
    // credCardDetails:345,
};
myUser.email = "dibya@d.com";
myUser._id = "6789"; // This was throwing error in the typescript file as in the typescript file we used the readonly property but here in the config file even when we assigned another value to _id no error is thrown
