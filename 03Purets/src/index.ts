class User {
    name:string
    email:string
    readonly city:string = "Jaipur";
    constructor(email:string, name:string){
        this.email = email
        this.name = name
    }
}

const dibya = new User("dib@d.co", "dibya");
// dibya.city = "Delhi"