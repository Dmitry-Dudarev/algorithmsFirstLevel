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

// задача про участок
function surveyor(data) {
  let length = data.length;
  let width = data.width;
  let remainder = length % width;
  console.log(`length: ${length}, width: ${width}, remainder: ${remainder}`)
  if (remainder === 0) {
    length = width;
    return { length, width }
  } else if (length <= 0 || width <= 0) {
    return "нет рационального решения"
  }
  length = width;
  width = remainder
  return surveyor({ length, width })
}

let testLand = {
  length: 1683,
  width: 640
}

// сумма чисел в массиве циклом
function cycleSum(arr) {
  let sum = 0;
  for (let int of arr) {
    sum += int
  }
  return sum
}

const testArr = [2, 4, 6]

// рекурсивная функция суммирования элементов списка
function sum(arr) {
  if (arr.length === 0) {
    return 0
  }
  return arr.pop() + sum(arr)
}

// рекурсивная функция для подсчета элементов в списке
function countElements(arr) {
  if (arr.length === 0) {
    return 0
  }
  arr.pop()
  return 1 + countElements(arr)
}

// рекурсивная функция для нахождения наибольшего 
// числа в списке
function findMax(arr) {
  // базовый случай
  if (arr.length === 1) {
    return arr[0]
  }
  let last = arr.pop()
  let subMax = findMax(arr)
  return last > subMax ? last : subMax
}

// псевдокод базового случая быстрой сортировки
function quicksort(arr) {
  if (arr.length < 2) {
    return arr
  }
}