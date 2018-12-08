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
    'kek'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  let input = gets();
  let number;
  if(!isNaN(input)){
    number = Number(input);
    switch (number) {
        case 0:
            print('zero');
            break;
        case 1:
          print('one');
          break;
        case 2:
            print('two');
          break;
        case 3:
        print('three');
          break;
        case 4:
        print('four');
          break;
        case 5:
        print('five');
          break;
        case 6:
        print('six');
          break;
        case  7:
        print('seven');
        break;
        case  8:
        print('eight');
        break;
        case  9:
        print('nine');
        break;
         default:
         print("not a digit");
      }
  } else {
      print('not a digit');
  }


