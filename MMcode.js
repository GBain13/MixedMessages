
let youAre = ["You are Cancer", "You are Taurus", "You are Sagittarius", "You are Virgo"];
let whichMeans = ["You are sensitive", "You are stubborn", "You are adventurous", "You are analytical"];
let conditional = ["Unless other indicators contradict this", "Which is amplified by your other placements"];
 
const randomElement1 = youAre[Math.floor(Math.random() * youAre.length)];
const randomElement2 = whichMeans[Math.floor(Math.random() * whichMeans.length)];
const randomElement3 = conditional[Math.floor(Math.random() * conditional.length)];
console.log(randomElement1, randomElement2, randomElement3);
