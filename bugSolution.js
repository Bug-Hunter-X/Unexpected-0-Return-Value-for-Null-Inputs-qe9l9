function foo(a, b) {
  const numA = a === null ? 0 : a; 
  const numB = b === null ? 0 : b; 
  return numA + numB; 
}

console.log(foo(null, 5)); // Outputs 5
console.log(foo(5, null)); // Outputs 5
console.log(foo(null, null)); //Outputs 0
console.log(foo(5, 5)); // Outputs 10