// call stack

function funcThree() {
  console.log("Three");
}

function funcTwo() {
  funcThree();
  console.log("Two");
}

function funcOne() {
  funcTwo();
  console.log("One");
}

funcOne();

// factorial
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
