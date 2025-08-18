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
function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  // выделяем ОПОРНЫЙ ЭЛЕМЕНТ
  let pivot = arr[0];
  // получим массив элементов, которые МЕНЬШЕ опорного
  let less = arr.slice(1).filter(i => i < pivot);
  // получим массив элементов, которые БОЛЬШЕ опорного 
  let greater = arr.slice(1).filter(i => i > pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

const quickSortArr = [15, 2, 18, 0, 4, 12];

// console.log(quickSort(quickSortArr));

// Функция последовательного перебора элементов
function showItems(arr) {
  for (let item of arr) {
    console.log(item);
  }
}