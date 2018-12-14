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
    '2, 3, 1, 5, 6',
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  let arr = [];
  let inputArr = gets().split(', ');
  
  for(let i = 0; i < inputArr.length; i++){
      arr.push(Number(inputArr[i]));
  }

  let result = '';
  for(let i = arr.length-1; i > 0; i--){
      result += arr[i] + ', ';  
  }
  result += arr[0];
  print(result);
