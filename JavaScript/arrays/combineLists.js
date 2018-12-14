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
    '2,3,1',
    '5,2,3'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  let arr1 = [];
  let inputArr = gets().split(',');

  for(let i = 0; i < inputArr.length; i++){
      arr1.push(Number(inputArr[i]));
  }

  let arr2 = [];
  inputArr = gets().split(',');

  for(let i = 0; i < inputArr.length; i++){
    arr2.push(Number(inputArr[i]));
  }
  
  let result = '';
  for(let i = 0; i < arr1.length-1; i++){
    result += arr1[i] + ',' +  arr2[i] + ',';
  }
  result += arr1[arr1.length-1] + ',' + arr2[arr2.length-1];

  print(result);

  



  