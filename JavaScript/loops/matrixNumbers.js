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
    '2'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  let n = Number(gets());

  let counter = 1;
  for(let i = 0; i < n; i++){
      let output = "";
      let currentCounter = counter;
      for(let j = 0; j < n; j++){
          output += currentCounter
          output += " ";
          currentCounter++;
      }
      print(output);
      counter++;
  }