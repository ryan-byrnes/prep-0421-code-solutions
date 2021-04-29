function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);


function convertHoursToMinutes(x) {
  return x * 60;
}

console.log(convertHoursToMinutes(2));


function getGreeting(name) {
  return "Hello " + name;
}

console.log(getGreeting("Ryan"));


function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

console.log(addAndMultiplyBy5(10, 5));


function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

console.log(multiplyAndDivideBy5(35, 10));


function subtractTwoNumbers(x, y) {
  return x - y;
}

console.log(subtractTwoNumbers(22, 7));


function getCircleCircumference(x) {
  return 2 * Math.PI * x;
}

console.log(getCircleCircumference(5));


function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(getFullName("Ryan", "Byrnes"));


function cube(x) {
  return x ** 3;
}

console.log(cube(5));
