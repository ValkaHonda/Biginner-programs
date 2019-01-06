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
    '1 2 3 4 5'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4


  let inputLine = gets();

  print(inputLine);

  let strArr = inputLine.split(' ');

  print(strArr);

  let numbers = strArr.map(
    element => Number(element)
  ).filter(
    element => element % 2 === 0
  ).forEach(element => {
    print(element);
  });

 





