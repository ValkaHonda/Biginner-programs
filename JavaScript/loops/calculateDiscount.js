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
    '2',
    '50',
    '40'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  const n = Number(gets());
  let arr = [];
  for(let i = 0; i < n; i++){
      arr.push(Number(gets()));
  }
  for(let i = 0; i < n; i++){
      print((arr[i] - (arr[i]*65/100)).toFixed(2));
  }