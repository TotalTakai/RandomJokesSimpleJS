const firstPart = [
  "You Are",
  "He is",
  "I Am",
  "She is",
  "They Are",
  "Your father is",
  "Your Mother Is",
  "Your whole family is",
  "We Are",
];
const secondPart = [
  "a son of",
  "The Father of",
  "a Part of",
  "a Creature of",
  "",
];

const thirdPart = [
  "an Ostrich",
  "a Weird Person",
  "Habits",
  "The Boring, Oregon",
  "The Bat Cave",
  "a Me!",
  "a Christian Bale",
  "The True Messiah!",
  "an Earth 2.0",
];

console.log(
  `${firstPart[Math.floor(Math.random() * firstPart.length)]} ${
    secondPart[Math.floor(Math.random() * secondPart.length)]
  } ${thirdPart[Math.floor(Math.random() * thirdPart.length)]}`
);
