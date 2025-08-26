let a = 10;
let b = 1234;
let c = a + b;
console.log(c);
const id = 12345;
const city = "Melbourne";
const university = "RMIT";

const myStudentRecord = {
  name: "Iris",
  id: 12345,
  city: "Melbourne",
};

console.log(myStudentRecord.name);
console.log(myStudentRecord.city);

const myAssignementRecord = {
  id: 12345,
  as1Score: 78,
  as2Score: 87,
  as3Score: 56,
};
const total =
  myAssignementRecord.as1Score +
  myAssignementRecord.as2Score +
  myAssignementRecord.as3Score;
console.log(total);

//boolean = test condition check true or false
const isItEvening = true;
const isItRaining = false;

// back tick``
//const myAdress = `rmit university 124
//la trobe
//
//st melbourne is ${myName}'s address`;
//console.log(myAdress);
//const myDetails = `hello, I am ${myName}, I work for ${university}`;
//console.log(myDetails);

const student1 = "Alice";
const student2 = "Sarah";
const student3 = "Jack";
const student4 = "Mike";
console.log("hello", student1);
console.log("hello", student2);
console.log("hello", student3);
console.log("hello", student4);

let students = ["Alice", "Sarah", "Jack", "Mike", "Emily", "John"];
// console.log("hello", students[0]);
// console.log("hello", students[1]);
// console.log("hello", students[2]);
// console.log("hello", students[3]);
// console.log("hello", students[4]);
console.log("array size", students.lenght);
for (let i = 0; i < students.length; i++) {
  console.log("value of i", i);
  console.log("hello", students[i]);
}

let score = 98;
if (score > 80) {
  console.log("hey you got HD");
  console.log("time for a celebration");
} else if (score <= 80 && score > 70) {
  console.log("hey you passed");
} else if (score < 50) {
  console.log("sorry you failed");
}
