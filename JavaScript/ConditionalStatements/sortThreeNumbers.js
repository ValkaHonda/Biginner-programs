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
    '-0.5',
    '-10',
    '0',
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  let a = Number(gets());
  let b = Number(gets());
  let c = Number(gets());
  
  if( a >= b && a >= c){
      print(a + ' ' + Math.max(b,c) + ' ' + Math.min(b,c));
  }
  else if( b >= a && b >= c){
    print(b + ' ' + Math.max(a,c) + ' ' + Math.min(a,c));
  }
  else if( c >= b && c >= a){
    print(c + ' ' + Math.max(b,a) + ' ' + Math.min(b,a));
  }
  

 
  
  