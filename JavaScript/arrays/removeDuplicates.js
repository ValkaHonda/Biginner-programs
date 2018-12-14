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
    'c,c,a,b,a,a,b,c'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  function isUniqueElement(arr,element){
      for (const iterator of arr) {
          if(iterator === element){
              return false;
          }
      }
      return true;
  }

  let arr = [];
  let inputArr = gets().split(',');
  
  for(let i = 0; i < inputArr.length; i++){
      arr.push(inputArr[i]);
  }
  
  let result = [];
  for(let i = 0; i < arr.length; i++){
      if(isUniqueElement(result,arr[i])){
          result.push(arr[i]);
      }
  }
  let output = '';
  for(let i = 0; i < result.length-1; i++){
      output += result[i]+','
  }
  output += result[result.length-1];
  print(output);