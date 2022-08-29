export const checkRow = (arr: Array<any>, firstPlayer: boolean) => {
  console.log('Player : ', firstPlayer);
  for (var i = 0; i < arr.length; i++) {
    let ijIndex = [];
    var rowSum = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (firstPlayer ? arr[i][j] === 'x' : arr[i][j] === 'o') {
        rowSum++;
        ijIndex.push({i, j});
        if (rowSum === 3) {
          console.log(firstPlayer ? 'x' : 'o', 'WIN!');
          return true;
        }
      } else {
        rowSum = 0;
        ijIndex = [];
      }
    }
  }
  for (var i = 0; i < arr.length; i++) {
    let ijIndex = [];
    var colSum = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (firstPlayer ? arr[j][i] === 'x' : arr[j][i] === 'o') {
        colSum++;
        ijIndex.push({i, j});
        if (colSum === 3) {
          console.log(firstPlayer ? 'x' : 'o', 'WIN!');
          return true;
        }
      } else {
        colSum = 0;
        ijIndex = [];
      }
    }
  }
  if (firstPlayer) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (
          j !== arr.length - 2 &&
          j !== arr.length - 1 &&
          i !== arr.length - 2 &&
          i !== arr.length - 1
        ) {
          if (
            arr[i][j] === 'x' &&
            arr[i + 1][j + 1] === 'x' &&
            arr[i + 2][j + 2] === 'x'
          ) {
            console.log('X Wins');
            return true;
          }
        }
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (
          j !== 0 &&
          j !== 1 &&
          i !== arr.length - 2 &&
          i !== arr.length - 1
        ) {
          if (
            arr[i][j] === 'x' &&
            arr[i + 1][j - 1] === 'x' &&
            arr[i + 2][j - 2] === 'x'
          ) {
            console.log('X Wins');
            return true;
          }
        }
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (
          j !== arr.length - 2 &&
          j !== arr.length - 1 &&
          i !== arr.length - 2 &&
          i !== arr.length - 1
        ) {
          if (
            arr[i][j] === 'o' &&
            arr[i + 1][j + 1] === 'o' &&
            arr[i + 2][j + 2] === 'o'
          ) {
            console.log('O Wins');
            return true;
          }
        }
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (
          j !== 0 &&
          j !== 1 &&
          i !== arr.length - 2 &&
          i !== arr.length - 1
        ) {
          if (
            arr[i][j] === 'o' &&
            arr[i + 1][j - 1] === 'o' &&
            arr[i + 2][j - 2] === 'o'
          ) {
            console.log('O Wins');
            return true;
          }
        }
      }
    }
  }
};

