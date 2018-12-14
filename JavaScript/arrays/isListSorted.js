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
    '3',
    '1,2,3,4,5',
    '1,2,8,9,9',
    '1,2,2,3,2'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  function isSorted(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr[i-1] > arr[i]){
            return false;
        }
    }
    return true;
  }

  const n = Number(gets());
  let arr = [];
  let result = [];
  for (let index = 0; index < n; index++) {    
    arr = [];
    let inputArr = gets().split(',');
    for(let i = 0; i < inputArr.length; i++){
        arr.push(Number(inputArr[i]));
    }
    result.push(isSorted(arr));
  }

  for (const element of result) {
      print(element);
  }

