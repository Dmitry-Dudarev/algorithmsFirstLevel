{// wordA и wordB — это строки
  const wordA = "hish";
  const wordB = "fish";

  // создаём таблицу (двумерный массив), заполненную нулями
  const cell = Array.from({ length: wordA.length }, () =>
    Array(wordB.length).fill(0)
  );

  // здесь будем хранить длину самой длинной общей подстроки
  let longest = 0;

  for (let i = 0; i < wordA.length; i++) {
    for (let j = 0; j < wordB.length; j++) {
      if (wordA[i] === wordB[j]) {
        if (i > 0 && j > 0) {
          cell[i][j] = cell[i - 1][j - 1] + 1;
        } else {
          cell[i][j] = 1;
        }
        longest = Math.max(longest, cell[i][j]);
      } else {
        cell[i][j] = 0;
      }
    }
  }

  console.log(`Длина самой длинной общей подстроки слов ${wordA} и ${wordB}:`, longest);
  console.table(cell);
}


{
  const wordA = "fosh";
  const wordB = "fish";

  function lcsNoPad(wordA, wordB) {
    const cell = Array.from({ length: wordA.length }, () =>
      Array(wordB.length).fill(0)
    );

    let best = 0;

    for (let i = 0; i < wordA.length; i++) {
      for (let j = 0; j < wordB.length; j++) {
        if (wordA[i] === wordB[j]) {
          // если равны — диагональ + 1, либо 1 на краю
          cell[i][j] = (i > 0 && j > 0) ? (cell[i - 1][j - 1] + 1) : 1;
        } else {
          // если не равны — максимум сверху/слева (учитываем края)
          const up = (i > 0) ? cell[i - 1][j] : 0;
          const left = (j > 0) ? cell[i][j - 1] : 0;
          cell[i][j] = Math.max(up, left);
        }
        if (cell[i][j] > best) best = cell[i][j];
      }
    }

    console.log(`Длинна наибольшей общей последовательности слов ${wordA} и ${wordB}:`, best)
    console.table(cell)
  }

  lcsNoPad(wordA, wordB)
}