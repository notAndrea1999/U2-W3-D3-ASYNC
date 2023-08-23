// for (let i = 0; i < 10000000000; i++) {}
// for loop è sincrono e bloccante, fintanto che non finsice il conosole log successivo non avrà possibilità di eseguirsi.
// console.log("fine del for loop, ci metterà molto tempo a vedersi");

const myArr = [1, 5, 18, 15];

const forEach = (callback) => {
  for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    callback(element);
  }
};

forEach((num) => console.log("il numero uscito è: " + num));

const map = (callback) => {
  const mappedElems = [];

  for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    mappedElems.push(callback(element));
  }

  return mappedElems;
};

const mapped = map((num) => num * 2);
const mapped2 = map((num) => `<li>${num}</li>`);

console.log(mapped, mapped2);

const filter = (callback) => {
  const filteredElems = [];

  for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];

    if (callback(element)) {
      filteredElems.push(element);
    }
  }

  return filteredElems;
};

const filtered = filter((num) => num < 16);
console.log(filtered);
