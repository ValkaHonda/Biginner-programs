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
    '4' // This is the first line from the test.
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  const a = Number(gets());
  let b;
  if (a <= 2){
    b = a*10;
  } else {
    b = a - 2;
    b = b * 4;
    b = b + 20;
  }
  
  print(b);
  