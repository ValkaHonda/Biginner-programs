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
    '1000'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

const deposit = Number(gets());
const firstYear = deposit + deposit*5/100;
const secondYear = firstYear + firstYear*5/100;
const thirdYear = secondYear + secondYear*5/100;

print(firstYear.toFixed(2));
print(secondYear.toFixed(2));
print(thirdYear.toFixed(2));