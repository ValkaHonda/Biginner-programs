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
    '5',
    '2',
    '1',
    '1',
    '6',
    '3'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  const n = Number(gets());
  let arr = [];
  for(let i = 0; i < n; i++){
    arr.push(Number(gets()));
  }
  arr.sort(
      (first,second)=>second-first 
    );
   print(`${arr[0]}, ${arr[1]} and ${arr[2]}`)

