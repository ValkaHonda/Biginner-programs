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
      '3',
      '1',
      '1',
      '1'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4


  let N = +gets();
  let gSpeed = +gets();
  let gLatency = +gets();
  let pSpeed = +gets();
  let pLatency = +gets();


  let goshoResult = (N*gSpeed) + gLatency + gLatency;

  // print(goshoResult);

  let peshoResult = (N*pSpeed) + pLatency + pLatency;

  // print(peshoResult);

  if(goshoResult < peshoResult){
    print('George');
  } else if(goshoResult === peshoResult){
    print('Draw');
  } else {
    print('Peter');
  }