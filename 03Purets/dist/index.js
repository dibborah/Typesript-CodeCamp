"use strict";
// class User {
//     public name: string
//     email:string // The ones which are not marked by any data modifier are automatically intrinsically marked as public by Typescript
//     private readonly city:string = "Jaipur";
//     constructor(email:string, name:string){
//         this.email = email
//         this.name = name
//     }
// }
// const dibya = new User("dib@d.co", "dibya");
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Jaipur";
    }
}
const dibya = new User("dib@d.co", "dibya", "123");
// dibya.city; // Not accessible out the constructor function since the city property is made private
// Note: 
// 1. private is a Typescript world 
// 2. # hash is a Javascript world
