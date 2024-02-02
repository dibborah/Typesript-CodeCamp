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
    private readonly city:string = "Jaipur";
    private _courseCount = 1;
    protected _courseNumber = 2;
    constructor(
        public email:string, 
        public name:string,
        private userId:string,
        ){// short syntax where this is no need to be written
    }

    private deleteToken(){
        console.log("This is just a delete token private method");        
    }
    
    // getAppleEmail: () => string,
    get getAppleEmail(): string{// getAppleEmail is a get accessor
        return `apple${this.email}`;
    }
    get getCourseCount(): number{
        return this._courseCount;
    }
    set courseCount(courseNum:number){
        if(courseNum <= 1){
            throw new Error("CourseNum must be greater than 1");
        }
        this._courseCount = courseNum;
    }    
}

class SubUser extends User {
    changeCourse(){
        // this._courseCount = 1;// This throws error as _courseCount is a private property and can only be accessible within class User and not also on any subclass created from User like SubUser
        this._courseNumber = 1;
    }
}

const dibya = new User("dib@d.co", "dibya", "123");
const dib = new SubUser("dib@d.co", "dibya", "123");
console.log(dibya.getAppleEmail);
// console.log(dibya._courseCount);
// console.log(dib._courseNumber);// This throws error as _courseNumber is a protected class and can only be accessed within class User and the subclasses of User


// dibya.deleteToken();// This throws error as deleteToken is a private method and only accessible within class
// dibya._courseCount;// This is also a private property so can't be accessible outside class

// dibya.city; // Not accessible out the constructor function since the city property is made private

// Note: 
// 1. private is a Typescript world 
// 2. # hash is a Javascript world