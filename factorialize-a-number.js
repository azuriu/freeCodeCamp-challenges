function factorialize(num) {
  let output = 1;
  for (let i=1; i<=num; i++) {
    output *= i;
  }
  return output;
}

factorialize(5);