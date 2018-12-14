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
    '0,0,0,5,0,3,2,3'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  function countZeros(numbers){
      let count = 0;
      for (const num of numbers) {
          if(num === 0){
              count++;
          }
      }
      return count;
  }

  let arr = [];
  let inputArr = gets().split(',');
  
  for(let i = 0; i < inputArr.length; i++){
      arr.push(Number(inputArr[i]));
  }

  const zeroCount = countZeros(arr);

  let result = [];
  for (const element of arr) {
      if(element !== 0){
          result.push(element);
      }
  }
  for (let i = 0; i < zeroCount; i++) {
      result.push(0);
  }
  let output = '';
  for(let i = 0; i < result.length-1; i++){
      output += result[i]+','
  }
  output += result[result.length-1];
  print(output);
