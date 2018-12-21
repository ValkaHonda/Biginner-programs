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
      '396'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  let input = gets();
  let sum = 0;
  while(input){
    const digits = input.split('');
    const firstDigit = +digits[0];
    const secondDigit = +digits[1];
    const thirdDigit = +digits[2];
    const edgeDigitsSum = firstDigit + thirdDigit; 
    if(secondDigit == edgeDigitsSum){
        sum += Number(input);
    }
    input = gets();
  }
  print(sum);