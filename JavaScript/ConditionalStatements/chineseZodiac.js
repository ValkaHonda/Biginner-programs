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
    '1975'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  let year = Number(gets());

  if(year < 2000){
    while(year < 2000){
        year += 12;
    }
  } else if (year > 2011){
    while(year > 2011){
        year -= 12;
    }
  }
  switch (year){
    case 2000:
        print('Dragon');
        break;
    case 2001:
        print('Snake');
        break;
    case 2002:
        print('Horse');
        break;
    case 2003:
        print('Sheep');
        break;
    case 2004:
        print('Monkey');
        break;
    case 2005:
        print('Rooster');
        break;
    case 2006:
        print('Dog');
        break;
    case 2007:
        print('Pig');
        break;
    case 2008:
        print('Rat');
        break;
    case 2009:
        print('Ox');
        break;
    case 2010:
        print('Tiger');
        break;
    case 2011:
        print('Hare');
        break;
  }



  


