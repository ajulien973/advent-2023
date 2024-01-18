import * as React from 'react';

const Three = () => {
  const isSymbol = (char) => {
    let spChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,<>/?]+/;
    return spChars.test(char);
  }
  const check = (table, start, end, row) => {
    const isTop = row === 0;
    const isBottom = row === (table.length - 1);
    const isLeft = start === 0;
    const isRight = end === (table[row].length - 1);

    if (!isLeft && isSymbol(table[row][start - 1])) {
      return true;
    }
    if (!isRight && isSymbol(table[row][end + 1])) {
      return true;
    }
    if (!isTop) {
      let i = isLeft ? 0 : start - 1;
      for(i; i <= (end + 1); i++) {
        if(isSymbol(table[row - 1][i])) {
          return true;
        }
      }
    }
    if (!isBottom) {
      let i = isLeft ? 0 : start - 1;
      for(i; i <= (end + 1); i++) {
        if(isSymbol(table[row + 1][i])) {
          return true;
        }
      }
    }
    return false;
  }

  let partNumbers = [];

  data.forEach((line, row) => {
    let numberStart, numberEnd;
    let number = [];
    line.forEach((char, column) => {
      if(!isNaN(char)) {
        if(numberStart === undefined) {
          numberStart = column;
        }
        numberEnd = column;
        number.push(char);
      } else if (numberStart !== undefined && numberEnd !== undefined) {
        if (check(data, numberStart, numberEnd, row)) {
          partNumbers.push(number.join(''))
        }
        // reset all
        numberStart = undefined;
        numberEnd = undefined;
        number = [];
      }
    })
  })

  return (
    <>
      <h3>Spare parts : {partNumbers.join(', ')}</h3>
      <p>Total parts : {partNumbers.reduce((acc, part) => acc + parseInt(part, 10), 0)}</p>
    </>
  )
}

export default Three;

const data = [
  ['4', '6', '7', '.', '.', '1', '1', '4', '.', '.'],
  ['.', '.', '.', '*', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '3', '5', '.', '.', '6', '3', '3', '.'],
  ['.', '.', '.', '.', '.', '#', '.', '.', '.', '.'],
  ['6', '1', '7', '*', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '+', '.', '5', '8', '.'],
  ['.', '.', '5', '9', '2', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '7', '5', '5', '.'],
  ['.', '.', '.', '$', '.', '*', '.', '.', '.', '.'],
  ['.', '6', '6', '4', '.', '5', '9', '8', '.', '.']
];