export const cpuTurn = (arr: any[]) => {
  let isChance = false;
  for (var i = 0; i < arr.length; i++) {
    var rowSumX = 0;
    var rowSumO = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'o') {
        rowSumO++;
        if (rowSumO === 2) {
          if (j !== arr.length - 1) {
            console.log('ROW');
            // return getRandomPos(arr, arr.length - 1);
          }
          console.log('Index : ', i, j);
          if (arr[i][j + 1] === '') {
            isChance = true;
            const index = {
              i: i,
              j: j + 1,
            };
            return index;
          } else {
            // return getRandomPos(arr, arr.length - 1);
            console.log('Inside else O row');
          }
        }
      } else {
        rowSumO = 0;
        console.log('Row O reset');
      }
      if (arr[i][j] === 'x') {
        rowSumX++;
        if (rowSumX === 2) {
          console.log('Index : ', i, j);
          if (i === arr.length - 1) {
            if (arr[i][j + 1] === '') {
              console.log('Inside X row');
              isChance = true;
              const index = {
                i: i,
                j: j + 1,
              };
              return index;
            }
          } else {
            if (arr[i][j + 1] === '' && arr[i + 1][j + 1] !== '') {
              console.log('Inside X row');
              isChance = true;
              const index = {
                i: i,
                j: j + 1,
              };
              return index;
            } else if (arr[i][j - 2] === '' && arr[i + 1][j - 2] !== '') {
              console.log('Inside else if X row');
              isChance = true;
              const index = {
                i: i,
                j: j - 2,
              };
              return index;
              // return getRandomPos(arr, arr.length - 1);
            }
          }
        }
      } else {
        rowSumX = 0;
        console.log('Row X reset');
      }
    }
  }
  for (var i = 0; i < arr.length; i++) {
    console.log('Column for');
    var colSumX = 0;
    var colSumO = 0;
    // let isChance = false;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[j][i] === 'o') {
        colSumX++;
        if (colSumX === 2) {
          if (j + 1 <= arr.length - 1) {
            console.log('Inside X Col', j + 1, arr.length - 1);
            if (i === arr.length - 1) {
              return getRandomPos(arr, arr.length - 1);
            }
            if (arr[j + 1][i] === '') {
              isChance = true;
              const index = {
                i: j + 1,
                j: i,
              };
              return index;
            } else {
              // return getRandomPos(arr, arr.length - 1);
              console.log('Col O else');
            }
          } else {
            if (arr[j - 2][i] === '') {
              isChance = true;
              const index = {
                i: j - 2,
                j: i,
              };
              return index;
            }
          }
        } else {
          console.log('Col X is not 2');
        }
      } else {
        colSumX = 0;
        console.log('Col X reset');
      }
      if (arr[j][i] === 'x') {
        colSumO++;
        if (colSumO === 2) {
          console.log('Col 2');
          if (j + 1 <= arr.length - 1) {
            console.log('Inside O Col', j + 1, arr.length - 1);
            if (arr[j + 1][i] === '') {
              console.log('Is Empty : ', j + 1, i);
              isChance = true;
              const index = {
                i: j + 1,
                j: i,
              };
              return index;
            } else {
              // return getRandomPos(arr, arr.length - 1);
              console.log('Col X else');
            }
          } else {
            if (arr[j - 2][i] === '') {
              console.log('Is Empty : ', j + 1, i);
              isChance = true;
              const index = {
                i: j - 2,
                j: i,
              };
              return index;
            }
          }
        } else {
          console.log('Col O is not 2');
        }
      } else {
        colSumO = 0;
        console.log('Col O reset');
      }
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j !== 1 && j !== 0 && i !== 1 && i !== 0) {
        console.log('Cross if');
        if (
          arr[i][j] === 'x' &&
          arr[i - 1][j + 1] === 'x' &&
          arr[i - 2][j + 2] === '' &&
          arr[i - 1][j + 2] !== ''
        ) {
          console.log('Cross if if');
          const index = {
            i: i - 2,
            j: j + 2,
          };
          return index;
        } else {
          console.log('Cross if else');
        }
      } else {
        console.log('Cross else');
      }
    }
  }
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr[i].length; j++) {
  //     if (j !== 0 && j !== 1 && i !== arr.length - 2 && i !== arr.length - 1) {
  //       if (
  //         arr[i][j] === 'x' &&
  //         arr[i + 1][j - 1] === 'x' &&
  //         arr[i + 2][j - 2] === 'x'
  //       ) {
  //         console.log('X Wins');
  //         return true;
  //       }
  //     }
  //   }
  // }
  // if (!isChance) {
  return getRandomPos(arr, arr.length - 1);
  // }
};

const getRandomPos = (arr: any[], initialI: number) => {
  console.log('Random E');
  for (let i = initialI; i >= 0; i--) {
    const eIndex: any[] = [];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '') {
        eIndex.push(j);
      }
    }
    let math = eIndex[Math.floor(Math.random() * eIndex.length)];
    if (math === undefined) {
      getRandomPos(arr, initialI - 1);
    } else {
      const index = {
        i: i,
        j: math,
      };
      console.log('M : ', index);
      return index;
    }
  }
};

export const playerValue = (arr: any[], initialI: number, j: number) => {
  for (let i = initialI; i >= 0; i--) {
    if (arr[i][j] === '') {
      const index = {
        i,
        j,
      };
      return index;
    } else {
      playerValue(arr, initialI - 1, j);
    }
  }
  return false;
};
