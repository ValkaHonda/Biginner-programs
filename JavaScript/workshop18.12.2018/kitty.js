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
    '@@@xx@*',
    '1 -1 -1 4'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4



  let stuff = gets();
  const path = gets().split(' ').map(Number);

//   print(stuff);
  let charArr = stuff.split('');
//   print(path);
  const n = stuff.length;

  let index = 0;
  let soulCount = 0;
  let foodCount = 0;
  let deadLockCount = 0;
  let jumpCount = 0;
  let isDeadLock = false;

  function kittyStep(charArr,index){
      if(charArr[index] == '@'){
        soulCount++;
        charArr[index] = '$';
      } else if(charArr[index] == 'x'){
        if(index % 2 == 0){
            if(soulCount <= 0){
                ///shit !!!!!!!!!!!!!!!!!! DEADLOCK
                // print('deadlock --> no souls');
                return false;
            } else {
                soulCount--;
                //setCharAt(stuff,index,'@');
                charArr[index] = '@';
                deadLockCount++;
                // print(charArr);
            }
        } else {
            if(foodCount <= 0){
                ///shit !!!!!!!!!!!!!!!!!! DEADLOCK
                // print('deadlock --> no food');
                return false;
            } else {
                foodCount--;
                // setCharAt(stuff,index,'*');
                charArr[index] = '*';
                deadLockCount++;
                // print(charArr);
            }
        }
      } else if(charArr[index] == '*'){
        foodCount++;
        charArr[index] = '$';
      }
  }

  
  if(kittyStep(charArr,index) === false){
    isDeadLock = true;
  } else {
      jumpCount++;
        for (const element of path) {
          let newIndex = index + element;
          
          while(newIndex < 0){
              newIndex = n + newIndex;
            //   print('-');
          }
      
      
          if(newIndex >= n){
              newIndex = newIndex - n;
          }
      
          if(kittyStep(charArr,newIndex) === false){
              isDeadLock = true;
              return;
          }
      
          index = newIndex;
          jumpCount++;
        }
  }

  /*
  Coder souls collected: 2
    Food collected: 0
    Deadlocks: 1
*/
  if(isDeadLock){
//     You are deadlocked, you greedy kitty!
// Jumps before deadlock: 0
    print('You are deadlocked, you greedy kitty!');
    print('Jumps before deadlock: '+jumpCount);
  } else {
      print(`Coder souls collected: ${soulCount}`);
      print(`Food collected: ${foodCount}`);
      print(`Deadlocks: ${deadLockCount}`);
  }



  //    -1 0 1 2 3