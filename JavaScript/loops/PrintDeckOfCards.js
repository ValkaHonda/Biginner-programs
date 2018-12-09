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
    'A'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  const cardSign = gets();
//   print(cardSign);
  if(cardSign !== 'a' && cardSign !== 'A'){
      for(let i = 2; i <= cardSign; i++){
          print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
      }
  } else {
    for(let i = 2; i <= 10; i++){
        print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
    }
    print('A of spades, A of clubs, A of hearts, A of diamonds');
  }
