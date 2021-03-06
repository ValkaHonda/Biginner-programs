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
    '10',
    '10'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
//   const price = Number(gets());
//   const givinMoney = Number(gets());
let a = Number(gets()).toFixed(2);
let b = Number(gets()).toFixed(2);

  print((a*0.1 + b*0.25).toFixed(2));