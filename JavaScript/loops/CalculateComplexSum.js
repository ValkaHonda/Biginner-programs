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
    '3',
    '2'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  let n = Number(gets());
  let x = Number(gets());

  let result = 1;

  for(let i = 1; i <= n; i++){
      let factorial = Number(calculateFactorial(i));
      let temp = (factorial / (Math.pow(x,i)));
      result += temp;
  }

  print(result.toFixed(5));

  function calculateFactorial(number){
    let factorial = 1;  
    for(let i = 1; i <= number; i++){
        factorial *= i;
      }
      return factorial;
  }