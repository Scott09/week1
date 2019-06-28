const sumToOne = (n) => {
  let sum = 0;
  if (n > 0) {
    sum += n + sumToOne(n-1);
  }
  return sum;
}

console.log(sumToOne(4));