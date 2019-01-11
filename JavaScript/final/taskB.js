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
      '363'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  
let numbers = gets();
let digits = numbers.split('');
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < digits.length; i++) {
  if(Number(digits[i] % 2 === 0)){
    evenNumbers.push(Number(digits[i]))
  } else {
    oddNumbers.push(Number(digits[i]))
  }
}

// print(evenNumbers);
// print(oddNumbers);


let evenSum = 0;
let oddSum = 0;

for(let i = 0; i < evenNumbers.length; i++){
  evenSum += Number(evenNumbers[i]);
}


for(let i = 0; i < oddNumbers.length; i++){
  oddSum += Number(oddNumbers[i]);
}


// print(evenSum);
// print(oddSum);


if(evenSum > oddSum){
  print(`${evenSum} energy drinks`);
} else if (evenSum === oddSum){
  print(`${evenSum} of both`);
} else {
  print(`${oddSum} cups of coffee`);
}
