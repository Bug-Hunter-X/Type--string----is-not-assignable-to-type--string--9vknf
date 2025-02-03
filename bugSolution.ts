function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Iterate and greet each element
user.forEach(name => console.log(greeter(name)));

// Solution 2: Join the array elements into a single string
let userName = user.join(" ");
console.log(greeter(userName)); // Output: Hello, Jane Doe