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

const countries = ['China','Eritrea','Ethipoia','Canada','United Kingdom'];
console.log(getNewArrayWithUpperCase(countries));


