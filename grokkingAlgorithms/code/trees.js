// Подключаем модуль fs для работы с файловой системой
const fs = require("fs");
const path = require("path");

// Функция обхода папки и вывода файлов
function printNames(startDir) {
  // Очередь для поиска в ширину
  let searchQueue = [startDir];

  // Пока очередь не пуста ...
  while (searchQueue.length > 0) {
    // Берём первый элемент из очереди
    let dir = searchQueue.shift();

    // Получаем массив файлов и папок в директории
    let files = fs.readdirSync(dir).sort();

    for (let file of files) {

      // Соединяем путь до файла и имя папки
      let fullPath = path.join(dir, file);

      // Если это файл — печатаем его имя
      if (fs.statSync(fullPath).isFile()) {
        console.log(file);
      } else {
        // Если папка — добавляем в очередь
        searchQueue.push(fullPath);
      }
    }
  }
}

// Запуск
printNames("pics");

function printNamesRecursive(dir) {
  // Получаем содержимое папки
  let files = fs.readdirSync(dir).sort();

  for (let file of files) {
    let fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isFile()) {
      console.log(file);
    } else {
      printNamesRecursive(fullPath);
    }
  }
}

// Запуск
printNamesRecursive("pics");