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
    '4',
    '3',
    '5',
    '5',
    '5'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  const n = Number(gets());
  let numbers = [];
  for (let index = 0; index < n; index++) {
      let number = Number(gets());
      numbers.push(number);
  }

  let sum = 0;
  let max = numbers[0];
  let min = numbers[0];
  for (let index = 0; index < numbers.length; index++) {
      if(max < numbers[index]){
          max = numbers[index];
      }
      if(min > numbers[index]){
          min = numbers[index];
      }
      sum += numbers[index];
  }
  print('min='+(min).toFixed(2));
  print('max='+(max).toFixed(2));
  print('sum='+(sum).toFixed(2));
  print('avg='+(sum / numbers.length).toFixed(2));
  