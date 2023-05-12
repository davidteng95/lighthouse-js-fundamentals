function howManyHundreds(num) {
  if (num % 100 !== 0) {
    return Math.floor(num / 100);
  } else if (num % 100 === 0) {
    return num / 100;
  }
}
console.log(howManyHundreds(1000));
console.log(howManyHundreds(123));
console.log(howManyHundreds(0));
