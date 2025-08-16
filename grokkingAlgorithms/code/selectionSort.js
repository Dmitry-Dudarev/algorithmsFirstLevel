// Сортировка выбором

// Задача - создать логику сортировки массива
// по значениям: от меньшего к большему

// Напишем функцию для поиска НАИМЕНЬШЕГО
// элемента в предоставленном массиве
function findSmallest(arr) {
  // Ведем 2 переменные:
  // smallest - для наименьшего элемента
  // smallestIndex - для его индекса
  // по-умолчанию зададим значения переменных
  // как первый элемент исследуемого массива
  let smallest = arr[0];
  let smallestIndex = 0;
  // Пройдем циклом по всем элементам массива
  // начиная со второго, и будем сравнивать 
  // каждый элемент с тем, что хранится в 
  // переменной smallest
  for (let i = 1; i < arr.length; i++) {
    // если ислледуемый элемент меньше того,
    // что хранится в smallest, то перезапишем
    // smallest новым, наименьшим значением
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  // после завершения цикла вернем индекс 
  // наименьшего найденного элемента
  return smallestIndex;
}

let workingArr = [77, 12, 854, 1, 24, 32]

// Функция сортировки выбором
function selectionSort(arr) {
  // Копия исходного массива
  let arrCopy = arr.slice();
  // Массив для отсортированных данных
  let sortedArr = [];
  // Сортируем массив, удаляя найденные элементы
  // пока элементы для сортировки не кончатся
  while (arrCopy.length > 0) {
    let smallestElemIndex = findSmallest(arrCopy);
    sortedArr.push(arrCopy[smallestElemIndex]);
    arrCopy.splice(smallestElemIndex, 1);
  }
  return sortedArr;
}

console.log(`
  На сортировку передали массив: 
  ${workingArr}
  `);
console.log(`
  Получили результат сортировки
  по принципу ОТ большего - К меньшему:
  ${selectionSort(workingArr)}
  `);
