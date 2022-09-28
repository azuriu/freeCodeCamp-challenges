function sumAll(arr) {
  var n;
  if (arr[0]>arr[1])
  {
    n = arr[0] - arr[1] + 1
  }
  else{
    n = arr[1] - arr[0] + 1
  }

  var sum = (n/2)*(arr[0]+arr[1])
  return sum;
}

console.log(sumAll([1, 4]));