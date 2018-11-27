const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];


function grill (currentObject) {
    // Modify the food so that it is cooked
    
    currentObject.cooked = true;

    //This will cut out any item in uncooked array if its cooked is labeled as true
  for (let i = 0; i < uncookedFood.length; i++) {
      if (uncookedFood[i].cooked === true) {
          uncookedFood.splice(i, 1);
      }
  }
   

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};


grill(hamburger)
grill(corn)
grill(zucchini)


console.log(uncookedFood)
console.log(cookedFood)