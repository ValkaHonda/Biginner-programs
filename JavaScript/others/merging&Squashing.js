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
    '5',
    '11',
    '22',
    '11',
    '22',
    '11'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  const n = +gets();
  let nums = [];
  for (let i = 0; i < n; i++) {
      nums.push(+gets());
  }

  let mergedNumbers = '';
  let squashedNumbers = '';

  for (let i = 0; i < n-1; i++) {
    mergedNumbers += merge(nums[i],nums[i+1]) + ' ';    
    squashedNumbers += squashe(nums[i],nums[i+1]) + ' ';    
  }

  print(mergedNumbers);
  print(squashedNumbers);

  function merge(num1,num2){
      const str1 = num1.toString();
      const str2 = num2.toString();
      return str1[1] + str2[0];
  }

  function squashe(num1,num2){
    const str1 = num1.toString();
    const str2 = num2.toString();

    let middleDigit = Number(str1[1])+Number(str2[0]);
    let strMiddle = middleDigit.toString();
    let middle = strMiddle[strMiddle.length-1];





    return str1[0] + middle + str2[1];
  }
