// Exercise-2
console.log( "============================// Exercise-2 //=======================");

const isPrime = (n: number): Promise<{ prime: boolean }> => {
  return new Promise((resolve, reject) => {
    if (n <= 1) {
      return reject({ prime: false });
    }

    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) {
        return reject({ prime: false });
      }
    }

    resolve({ prime: true });
  });
};

console.log("start");

(async () => {
  try {
    const result = await isPrime(7);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();

console.log("end");
