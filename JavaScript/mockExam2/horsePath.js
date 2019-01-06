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
      '15'
  ];
  
  const gets = this.gets || getGets(test);
  const print = this.print || console.log;
  
  // Solution of the problem. All the above code is for local testing. The test variable is with the first test case 2 + 2 = 4
  const n = +gets();
  let matrix = [];
  for (let i = 0; i < n; i++) {
      matrix[i] = new Array(n);
  }

  let possition = {
    i: 0,
    j: 0,
  };

  initMatrix(matrix);

  let counter = 2;
  matrix[0][0] = 1;
 
  
  while(true){
    let i = possition.i;
    let j = possition.j;

    if(checkCordinates(matrix,possition.i-2,possition.j-1) === true){ // 1
        possition.i = possition.i-2;
        possition.j = possition.j-1;
        matrix[possition.i][possition.j] = counter;
    } else if (checkCordinates(matrix,possition.i-1,possition.j-2) === true){ // 2
        possition.i = possition.i-1;
        possition.j = possition.j-2;
        matrix[possition.i][possition.j] = counter;
    } else if (checkCordinates(matrix,possition.i-2,possition.j+1) === true){ // 3
        possition.i = possition.i-2;
        possition.j = possition.j+1;
        matrix[possition.i][possition.j] = counter;
    } else if (checkCordinates(matrix,possition.i-1,possition.j+2) === true){ // 4
        possition.i = possition.i-1;
        possition.j = possition.j+2;
        matrix[possition.i][possition.j] = counter;
    } else if (checkCordinates(matrix,possition.i+1,possition.j-2) === true){ // 5 
        possition.i = possition.i+1;
        possition.j = possition.j-2;
        matrix[possition.i][possition.j] = counter;
    } else if (checkCordinates(matrix,possition.i+1,possition.j+2) === true){ // 6 
        possition.i = possition.i+1;
        possition.j = possition.j+2;
        matrix[possition.i][possition.j] = counter;
    } else if (checkCordinates(matrix,possition.i+2,possition.j-1) === true){ // 7
        possition.i = possition.i+2;
        possition.j = possition.j-1;
        matrix[possition.i][possition.j] = counter;
    } else if (checkCordinates(matrix,possition.i+2,possition.j+1) === true){ // 8
        possition.i = possition.i+2;
        possition.j = possition.j+1;
        matrix[possition.i][possition.j] = counter;
    } else { 
        outermost:
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] === 0){
                    possition.i = i;
                    possition.j = j;
                    matrix[possition.i][possition.j] = counter;
                    break outermost;
                }
            }
        }
        // break; not needed!
    }


    counter++;
    if(counter > n*n){
        break;
    }
    // break; emergency break 
    //change possition cordinates!
  }

  printMatrix(matrix);
 






  //functions
  function checkCordinates(matrix, i, j){
      if(i >= matrix.length || i < 0 || j < 0 || j >= matrix.length || ((matrix[i][j]) != 0) ){
            return false;
        } else {
            return true;
        }
  }

  function initMatrix(matrix){
      for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
              matrix[i][j] = 0;
          }
      }
  }

  function printMatrix(matrix){
      matrix.forEach(element => {
          let output = element.join(' ');
          print(output);
      });
  }