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
    '3,-12,0,0,13,5,1,0,-2',
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  let arr = [];
  let inputArr = gets().split(',');
  
  for(let i = 0; i < inputArr.length; i++){
      arr.push(Number(inputArr[i]));
  }

  let result = [];
  for(const iterator of arr){
      if(iterator < 0){
          result.push(iterator)
      }
  }
  for(const iterator of arr){
      if(iterator === 0){
          result.push(iterator)
      }
  }
  for(const iterator of arr){
      if(iterator > 0){
          result.push(iterator)
      }
  }

  let output = '';
  for(let i = 0; i < result.length-1; i++){
      output += result[i]+','
  }
  output += result[result.length-1];
  print(output);