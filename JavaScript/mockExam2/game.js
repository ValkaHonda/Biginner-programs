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
      '111'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  let digits = gets().split('').map((currentDigit)=>Number(currentDigit));
//   print(digits);

  let case1 = digits[0] + digits[1] + digits[2];
  let case2 = digits[0] + digits[1] * digits[2];
  let case3 = digits[0] * digits[1] + digits[2];
  let case4 = digits[0] * digits[1] * digits[2];

  print(Math.max(case1,case2,case3,case3,case4));