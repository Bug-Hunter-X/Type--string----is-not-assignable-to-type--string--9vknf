# Type 'string[]' is not assignable to type 'string'

This TypeScript code demonstrates a common type error: assigning an array of strings to a variable expecting a single string.

## Bug
The `greeter` function expects a single string as input. However, the `user` variable is an array of strings.  This causes a type error because TypeScript correctly identifies the type mismatch.

## Solution
The solution depends on the intended behavior. If you want to greet each element in the array, you would iterate and call `greeter` for each element. If you want to combine the array into a single string, you could use `join`.

## How to reproduce
1. Save the code in a file named `bug.ts`.
2. Compile the code using the TypeScript compiler (`tsc bug.ts`).
3. Observe the type error reported by the compiler.