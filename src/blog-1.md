# TypeScript Union and Intersection Types

Union types and intersection types allow TypeScript's types to be combined in an expressive and flexible way, enabling you to specify types better and write safer, more versatile code.

### Union Types (`A | B`)
Union types are used when a value could be one of multiple types. They allow a variable to hold any of the types specified.

**Example:**

```typescript
function display(value: string | number) {
    console.log(value);
}
display("Hello"); // Output: Hello
display(42);      // Output: 42
