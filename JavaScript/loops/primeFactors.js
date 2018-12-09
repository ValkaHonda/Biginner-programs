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
    '100'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  function primeFactors(n) { 
        // Print the number of 2s that divide n 
        let result = '';
        while (n%2==0) 
        { 
            result += '2\n' 
            n /= 2; 
        } 
  
        // n must be odd at this point.  So we can 
        // skip one element (Note i = i +2) 
        for (let i = 3; i <= Math.sqrt(n); i+= 2) 
        { 
            // While i divides n, print i and divide n 
            while (n%i == 0) 
            { 
                
                result += (i + '\n');
                n /= i; 
            } 
        } 
  
        // This condition is to handle the case whien 
        // n is a prime number greater than 2 
        if (n > 2) 
            result += n;
        return result;
    } 

  function isPrime(num) {
    let sqrtnum=Math.floor(Math.sqrt(num));
      let prime = num != 1;
      for(let i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }

  const number = Number(gets());

  print(primeFactors(number));

  /*
  if(!isPrime(number)){

  } else {
      print(number);
  }*/