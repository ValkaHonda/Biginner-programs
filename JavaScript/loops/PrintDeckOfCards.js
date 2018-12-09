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
    'J'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  const cardSign = gets();
//   print(cardSign);
function printCard(symbol){
  print(`${symbol} of spades, ${symbol} of clubs, ${symbol} of hearts, ${symbol} of diamonds`);

}
  let cardDatabase = ['J','Q','K','A'];
  if(!isNaN(cardSign)){
      for(let i = 2; i <= cardSign; i++){
          printCard(i);
      }
  } else {
    for(let i = 2; i <= 10; i++){
        printCard(i);
    }
    let x;
    for(x=0; x < cardDatabase.length; x++){
      if(cardSign === cardDatabase[x]){
        break;
      }
    }
    // print(x);
    for(let i = 0; i <= x; i++){
      printCard(cardDatabase[i]);
    }

  }

