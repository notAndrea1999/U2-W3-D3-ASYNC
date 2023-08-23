const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("SUCCESS!"), 2000);
  //   setTimeout(() => reject("FAILED!"), 1000);
  setTimeout(() => reject("FAILED!"), 10000);
});

console.log(myPromise); // leggere una promise in maniera sincrona produrrà in console: Promise<pending> (quindi nessun dato utilizzabile)

myPromise
  .then((successMessage) => console.log("Outcome positivo: " + successMessage)) // then è sempre associato ad un outcome positivo
  .catch((rejectMessage) => console.log("Outcome negativo: " + rejectMessage)); // il catch raccoglie un possibile outcome negativo

const rollTheDice = () =>
  new Promise((resolve, reject) => {
    const randNum = Math.floor(Math.random() * 100);

    setTimeout(() => {
      if (randNum > 50) {
        resolve("We've got a winner, the number is: " + randNum);
      } else {
        reject("You lose. the number is too low: " + randNum);
      }
    }, 1500);
  });

rollTheDice()
  .then((resolveMessage) => console.log(resolveMessage))
  .catch((rejectMessage) => console.log(rejectMessage));
rollTheDice()
  .then((resolveMessage) => console.log(resolveMessage))
  .catch((rejectMessage) => console.log(rejectMessage));
rollTheDice()
  .then((resolveMessage) => console.log(resolveMessage))
  .catch((rejectMessage) => console.log(rejectMessage));
rollTheDice()
  .then((resolveMessage) => console.log(resolveMessage))
  .catch((rejectMessage) => console.log(rejectMessage));
