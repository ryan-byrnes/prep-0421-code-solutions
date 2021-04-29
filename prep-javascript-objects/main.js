var person = {
  firstName: "Ryan",
  lastName: "Byrnes",
  hobby: "Working Out",
};

console.log(person);

var fullName = person.firstName + " " + person.lastName;

console.log("The person's name is " + fullName);

person.job = "Trainer";

var job = "The person's current job is: " + person.job;

console.log(job);

person.previousJob = "student";

var previousJob = "The person's previous job is: " + person.previousJob;

console.log(previousJob);

console.log(person);

var myCar = {
  make: "Chevy",
  model: "Silverado",
  year: "2018",
}

console.log(myCar);

myCar["owner"] = fullName;

var nameAndCar = "My name is " + fullName + " " + "and I drive a " + myCar["year"] + " " + myCar["make"] + " " + myCar["model"] + ".";

console.log(nameAndCar);

myCar["color"] = "black";

console.log(myCar);
