//Exercise 1: 
//Object named Student
console.log("-------------------------------Object Declaration-------------------------");
const student = {
    firstName: 'Nahom',
    lastName: 'Birhane',
    course: 'wap 202409',

    printInfo: function(){
        console.log(`${this.firstName} ${this.lastName}`);
        return `${this.firstName} ${this.lastName}`;
    }

}
console.log(student.printInfo());

// Function Declaration
console.log("--------------------Function Expration && Declaration---------------------");
const factofn = function fact(n){
    return n < 2 ? 1 : n*fact(n-1);
}

console.log("Here is the result: " + factofn(5));
console.log("Here is the result: " + factofn(1));
console.log("Here is the result: " + factofn(2));

const arr = ["Nahom",2,3,4,5];
console.log(arr);

let arr1 = new Array(5).fill(0).map((v, i)=>i+1);

// arr3 = arr3.map((value, index) => index+1);
console.log(arr1);

arr1.push("Birhane");
arr1.push("nahom");
arr1.unshift("Jhon");
arr1.shift();
console.log(arr1);
arr1.pop("James");
console.log(arr1);


