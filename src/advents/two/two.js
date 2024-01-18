import * as React from 'react';

const Two = () => {
  const content = {red: 12, green: 13, blue:14};

  let sum = 0;
  const result = games.map((game, index) => {
    let possible = true;

    game.forEach(set => {
      set.red = set.red ?? 0;
      set.green = set.green ?? 0;
      set.blue = set.blue ?? 0;
      if (possible) {
        possible = set.red <= content.red && set.green <= content.green && set.blue <= content.blue
      }
    })

    sum = possible ? sum + index + 1 : sum;
    return possible;
  })

  return (
    <div>
      <h1>Sum : {sum}</h1>
      <h1>Games</h1>
      {games.map((game, index) => (
        <>
          <h2>{result[index] ? 'ok' : 'not ok'} Game {index + 1}</h2>
          {game.map((set, index ) => (
            <>
              <h3>Set {index + 1}</h3>
              <ul>
                <li>blue : {set.blue}</li>
                <li>red : {set.red}</li>
                <li>green : {set.green}</li>
              </ul>
            </>
          ))}
        </>
      ))}
    </div>
  );
};

export default Two;

const games = [
  [
    { blue: 3, red: 4 },
    { red: 1, green: 2, blue: 6 },
    { green: 2 }
  ],[
    { blue: 1, green: 2 },
    { green: 3, blue: 4, red: 1 },
    { green: 1, blue: 1 }
  ],[
    { green: 8, blue: 6, red: 20 },
    { blue: 5, red: 4, green: 13 },
    { green: 5, red: 1 }
  ],[
    { green: 1, red: 3, blue: 6 },
    { green: 3, red: 6 },
    { green: 3, blue: 15, red: 14 }
  ],[
    { red: 6, blue: 1, green: 3 },
    { blue: 2, red: 1, green: 2 }
  ]
];