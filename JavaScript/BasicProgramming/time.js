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
    '11',
    '40'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  const days = Number(gets()); 
//   print(days);
  const hours = Number(gets()); 
//   print(hours);
  const minutes = Number(gets()); 
//   print(minutes);
  const seconds = Number(gets()); 
//   print(seconds);

  print(seconds + (minutes*60) + (hours*60*60) + (days*24*60*60));