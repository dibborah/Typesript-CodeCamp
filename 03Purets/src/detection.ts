
function detectType(val: string | number){
    // return val.toLowerCase();// Property 'toLowerCase' does not exist on type 'string | number'.
    if(typeof val === "string"){
        return val.toLowerCase();
    }
    return val + 3;
}

function provideId(id: string | null){// We developers are always needed to be extra cautious with NULL . 
    // Not treating null as any other data types like objects or number can break our entire code
    if(!id){
        console.log("Please Provide Id");
        return;        
    }
    return id.toLowerCase();
}

// # Note: In TypeScript typeof operator is called Type Guard

function printAll(strs: string | string[] | null) {
    if(strs){
        if (typeof strs === "object") {
            for (const s of strs) {
                //   'strs' is possibly 'null'.
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
  }

// typeof operator (Type Guards)
// Js has a typeof operator which returns the type of the values
// Js expects this to return a certain set of string:
// The are 8 sets of strings typeof operator can return:
// 1. number 2. string 3. boolean 4. undefined  5. object 6. function 7. bigInt 8. symbol

// typeof in Js => 1. object === object 
                // 2. Array === object
                // 3. null === object

                // In JS OBJECTS, NULL, ARRAYS === OBJECTS


// "in" operator in Typescript

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin;
    };
}

