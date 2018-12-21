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
    '-12400000000000000000000000000000000000.13'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  function calculateSum(realPart,decimalPart=undefined){
      let realNums = realPart.map(
          (element) => Number(element)
      );
      let decNums;
      if(decimalPart){
        decNums = decimalPart.map(
            (element) => Number(element)
        );
      }
      let sum = realNums.reduce(
          (accumulator, currentValue) => accumulator + currentValue
      );
      if(decimalPart != undefined){
          
        sum += decNums.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        );

      }

      return sum;
  }

  let n = gets();
  let realPart = [];
  let decimalPart = [];
  let holeNumber = n.split('.');
  realPart = holeNumber[0].split('');
  realPart = realPart.filter(
      element => element !== '-'
  );
  if(holeNumber.length > 1){
      decimalPart = holeNumber[1].split('');
  }
  let sum = 0;
  if(decimalPart.length > 0){
      sum = Number(calculateSum(realPart,decimalPart));
    } else {
        sum = Number(calculateSum(realPart));
  }

  while(sum>9){
      sum = Number(calculateSum(sum.toString().split('')));
  }
  print(sum);