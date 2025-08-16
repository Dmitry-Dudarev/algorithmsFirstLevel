// Рекурсия

// Задача на открытие коробок

// Аналог рекурсии с помощью классических циклов
function findAKey(data) {
  //тут будем хранить все неисследованные элементы
  let boxesToCheck = [];
  // первым элементом добавим наши исходные данные
  boxesToCheck.push(data);

  while (boxesToCheck.length > 0) {
    //берем последнюю коробку
    let box = boxesToCheck.pop();

    for (let item of box) {
      if (item === 'ключ') {
        return "Ключ найден!"
      } else if (Array.isArray(item)) {
        // это вложенная коробка, 
        // кладем ее в стек
        boxesToCheck.push(item);
      }
      // другие предметы игнорируем
    }
  }

  // если цикл закончился, значит ключа нет
  return "Ключ не найден"
}

// Пример
let testBox = [
  'футболка',
  ['носки', ['ключ', 'зажигалка']],
  'шарф'
];

console.log(`
  Выполним поиск ключа с помощью
  классических циклов.

  Результат: ${findAKey(testBox)}
  `);

//Решение с помощью рекурсии
function findKeyUsingRecursion(bigBox) {
  for (let item of bigBox) {
    if (Array.isArray(item)) {
      let result = findKeyUsingRecursion(item);
      if (result === "Ключ найден!") {
        return result;
      }
    } else if (item === 'ключ') {
      return "Ключ найден!"
    }
    //другие предметы игнорируем
  }
  return "Ключ не найден"
}

console.log(`
  Выполним поиск ключа с помощью
  рекурсии.

  Результат: ${findKeyUsingRecursion(testBox)}
`);

// исправленный вариант
function countdown(i) {
  console.log(i);
  if (i <= 1) {
    return
  } else {
    countdown(i - 1);
  }
}

// функция приветствия и стек
function greet(name) {
  console.log(`hello, ${name}!`);
  greet2(name);
  console.log(`getting ready to say bye...`);
  bye();
}

function greet2(name) {
  console.log(`how are you, ${name}?`)
}

function bye(name) {
  console.log(`ok bye!`)
}

// вычисление фактроиала
function fact(x) {
  if (x === 1) {
    return x
  }
  return x * fact(x - 1)
}