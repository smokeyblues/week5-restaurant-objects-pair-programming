//restaurant food items

class Plate {
    constructor(plateType){
        this.name = plateType.name;
        this.description = plateType.description;
        this.price = plateType.price;
        this.ingredients = plateType.ingredients;
    } 
    stringify() {
        return 'The ' + this.name + ' has been described as ' + this. description + ' by previous customers that enjoyed this plate. This plate costs only $' + this.price + '.';


    }
    isVegan() {
       for (var i = 0; i < this.ingredients.length; i++) {
           console.log(this.ingredients[i].name + ': ' + this.ingredients[i].vegan)
           if (!this.ingredients[i].vegan) {
            console.log(false)
            return false;
        }
       }
        return true;
   }
    isGlutenFree() {
       for (var i = 0; i < this.ingredients.length; i++) {
           console.log(this.ingredients[i].name + ': ' + this.ingredients[i].glutenFree )
           if (!this.ingredients[i].glutenFree ) {
            console.log(false)
            return false;
        }
       }
        return true;
   }
   isCitrusFree() {
       for (var i = 0; i < this.ingredients.length; i++) {
           console.log(this.ingredients[i].name + ': ' + this.ingredients[i].citrusFree )
           if (!this.ingredients[i].citrusFree ) {
            console.log(false)
            return false;
        }
       }
        return true;
   }
}   

class Drink extends Plate {
    constructor (drinkType){
        super(drinkType)
    }
//     stringify() {
        
//     }
}







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
        this.menu = restType.menu;
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

var appleFritter = new Plate({
    name : 'Apple Fritter',
    calories : 450,
    vegan : false,
    glutenFree : false,
    citrusFree : true,
});


// burrito plate here


var tortilla = new FoodItem({
    name : 'tortilla',
    calories : 200,
    vegan : false,
    glutenFree : false,
    citrusFree : true,
});
var beans = new FoodItem({
    name : 'beans',
    calories : 50,
    vegan : true,
    glutenFree : true,
    citrusFree : true,
});
var eggs = new FoodItem({
    name : 'eggs',
    calories : 160,
    vegan : false,
    glutenFree : true,
    citrusFree : true,
});
var potatoes = new FoodItem({
    name : 'potatoes',
    calories : 120,
    vegan : true,
    glutenFree : true,
    citrusFree : true,
});
var cilantro = new FoodItem({
    name : 'cilantro',
    calories : 5,
    vegan : true,
    glutenFree : true,
    citrusFree : false,
});
var cheese = new FoodItem({
    name : 'cheese',
    calories : 220,
    vegan : false,
    glutenFree : true,
    citrusFree : true,
});
var chicken = new FoodItem({
    name : 'chicken',
    calories : 180,
    vegan : false,
    glutenFree : true,
    citrusFree : false,
});

var burrito = new Plate({
    name : 'Breakfast Burrito',
    description : 'smothered and cheesy, clothed in the finest tortilla in all the land.',
    price : 25,
    ingredients : [tortilla, beans, eggs, potatoes, cilantro, cheese, chicken],
});


//guacamole plate

var avocado = new FoodItem({
    name : 'avocado',
    calories : 80,
    vegan : true,
    glutenFree : true,
    citrusFree : true,
});
var tomato = new FoodItem({
    name : 'tomato',
    calories : 5,
    vegan : true,
    glutenFree : true,
    citrusFree : true,
});
var onion = new FoodItem({
    name : 'onion',
    calories : 30,
    vegan : true,
    glutenFree : true,
    citrusFree : true,
});
var garlic = new FoodItem({
    name : 'garlic',
    calories : 10,
    vegan : true,
    glutenFree : true,
    citrusFree : true,
});

var guacamole = new Plate({
    name : 'Breakfast Guacamole',
    description : "well, its green and creamy. Sometimes it chunky depending on who made it.",
    price : 12,
    ingredients : [avocado, tomato, onion, garlic, cilantro],
});

//cranberry salad

var quinoa = new FoodItem({
    name : 'quinoa',
    calories : 50,
    vegan : true,
    glutenFree : true,
    citrusFree : true,
});

var cranberries = new FoodItem({
    name : 'cranberries',
    calories : 35,
    vegan : true,
    glutenFree : true,
    citrusFree : true,
});

var lettuce = new FoodItem({
    name : 'lettuce',
    calories : 30,
    vegan : false,
    glutenFree : true,
    citrusFree : true,
});

var quinoaCranberrySalad = new Plate({
    name : 'Quinoa Cranberry Salad',
    description : 'true',
    price : 9,
    ingredients : [quinoa, cranberries, lettuce],
});


//Drink

var tequila = new FoodItem({
    name : 'tequila',
    calories : 50,
    vegan : true,
    glutenFree : true,
    citrusFree : true,
});
var tripleSec = new FoodItem({
    name : 'triple Sec',
    calories : 50,
    vegan : true,
    glutenFree : true,
    citrusFree : true,
});
var limeJuice = new FoodItem({
    name : 'lime juice',
    calories : 5,
    vegan : true,
    glutenFree : true,
    citrusFree : false,
});

var margarita = new Drink({
    name: 'Margarita',
    description: 'Yuuuum, but we limit you to two',
    price: 11.00,
    ingredients : [tequila, tripleSec, limeJuice],
})


var menuPlates = new Menu({
    plates : [burrito, guacamole, margarita],
});


var restaurantMenu = new Restaurant({
    menu : menuPlates,
    name : "Aaron's Breakfast Joint",
    description : "A new take on breakfast, just from Aaron."
});
















