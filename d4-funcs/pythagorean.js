const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map( data =>  Math.sqrt( (Math.pow(data.x, 2)) + Math.pow(data.y, 2)));

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);


