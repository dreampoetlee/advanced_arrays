
//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
]

//Example function
function findMexicanFood(){
    //Debug tip: Add a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties
    let results = dishes.filter(function(el){
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

    return results;
}

let mexicanFood = findMexicanFood();
console.log('Mexican Foods: ', mexicanFood)



//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter
// What am I doing? //^ trying to find all the vegetarian dishes
// How to make statement true? //? dishes.filter = vegetarian
function findVeggieFood(){
	let results = dishes.filter(function(el) {
		if(el.cuisine === 'Vegetarian') {
			return true;
		} else {
			return false;
		}
	})
	
	return results;
}

let veggieFood = findVeggieFood();
console.log('Vegetarian Foods: ', veggieFood)


//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter
// What am I doing? //^ trying to find all the italian dishes + dishes that serves more than 5
// How to make statement true? //? dishes.filter = Italian && size > 5
function italianFeedsFive(){
	let results = dishes.filter(function(el) {
		if(el.cuisine === 'Italian' && el.servings > 5) {
			return true;
		} else {
			return false;
		}
	})

	return results;
}

let italianServesFive = italianFeedsFive();
console.log('Italian Dishes that feeds more than 5 are: ', italianServesFive);

//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter
// What am I doing? //^ trying to find all dish ids that equals serving size
// How to make statement true? //? dishes.filter = id === count
function idMatchesCount(){
	let results = dishes.filter(function(el) {
		if(el.id === el.servings) {
			return true;
		} else {
			return false;
		}
	})
	return results;
}
let countMatchesId = idMatchesCount();
console.log('The following dishes have matching ids and serving sizes: ', countMatchesId)

//4. Create a function that will return only dishes whose serving count is even.
//Filter
// What am I doing? //^ trying to find all the even serving count
// How to make statement true? //? dishes.filter = count % 2 == 0
function evenServingCount(){
	let results = dishes.filter(function(el) {
		if(el.servings % 2 == 0) {
			return true;
		} else {
			return false;
		}
	})
	return results
}
let servingCountEven = evenServingCount();
console.log('The dishes that has an even serving count are: ', servingCountEven);

//5. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter
// What am I doing? //^ trying to find all the dishes with chickpea 
// How to make statement true? //? dishes.filter = ing.includes()
function chickpeaInDish() {
	let results = dishes.filter(function(el) {
		if(el.ingredients.includes('chickpea')) {
			return true;
		} else {
			return false;
		}
	})
	return results
}
let dishWithChickpea = chickpeaInDish();
console.log('The dishes that we server that includes chickpea are: ', dishWithChickpea)

//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Italian', 'Mexican', ...]
//Map
function cuisineTypeName(){
	let results = dishes.map(function(el) {
		return el.cuisine;
	})
	return results;
}

let cuisineNames = cuisineTypeName();
console.log('Here are a list of dishes by their cuisine: ', cuisineNames);

// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array


//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map 
function moveCuisineName(){
	let results = dishes.map(function(el) {
		return el.unshift('cuisine') + el.name
	})
	return results
}

let cuisineNameMoved = moveCuisineName();
console.log(cuisineNameMoved);

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter


//BONUS

//9. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter
// What am I doing? //^ trying to find all the dishes that have tomato or cheese
// How to make statement true? //? dishes.filter = ing.includes()
function tomatoOrCheese(){
	let results = dishes.filter(function(el) {
		if(el.ingredients.includes('tomato') || el.ingredients.includes('cheese')){
			return true;
		} else {
			return false;
		}
	})
	return results
}
let cheeseOrTomato = tomatoOrCheese();
console.log('These dishes have either tomato or cheese in them: ', cheeseOrTomato);

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

