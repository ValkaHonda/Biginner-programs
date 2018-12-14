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
  function calculeteAvg(arr){
      let sum = 0;
      for (const iterator of arr) {
          sum += iterator;
      }
      return sum/arr.length;
  }



  let arr = [];
  let inputArr = gets().split(',');
  
  for(let i = 0; i < inputArr.length; i++){
      arr.push(Number(inputArr[i]));
  }

  const avg = calculeteAvg(arr);
  let result1 = [];
  let result2 = [];

  for (const element of arr) {
      if(element < avg){
          result1.push(element);
      }
  }

  for (const element of arr) {
      if(element > avg){
          result2.push(element);
      }
  }

  let output1 = '';
  let output2 = '';
  for (let i = 0; i < result1.length - 1; i++) {
      output1 += result1[i] + ',';
  }
  output1 += result1[result1.length-1];
  
  for (let i = 0; i < result2.length - 1; i++) {
      output2 += result2[i] + ',';
  }
  output2 += result2[result2.length-1];

  print("avg: " + avg.toFixed(2));
  print("below: " + output1);
  print("above: " + output2);



