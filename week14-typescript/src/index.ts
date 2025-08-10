// let x: number = 1;
// console.log(x);

// function greetUser(name: string) {
//   console.log(`Hello ${name}`);
// }

// greetUser("Garv");

// function sum(x1: number, x2: number) {
//   return x1 + x2;
// }

// let ans = sum(1, 2);
// console.log(ans);

// function delayedCall(fn: (name: string) => void) {
//     setTimeout(fn, 1000);
// }

// delayedCall(() => greetUser("Garv"));

//INTERFACES

// interface UserType {
//   firstname: string;
//   lastname: string;
//   age: number;
// }

// function greet(user: UserType) {
//   console.log("Hello " + user.firstname);
// }

// let user: UserType = {
//   firstname: "garv",
//   lastname: "thanvi",
//   age: 20,
// };

// greet(user);

//TYPES

interface Employee {
  name: string;
  startDate: Date;
}

interface Manager {
  name: string;
  department: string;
}

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "garv",
  startDate: new Date(),
  department: "XYZ",
};
