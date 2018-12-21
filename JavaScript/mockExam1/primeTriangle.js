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
    '27'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4


  const n = +gets();
  let primes = [];

  for (let i = 0; i <= n; i++) {
      if(isPrime(i)){
        primes.push(i);
      }
  }
  let printLine = (num) => {
      let output = [];
    for (let i = 1; i <= num; i++) {
        if(isPrime(i)){
            output.push(1);
        } else{
            output.push(0);
        }
    }
    print(output.join(''));
  };

  primes.forEach(
      element => printLine(element)
  );


  function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 0;
  }
