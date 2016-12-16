//restaurant food items
class Drink {
    constructor(drinkType){
        this.name = drinkType.name;
        this.description = drinkType.description;
        this.price = drinkType.price;
        this.ingredients = drinkType.ingredients;
    }
    stringify() {
        
    }
}

var mojito = new Drink({
    name: 'mojito',
    description: '',
    price: 1.00
})

class Plate {
    constructor(plateType){
        this.name = plateType.name;
        this.description = plateType.description;
        this.price = plateType.price;
        this.ingredients = plateType.ingredients;
    } 
    stringify() {
        return 'The ' + this.name + ' has been described as ' + this. description + ' by previous customers that enjoyed this plate. This plate costs only $' + this.price + '.'
            
//             ' is ' + veganPart + ', ' + glutenPart + ', and ' + citrusPart + '.' + ' The ' + this.name + ' contains only ' + this.calories + ' calories.'

    }
}   

var burrito = new Plate({
    name : 'breakfast Burrito',
    description : 'smothered and cheesy, clothed in the finest tortilla in all the land.',
    price: 10,
    ingredients: []
})

var guacamolePlate = new Plate({
    name : 'Guacamole Plate',
    description : 'well, its green and creamy. Sometimes it chunky depending on who made it.',
    price: 8,
    ingredients: []
})

class Order {
    constructor(orderType){
        this.plates = orderType.plates;
    }
}

class Menu {
    constructor(menuType){
        this.menu = menuType.plates;
    }
    stringify() {
        
    }
}

class Restaurant {
    constructor(restType){
        this.name = restType.name;
        this.description = restType.description;
    }
    stringify() {
        
    }
}

class Customer {
    constructor(dietType){
        this.diet = dietType.diet;
    }
    stringify() {
        // customer.name has the dietary restrictions of gluten intolerance
    }   
}


class FoodItem {
    constructor(foodType){
        this.name = foodType.name;
        this.calories = foodType.calories;
        this.vegan = foodType.vegan;
        this.glutenFree = foodType.glutenFree;
        this.citrusFree = foodType.citrusFree;
    }

      stringify(){
        var veganPart;
        var glutenPart;
        var citrusPart;
        
        if (this.vegan === true) {
            veganPart = 'vegan-friendly'
        } else {
            veganPart = 'not a vegan dish'
        }
        
        if (this.glutenFree === true) {
            glutenPart = 'gluten free'
        } else {
            glutenPart = 'contains gluten'
        }
        
        if (this.citrusFree === true) {
            citrusPart = 'citrus free'
        } else {
            citrusPart = 'has citrus in it'
        }
        
        return 'Our ' + this.name + ' is ' + veganPart + ', ' + glutenPart + ', and ' + citrusPart + '.' + ' The ' + this.name + ' contains only ' + this.calories + ' calories.'
    } 
}

var appleFritter = new FoodItem({
    name : 'Apple Fritter',
    calories : 450,
    vegan : false,
    glutenFree : false,
    citrusFree : true,
});

var eggsBenedict = new FoodItem({
    name : 'Eggs Benedict',
    calories : 600,
    vegan : false,
    glutenFree : false,
    citrusFree : true,
});

var quinoaCranberrySalad = new FoodItem({
    name : 'Quinoa Cranberry Salad',
    calories : 178,
    vegan : true,
    glutenFree : true,
    citrusFree : false,
});


// Our apple fritter is not vegan free, is not gluten free but is citrus free with only 450 calories.

// if vegan = true then, return 'vegan friendly' else return 'not a vegan dish'

// if gluten free = true then, return 'gluten free' else return 'contains gluten'

// if citrus free = true then, return 'citrus free' else return 'has citrus in it'

// Our + this.name + 'is' + if vegan=false, then n


console.log("Apple Fritters are life!")























