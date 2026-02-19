//math.js
//v6
//calc added
//evenTester
//primeCheaker
//prime factor finder






function calc(a1,b1, operator){
  let result = 0
  let a = Number(a1)
  let b = Number(b1)
    switch (operator) {
      case "+":
        result = a + b
        break;
      case "*":
        result = a * b
        break;
      case "-":
        result = a - b
        break;
      case "/":
        if(b===0){
          result = "Cant divide by Zero!"
        }
        else{
          result = a / b
        }
        break;
      case "%":
        if(b===0){
          result = "Cant divide by Zero!"
        }
        else{
          result = a % b
        }
        break;
      default:
        result = "Enter valid operator"
    }
    
    return result
}
function isEven(n1){
  let n = Number(n1)
  switch (calc(n, 2, '%')) {
    case 0:
       return "It's even"
      break;
    case 1:
       return "It's odd"
      break;
    default:
      return "Invalid input\n input must be a positive number "
  }
}
function isPrime(n1){
  if(Number(n1)>1){
  let n = Number(n1)
  let m = n**(.5)
  let F =[]
  let Factors =[]
  for(let i=1;i<=m;i++){
    if(n % i === 0 && i!=n && i!= 1){
      F.push(i);
    }else{
      
    }
  }
      if(F.length ===0){
      return true
    }else{
      return false
    }
}else{
  return "Enter a positive number to check if it's prime"
}}

function factors(n1){
  let n = Number(n1)
  let m = n**(.5)
  let F =[]
  let Factors =[]
  if(n != m && n > 0){
    for(let i=1;i<=m;i++){
    if(n % i === 0 && i!=n && i!= 1){
      F.push(i);
    }else{}
  }
  for(let j=0;j<F.length;j++){
        if(isPrime(F[j])){
          Factors.push(F[j])
        }else{}
        
      }
      return `Prime factors of ${n} are ${Factors}`
  }
    else{
      return "Enter a positive number to find Prime factors"
    }
}
console.log(isPrime(2))    // prime → should return true
console.log(isPrime(3))    // prime → should return true
console.log(isPrime(4))    // not prime → should show prime factors
console.log(factor(12))   // not prime → should show prime factors
console.log(isPrime(17))   // prime → should return true
console.log(isPrime(18))   // not prime → should show prime factors
console.log(isPrime(1))    // not prime → edge case
console.log(factor(0))    // not prime → edge case
console.log(isPrime(-7))   // negative → should handle