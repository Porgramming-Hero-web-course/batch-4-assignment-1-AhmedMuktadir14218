{interface Person {
    name: string;
    age: number;
    email: string;
}

function validateKeys(obj: Person, keys: (keyof Person)[]): boolean {
    for (let i = 0; i < keys.length; i++) {
        if (!(keys[i] in obj)) {
            return false;
        }
    }
    return true;
}

// Sample Input:
const myPerson = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(myPerson, ["name", "age"]));  // Sample Output: true
}