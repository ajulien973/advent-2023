import * as React from 'react';

export default function ForTooti() {
  const puzzle = ['eedadn', 'drvtee', 'eandsr', 'raavrd',
    'atevrs',
    'tsrnev',
    'sdttsa',
    'rasrtv',
    'nssdts',
    'ntnada',
    'svetve',
    'tesnvt',
    'vntsnd',
    'vrdear',
    'dvrsen',
    'enarar'];
  let occurrences = []; // {letter: 'e', occurrences: 1, column: 0}

  puzzle.forEach((word) => {
    word.split('').forEach((letter, index) => {
      const searchedOccurrence = occurrences.find((occurrence) => {
        return occurrence.letter === letter && occurrence.column === index;
      })
      if (searchedOccurrence) {
        searchedOccurrence.occurrences++;
      } else {
        occurrences.push({letter, occurrences: 1, column: index});
      }
    })
  });

  let result = puzzle[0].split('').map((letter, index) => {
    let filterAndSort = occurrences.filter(occurrence => {
      return occurrence.column === index;
    }).sort((a, b) => {
      return a.occurrences - b.occurrences;
    })
    return filterAndSort.at(-1)
  })

  console.log(result)

  let joinedResult = result.reduce((acc, item) => {
    return `${acc}${item.letter}`;
  }, '')

  return (
    <div>
      And the result is : {joinedResult}
    </div>
  );
};