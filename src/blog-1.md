Union types and intersection types allow for TypeScript's types to be combined in an expressive and flexible way, better allowing you to specify your types and enable safer and more versatile code.

Union Types (A | B): This is used when a value could be one of many types. It lets the variable hold any of the types specified.
example:
function display(value: string | number) {
    console.log(value);
}
console.log("Hello"); 
console.log(42);  

Intersection Types (A & B): Merges multiple types into one; a variable must meet all of the types present.
example:
interface User {
name: string;
}
interface Admin {
adminLevel: number;
}
type AdminUser = User & Admin;
const admin: AdminUser = { name: "Alice", adminLevel: 1 };  
