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
  //functions
  function calculateArrProduct(arr){
    let product = 1;  
    for(let i = 0; i < arr.length; i++){
        product *= arr[i];
     }
     return product;
  }
  const n = Number(gets());
  let oddArr = [];
  let evenArr = [];
  for(let i = 1; i <= n; i++){
      if(i % 2 === 0){
          evenArr.push(Number(gets()));
      } else {
          oddArr.push(Number(gets()));
      }
  }
  const evenProduct = calculateArrProduct(evenArr);
  // print(evenArr);
  const oddProduct = calculateArrProduct(oddArr);
  // print(oddArr);
  if(evenProduct === oddProduct){
    print('yes ' + evenProduct);
  } else {
    print('no '+ oddProduct + ' ' + evenProduct);
  }