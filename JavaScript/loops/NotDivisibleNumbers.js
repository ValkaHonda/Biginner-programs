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
    '10'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  const n = Number(gets());
  let result = "";
  for(let i = 1; i <= n; i++){
      if(i % 3 != 0 && i % 7 != 0){
          result += i;
          result += " ";
      }
  }

  print(result);