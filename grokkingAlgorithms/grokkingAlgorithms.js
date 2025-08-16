// Бинарный алгоритм

function binarySearch(arr, target) {
  // сначала зададим в переменные наименьшее 
  // значение списка и наибольшее значение списка
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    console.log(`mid: ${mid}`)
    const guess = arr[mid];
    console.log(`guess in arr: ${guess}`)

    if (guess === target) {
      return mid;
    }

    if (guess < target) {
      low = mid + 1;
      console.log(`guess < target, new low: ${low}`)
    } else {
      high = mid - 1;
      console.log(`guess > target, new high: ${high}`)
    }
  }
  return null;
}

console.log(binarySearch([1, 3, 4, 5, 8, 13], 12));
