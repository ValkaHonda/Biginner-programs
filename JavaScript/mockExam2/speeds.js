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
    '11',
    '1500',
    '4',
    '6',
    '5',
    '3',
    '3',
    '9',
    '100',
    '2',
    '3',
    '1',
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4

  const n = Number(gets());
  let speedsArr = [];
  for (let i = 0; i < n; i++) {
    speedsArr.push(Number(gets()));
  }
  function calculateVelocity(arr,index, limit){
      let counter = 1;
      let sum = 0;
      for (let i = index; i < arr.length; i++) {
         sum += arr[i]; 
        if(counter >= limit){
            break;
        } else {
            // change
            // arr[i] = arr[i+1];
            // arr[i+1] = arr[i];
        }
        counter++;
      }
      return sum;
   
  }
  function calculateCarsCount(arr,index){
      let count = 1;
      for (let i = index; i < arr.length - 1; i++) {
          if(arr[i] < arr[i+1]){
              arr[i+1] = arr[i];
              count++;
          } else {
              break;
          }
      }
      return count;
  }

//   print(n);
//   print(speeds);

  let maxVelocity = speedsArr[0];
  let carsNumber = 1;

  speeds = speedsArr.slice();
  for (let i = 0; i < speeds.length; i++) {
      let currentCount = calculateCarsCount(speeds,i);
      if(currentCount > carsNumber){
          carsNumber = currentCount;
          maxVelocity = calculateVelocity(speedsArr,i,currentCount);
      } else if(currentCount == carsNumber){
        let currentVelocity = calculateVelocity(speedsArr,i,currentCount);
        if(maxVelocity < currentVelocity){
            maxVelocity = currentVelocity;
        }
      }
  }




  print(maxVelocity);
//   print(speeds);

