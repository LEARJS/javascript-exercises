function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
  }
  const sumAll = function(num1,num2) {
      result= 0;
      if (isNaN(num1) || typeof num1 === 'string' || isNaN(num2) || typeof num2 === 'string' || num1 <= 0 || num2 <= 0){
          return 'ERROR'
      } else {
          if (num1<num2){ //sumAll(3, 10)
              for (let i = num1; i <= num2; i++) {
                  result += i;
              }
              return result;
  
          } else if (num1> num2){ //sumAll(10, 3)
              for (let i = num2; i <= num1; i++) {
                  result += i;
                  //console.log(result)
              }
              return result;
          }
      }
  
  };


// Do not edit below this line
module.exports = sumAll;
