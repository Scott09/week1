const sumatob = (a, b) => {
  
  let sum = 0;
  if (a <= b) {
    sum += a + sumatob(a + 1, b);
  }
  return sum;
};


console.log(sumatob(3, 7));





