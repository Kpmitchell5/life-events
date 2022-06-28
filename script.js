const myInformation = {
  name: "Kevin Mitchell",
  age: 30,
  birthday: "May 5th",
  pineapplePizza: false,
  lifeEvents: [
    "I was born in Youngstown.",
    "I went to UWF.",
    "I got married.",
    "I had a son.",
  ],
};

console.log(myInformation);

if (myInformation.pineapplePizza) {
  console.log(
    `My name is ${myInformation.name} and I like pineapples on pizza. I am currently ${myInformation.age} years old and my birthday is on ${myInformation.birthday}.`
  );
} else {
  console.log(
    `My name is ${myInformation.name} and i'm not into pineapples on pizza. I am currently ${myInformation.age} years old and my birthday is on ${myInformation.birthday}.`
  );
}

for (let i = 0; i < myInformation.lifeEvents.length; i++) {
  console.log(myInformation.lifeEvents[i]);
}

let counter = 0;
let randomNumber = Math.floor(Math.random(counter) * 10) + 1;

while (randomNumber != 5) {
  counter++;
  console.log(`${randomNumber} !== 5`);
}

// if (randomNumber != 5) {
//   counter++;
//   console.log(`${randomNumber} !== 5`);
// } else {
//   counter++;
//   console.log(
//     `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
//   );
// }
