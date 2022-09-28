function sumPrimes(num) {
  let sum =0;
  let tmp = [];
  
  if(num<2){
    return 0;
  }
  else{
    for(let i=2; i<=num; i++){
      if(isPrime(i)===true){
        tmp.push(i);
      }
    }
  }
  
  for(let i=0;i<tmp.length;i++){
    sum+=tmp[i];
    
  }
  return sum;
}
function isPrime(num){
  
  for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
            
        }
    }
  return true;
}

let result=sumPrimes(12);
console.log(result);