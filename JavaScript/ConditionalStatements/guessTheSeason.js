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
    'June',
    '24',
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  let month = gets();
  let day = Number(gets());


  switch (month) {
    case 'January':
        print('Winter');
      break;
    case 'February':
        print('Winter');
      break;
    case 'March':
        if(day < 20){
            print('Winter');
        } else {
            print('Spring');
        }
      break;
    case 'April':
        print('Spring');
      break;
    case 'May':
        print('Spring');
      break;
    case 'June':
        if(day < 21){
            print('Spring');
        } else {
            print('Summer');
        }
      break;
    case 'July':
        print('Summer');
      break;
    case 'August':
        print('Summer');
       break;
    case 'September': 
        if(day < 22){
            print('Summer');
        } else {
            print('Autumn');
        }
        break;
    case 'October': 
        print('Autumn');
        break;
    case 'November':
        print('Autumn');
        break;
    case 'December':    
        if(day < 21){
            print('Autumn');
        } else {
            print('Winter');
        }
        break;
  }
  

 
  
  