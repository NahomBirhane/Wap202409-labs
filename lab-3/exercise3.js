// Exercise 3: Display countries by thier name length and that contains an 'a'.

const getNewArray = function(arr){
    return arr.filter(countries => countries.length > 5 && countries.includes('a')); //Functional Programming
}

const countries = ['China','Eritrea','Ethipoia','Canada','United Kingdom'];
console.log(getNewArray(countries));


