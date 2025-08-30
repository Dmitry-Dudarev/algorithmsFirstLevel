// граф хеш-таблицы

const graph = {}

// добавим остальные узлы с весами их ребер
graph["a"] = {};
graph["a"]["конец"] = 1;
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["конец"] = 5;
graph["конец"] = {};

console.log(Object.keys(graph));

// создадим таблицу стоимостей узлов
const costs = {};

costs["a"] = 6;
costs["b"] = 2;
costs["конец"] = Infinity;

// создадим таблицу для родителей
const parents = {};

parents["a"] = "начало";
parents["b"] = "начало";
parents["конец"] = null;

// массив для отслеживания уже проверенных узлов
processed = [];

// Функция поиска узла с наименьшей стоимостью
function findLowestCostNode(costs) {
let lowestCostNode = null;
}
