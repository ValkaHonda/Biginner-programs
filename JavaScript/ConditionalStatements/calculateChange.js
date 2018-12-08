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
    '1.92',
    '5'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  const price = Number(gets());
  const givinMoney = Number(gets());

let n = givinMoney - price;
// print('expected: ' + n);

let strArr = n = (n + "").split(".");

let a = Number(strArr[0]);
let decimalPart = Number(strArr[1]);

if (a > 0){
    print(a + ' x 1 lev');
}

let fifty = Math.floor(decimalPart / 50);
if(fifty > 0){
    print(fifty+" x 50 stotinki");
    decimalPart -= 50;
}

let twenty = Math.floor(decimalPart / 20);
if(twenty > 0){
    print(twenty+" x 20 stotinki");
    decimalPart -= (20*twenty);
}

let ten = Math.floor(decimalPart / 10);
if(ten > 0){
    print(ten+" x 10 stotinki");
    decimalPart -= (10*ten);
}


let five = Math.floor(decimalPart / 5);
if(five > 0){
    print(five+" x 5 stotinki");
    decimalPart -= (5*five);
}

let two = Math.floor(decimalPart / 2);
if(two > 0){
    print(two+" x 2 stotinki");
    decimalPart -= (2*two);
}

let one = decimalPart;
if(one >= 1){
    print(one+" x 1 stotinka");
    decimalPart -= (1*one);
}