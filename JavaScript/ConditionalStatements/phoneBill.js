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
    '18',
    '44'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  const msgCounter = Number(gets());
  const minutes = Number(gets());

  let price = 12;
  let additionalPrice = 0;
  let additionalMsgs = 0;
  let additionalMsgsPrice = 0;
  let additionalMinutes = 0;
  let additionalMinutesPrice = 0;
  if(msgCounter > 20){
      additionalMsgs = msgCounter - 20;
      additionalMsgsPrice = additionalMsgs * 0.06;
  }
  if(minutes > 60){
    additionalMinutes = minutes - 60;
    additionalMinutesPrice = additionalMinutes * 0.10;
  }
  additionalPrice = additionalMinutesPrice + additionalMsgsPrice;
  let salesTax = 20/100*additionalPrice;

  print(`${additionalMsgs} additional messages for ${additionalMsgsPrice.toFixed(2)} levas`);
  print(`${additionalMinutes} additional minutes for ${additionalMinutesPrice.toFixed(2)} levas`);
  print(salesTax.toFixed(2) +' additional taxes');
  price += additionalPrice + salesTax;
  print(price.toFixed(2) + ' total bill');
