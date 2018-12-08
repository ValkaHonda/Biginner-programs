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
    '2346'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  let input = Number(gets());

  let sum = 0;
  sum += input%10;

  input = Math.floor(input/10);

  sum += input%10;

  input = Math.floor(input/10);

  sum += input%10;

  input = Math.floor(input/10);

  sum += input%10;
  
  print(sum);
