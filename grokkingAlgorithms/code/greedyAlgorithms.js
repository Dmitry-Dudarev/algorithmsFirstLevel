// Жадные алгоритмы

// Список штатов
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

// Хеш радиостанций с покрытием
let stations = {};

stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

// Итоговый набор станций сохраним сюда
let finalStations = new Set();

// Пока остаются непокрытые вещанием станции
while (statesNeeded.size > 0) {

  // станция, покрывающая максимум еще не покрытых штатов
  let bestStation = null;

  // штаты, что покрывает лучшая станция
  let statesCovered = new Set();

  // Перебор всех станций
  for (let [station, statesForStation] of Object.entries(stations)) {

    // Берем список непокрытых штатов, разворачиваем его в массив
    // фильтруем его выбирая только те штаты что покрываем станция
    // эти штаты и будут теми, которые дополнительно покрывает данная станция
    // записываем эти штаты в рабочий список covered
    let covered = new Set(
      [...statesNeeded].filter(state => statesForStation.has(state))
    );

    // смотрим, покрывает ли исследуемая станция болше штатов
    // чем предыдущие исследуемые станции
    if (covered.size > statesCovered.size) {

      // если да - обновляем лучшую станцию и сохраняем покрытые ею штаты
      bestStation = station;
      statesCovered = covered;
    }
  }

  // убираем покрытые штаты из списка нужных
  for (let state of statesCovered) {
    statesNeeded.delete(state);
  }

  // добавляем выбранную станцию в итоговое множество
  finalStations.add(bestStation);
}

console.log("Выбранные станции:", [...finalStations]);
