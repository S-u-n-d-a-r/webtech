let players = [
  {
    name: "virat",
    jersyno: 18,
    age: 37,
  },
  {
    name: "rohit",
    jersyno: 38,
    age: 39,
  },
  {
    name: "dhoni",
    jersyno: 45,
    age: 7,
  },
  {
    name: "dk",
    jersyno: 19,
    age: 41,
  },
];

console.log(players);
console.log("---------------------------------------------------------------");

players.map((player) => {
  console.log(player);
});

console.log("---------------------------------------------------------------");

let totalage = players.reduce((acc, player) => {
  return acc + player.age;
}, 0);

let avgAge = totalage / players.length;

console.log(totalage);
console.log(avgAge);

console.log("---------------------------------------------------------------");

players.map((player) => {
  console.log(player.jersyno);
});

console.log("---------------------------------------------------------------");
