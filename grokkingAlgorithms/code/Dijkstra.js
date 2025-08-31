// граф хеш-таблицы

const graph = {}

// добавим остальные узлы с весами их ребер
graph["a"] = {};
graph["a"]["конец"] = 1;
graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["конец"] = 5;
graph["конец"] = {};

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
const processed = [];

// Функция поиска узла с наименьшей стоимостью
function findLowestCostNode(costs) {
  let lowestCost = Infinity;
  console.log(`создана переменная lowestCost ей передано значение ${lowestCost}`)
  let lowestCostNode = null;
  console.log(`создана переменная lowestCostNode ей передано значение ${lowestCostNode}`)

  console.log(`
    Запущен цикл. Он будет брать по одному свойству из объекта
    costs (${costs}) и обрабатывать его
    `)
  for (let node in costs) {
    let cost = costs[node];
    console.log(`Создадим переменную cost`)
    console.log(`В переменной cost запишем значение текущего узла ${node} : ${cost}`)

    console.log(`Если переменная cost (${cost}) меньше переменной lowerCost (${lowestCost}) 
        и лист проверенных элементов (${processed}) не включает в себя 
        тот node, который сейчас проверяется (${node}) ...`)
    if (cost < lowestCost && !processed.includes(node)) {
      
      lowestCost = cost;
      console.log(`>>>Присвоим переменной lowestCost значение (${lowestCost})`)
      lowestCostNode = node;
      console.log(`>>>Присвоим переменной lowestCostNode значение (${lowestCostNode})`)
      console.log(`!!! Итерация цикла для node (${node}) с ценой (${cost}) ЗАВЕРШЕНА !!!
        
        `)
    }
  }
  console.log(`Цикл завершен.`)
  console.log(`Возвращаем lowestCostNode (${lowestCostNode})`)
  return lowestCostNode;
}


// реализация алгоритма Дейкстры
function dijkstra(graph, costs, parents) {

  let node = findLowestCostNode(costs);

  while (node !== null) {

    // извлечем цену выбранного узла
    // из таблицы стоимостей
    let cost = costs[node];

    // получим список соседей выбранного узла
    // в виде объекта из графа
    let neighbors = graph[node];

    // пройдем циклом по списку соседей
    for (let n in neighbors) {

      // введем переменную для подсчета новой цены 
      // для таблицы цен = 
      // цена выбранного узла + цена ребра до каждого из соседей
      let newCost = cost + neighbors[n];

      // новая цена меньше чем та, что указана
      // для узла в таблице цен?
      if (newCost < costs[n]) {

        // если да - записать в таблицу цен для этого узла
        // новую цену
        costs[n] = newCost;

        // добавить проверняемый узел в качестве родителя 
        // для узла, которому найдена меньшая цена
        parents[n] = node;
      }
    }

    // после завершения цикла добавить проверенный узел 
    // в список проверенных узлов
    processed.push(node);

    // чтобы взять новый узел для проверки 
    // пропустим таблицу стоимости узлов через 
    // функцию поиска дешевого узла
    node = findLowestCostNode(costs);
  }

  return { costs, parents };
}

dijkstra(graph, costs, parents)