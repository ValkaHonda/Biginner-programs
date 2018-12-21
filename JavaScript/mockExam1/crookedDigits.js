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
    '1020340567.89'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  function calculateSum(realPart,decimalPart){
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

  let n = Number(gets());
  n = Math.abs(n);
  let realPart = [];
  let decimalPart = [];
  let holeNumber = n.toString().split('.');
  realPart = holeNumber[0].split('');
  if(holeNumber.length > 1){
      decimalPart = holeNumber[1].split('');
  }

  if(decimalPart.length > 0){
      n = calculateSum(realPart,decimalPart);
    } else {
        n = calculateSum(realPart);
  }

  while(n>9){
      n = calculateSum(n.toString().split(''));
  }
  print(n);