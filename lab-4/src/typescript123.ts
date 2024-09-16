// Exercise-1
console.log(
  "============================// Exercise-1 //======================="
);
class University {
  name: string;
  dept: string;

  constructor(name: string, dept: string) {
    this.name = name;
    this.dept = dept;
  }
  graduation(year: number) {
    console.log(`Graduating ${this.dept} ${year} students`);
  }
}

let miu: University =  University("MIU", "MSD");
miu.graduation(2025);

// Exercise-2
console.log(
  "============================// Exercise-2 //======================="
);
type BankAccount = {
  money: number;
  deposit: (value: number) => void;
};

type Person = {
  name: string;
  bankAccount: BankAccount;
  hobbies: string[];
};

let bankAccount: BankAccount = {
  money: 2000,

  deposit(value: number): void {
    this.money += value;
  },
};

let nahom: Person = {
  name: "Nahom",
  bankAccount: bankAccount,
  hobbies: ["Coding", "FootBall"],
};

nahom.bankAccount.deposit(3000);
console.log(nahom);

// Exercise-3
console.log("============================// Exercise-3 //=======================");
interface Nahom {
  name: string;
  age: number;
  isStudent: boolean;
}

function describePerson(nahom: Nahom): string {
  return `${nahom.name} is ${nahom.age} years old and ${nahom.isStudent ? 'is' : 'is not'} a student at "MIU".`;
}

const person1: Nahom = { name: "Nahom", age: 25, isStudent: true };
console.log(describePerson(person1));


