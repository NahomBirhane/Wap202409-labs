// Exercise-1
console.log(
  "============================// Exercise-1 //======================="
);

class Meditation {
  time: number;
  constructor(time: number) {
    this.time = time;
  }

  start() {
    for (let i = this.time; i > 0; i--) {
      setTimeout(() => {
        console.log(i);
        if (i === 1) {
          console.log("Jay Guru Dev");
        }
      }, (this.time - i + 1) * 1000);
    }
  }
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log("Start meditation");
