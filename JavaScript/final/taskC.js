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
      'telerik',
      'alpha',
      'java',
      'Spring',
      'nodeJS'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  function calculateCharValue(ch){
    return ch.charCodeAt(0)-96;
  }

  function getCharsSum(str){
    let currentStr = str.toLowerCase();
    let sum = 0;
    for (let i = 0; i < currentStr.length; i++) {
      let ch = currentStr[i];
      sum += calculateCharValue(ch);
    }
    return sum;
  }

  const n = +gets();
  let words = [];
  for (let i = 0; i < n; i++) {
    words.push(gets());
  }

  let resultIndex = 0;
  let biggestSum = 0;
  for (let i = 0; i < n; i++) {
    let currentStringSum = getCharsSum(words[i]);
    if(currentStringSum > biggestSum){
      biggestSum = currentStringSum;
      resultIndex = i;
    }
  }

  print(biggestSum + ' ' + words[resultIndex]);
