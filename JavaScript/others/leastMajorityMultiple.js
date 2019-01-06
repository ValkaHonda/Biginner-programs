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
    '1',
    '2',
    '3',
    '4',
    '5'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  const num1 = +gets();
  const num2 = +gets();
  const num3 = +gets();
  const num4 = +gets();
  const num5 = +gets();

  let number = 1;
  let numbersCount = 1;

  for (let i = 1; i < 1000000; i++) {
    let counter = 0;  
    if(i % num1 == 0){
        counter++;
    }
    if(i % num2 == 0){
        counter++;
    }
    if(i % num3 == 0){
        counter++;
    }
    if(i % num4 == 0){
        counter++;
    }
    if(i % num5 == 0){
        counter++;
    }
    if(counter > numbersCount){
        number = i;
        numbersCount = counter;
    }
    if(numbersCount >= 3){
        break;
    }
  }
  print(number);