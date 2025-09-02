// задача о рюкзаке

// Предметы
const items = [
  { name: "Гитара", weight: 1, value: 1500 },
  { name: "Ноутбук", weight: 3, value: 2000 },
  { name: "Стерео", weight: 4, value: 3000 },
];

// вместимость рюкзака - просто число
const capacity = 4;

// максимальная стоимость
function knapsack01(items, W) {
  const n = items.length;
  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const { weight, value } = items[i - 1];

    for (let w = 0; w <= W; w++) {
      dp[i][w] = dp[i - 1][w];
      if (weight <= w) {
        const take = value + dp[i - 1][w - weight];
        if (take > dp[i][w]) dp[i][w] = take;
      }
    }
  }
  return dp[n][W]; // максимальная ценность
}

knapsack01(items, capacity)

// максимальная стоимость и восстановление предметов
function knapsack01WithItems(items, W) {
  const n = items.length;
  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const { weight, value } = items[i - 1];
    for (let w = 0; w <= W; w++) {
      dp[i][w] = dp[i - 1][w];
      if (weight <= w) {
        const take = value + dp[i - 1][w - weight];
        if (take > dp[i][w]) dp[i][w] = take;
      }
    }
  }

  // восстановление набора
  let w = W;
  const taken = [];
  for (let i = n; i >= 1; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      taken.push(items[i - 1]);
      w -= items[i - 1].weight;
    }
  }
  taken.reverse();
  return { maxValue: dp[n][W], taken };
}