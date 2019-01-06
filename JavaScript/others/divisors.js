const getGets = (arr) => {
    let index = 0;
  
    return () => {
      const toReturn = arr[index];
      index += 1;
      return toReturn;
    };
  };
  
  // This is the place where you must place your test data
  const test = [
    '8 30'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1 && num !== 0;
  }

  const input = gets().split(' ');
  const firstNum = +(input[0]);
  const secondNum = +(input[1]);

  const limit = Math.min(firstNum,secondNum);

  let result = [];
  for (let i = 2; i <= limit; i++) {
      if(firstNum % i == 0 && secondNum % i == 0 && isPrime(i)){
          result += i + ' ';
      }
  }
  if(result.length > 0){
      print(result);
  } else {
      print(-1);
  }
