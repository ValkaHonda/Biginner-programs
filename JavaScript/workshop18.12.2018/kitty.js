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

  function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

  let stuff = gets();
  const path = gets().split(' ').map(Number);

  print(stuff);
  print(path);
  const n = stuff.length;

  let index = 0;
  let soulCount = 0;
  let foodCount = 0;
  let deadLockCount = 0;

  function kittyStep(stuff,index){
      if(stuff[index] == '@'){
        soulCount++;
      } else if(stuff[index] == 'x'){
        if(index % 2 == 0){
            if(soulCount <= 0){
                ///shit !!!!!!!!!!!!!!!!!! DEADLOCK
                print('deadlock --> no souls');
            } else {
                soulCount--;
                setCharAt(stuff,index,'@');
                deadLockCount++;
            }
        } else {
            if(foodCount <= 0){
                ///shit !!!!!!!!!!!!!!!!!! DEADLOCK
                print('deadlock --> no food');
            } else {
                foodCount--;
                setCharAt(stuff,index,'*');
                deadLockCount++;
            }
        }
      } else {
        foodCount++;
      }
  }

  kittyStep(stuff,index);

  path.forEach(element => {
    let newIndex = index + element;
    
    while(newIndex < 0){
        newIndex = index + (-newIndex);
        print('-');
    }

    while(newIndex >= n){
        newIndex = index - newIndex;
        print('-');
    }

    kittyStep(stuff,newIndex);

    index = newIndex;
  });

  /*
  Coder souls collected: 2
    Food collected: 0
    Deadlocks: 1
*/
  print(`Coder souls collected: ${soulCount}`);
  print(`Food collected: ${foodCount}`);
  print(`Deadlocks: ${deadLockCount}`);

