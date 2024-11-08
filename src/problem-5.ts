interface Person {
    name: string;
    age: number;
  }
  // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
  function getProperty(person: Person, property: keyof Person): string | number {
    return person[property];
}
 
  // Sample Input:
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "age"));
console.log(getProperty(person, "name"));

// Sample Output:
// Alice;