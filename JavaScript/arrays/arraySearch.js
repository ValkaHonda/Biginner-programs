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
    '1,2,3,4,5'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  function containsElement(arr, el){
      for (const element of arr) {
          if(element == el){
              return true;
          }
      }
      return false;
  }

  let arr = [];
  let inputArr = gets().split(',');
  
  for(let i = 0; i < inputArr.length; i++){
      arr.push(Number(inputArr[i]));
  }

  const n = arr.length;
  let result = [];
  for (let i = 1; i <= n; i++) {
      if(!containsElement(arr,i)){
        result.push(i);
      }
  }
  let output = '';
  for(let i = 0; i < result.length-1; i++){
      output += result[i]+','
  }
if(result.length > 0){
       output += result[result.length-1];
       print(output);
}
