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
