function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This line is the source of the bug
  }
  return a + b;
}

console.log(foo(null, 5)); // Outputs 0
console.log(foo(5, null)); // Outputs 0
console.log(foo(5, 5)); // Outputs 10