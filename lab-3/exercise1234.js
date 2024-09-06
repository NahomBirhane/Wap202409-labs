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


// Exercise 2: 
function sum(array, limit){
    // let totalSum = 0; 
    // for (let e of array){
    //     if(e > limit){
    //         totalSum += e;
    //     }
    // }
    // return totalSum;
    return array.filter(f => f > limit).reduce((accu, curr) => accu + curr, 0); //Functional Programming
}
const result = sum([10,20,5,30,11,40], 20);
const result1 = sum([10,-20,5,-30,11,-40], 20);
console.log("Sum of Array Elements Greater Than 20 is ",`${result}`);
console.log("Sum of Array Elements Greater Than 20 is ",`${result1}`);


// Exercise 3: Display countries by thier name length and that contains an 'a'.

const getNewArray = function(arr){
    return arr.filter(countries => countries.length > 5 && countries.includes('a')); //Functional Programming
}

const countries = ['China','Eritrea','Ethipoia','Canada','United Kingdom'];
console.log(getNewArray(countries));


// Exercise 4: Display all strings to upper case with REDUCE > 5.

const getNewArrayWithUpperCase = function(countries){

    //Functional Programming
    return countries.reduce((accu, cur, ) => {
        if(cur.length > 5){
            accu.push(cur.toUpperCase());
        }
        return accu;
    }, []); 

}

const countriesUpper = ['China','Eritrea','Ethipoia','Canada','United Kingdom'];
console.log(getNewArrayWithUpperCase(countriesUpper));



