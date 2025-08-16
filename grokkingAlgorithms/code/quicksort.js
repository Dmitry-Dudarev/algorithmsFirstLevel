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