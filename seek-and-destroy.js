function destroyer(arr) {
  let arrayOne = arguments[0];
  let arrayFinal =[];
  let arrayOfDuplicates= [];

  for (let i=1; i<arguments.length; i++) {
    arrayOfDuplicates.push(arguments[i]);
    }
    for (let i=0; i<arrayOne.length; i++) {
      if (arrayOfDuplicates.includes(arrayOne[i]) === false) {
        arrayFinal.push(arrayOne[i]);
      }
    }
    return arrayFinal;
  }

let result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(result);