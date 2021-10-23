/*  Write a function cakes(), which takes the recipe (object) 
and the available ingredients (also an object) and returns 
the maximum number of cakes Pete can bake (integer). 
For simplicity there are no units for the amounts 
(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
Ingredients that are not present in the objects, can be considered as 0. */

// Accepts two objects
// (M)
function cakes(recipe, available) {
  // 1. If number of ingredients in recipe is greater than in avilable, return false.
  if (Object.keys(recipe).length > Object.keys(available).length) return 0;
  // 2. If there are keys in recipe that are not in avilable, return false.
  let arr = [];
  for (let key in recipe) {
    // I can loop through first array and check is there are this keys in 2nd.!
    if (!available[key]) return 0;
    // 3. In same loop after the check, I can divide values, floor them and save to an array.
    arr.push(Math.floor(available[key] / recipe[key]));
  }
  // 4. Return lowest number from created array
  return Math.min(...arr);
}

// Other solutions
// NEARLY ONE LINER. Similar to mine but much, much more cleaner
const cakes2 = (needs, has) =>
  Math.min(
    ...Object.keys(needs).map((key) => Math.floor(has[key] / needs[key] || 0))
  );

// With reduce
function cakes3(recipe, available) {
  return Object.keys(recipe).reduce(function (val, ingredient) {
    return Math.min(
      Math.floor(available[ingredient] / recipe[ingredient] || 0),
      val
    );
  }, Infinity);
}

// MY SOLUTION IMPROVED
function cakes(recipe, available) {
  // 1. If there are keys in recipe that are not in avilable, return false.
  let arr = [];
  for (let key in recipe) {
    // 2. In same loop after the check, I can divide values, floor them and save to an array.
    arr.push(Math.floor(available[key] / recipe[key]) || 0);
  }
  // 3. Return lowest number from created array
  return Math.min(...arr);
}

// return 30
console.log(
  cakes(
    { sugar: 63, nuts: 10, flour: 97 },
    {
      flour: 3000,
      chocolate: 6800,
      cream: 5000,
      sugar: 3700,
      crumbles: 5000,
      butter: 4500,
      oil: 6600,
      cocoa: 9800,
      milk: 4100,
      apples: 8100,
      nuts: 7400,
      eggs: 1300,
      pears: 3700,
    }
  )
);
// return 0
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
