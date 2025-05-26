class Pizza {
    constructor(name, size, price, kkal) {
        this.name = name;
        this.size = size;
        this.price = price;
        this.kkal = kkal;
        this.toppings = [];
    }

    addTopping(topping) {
        if (this.toppings.find(t => t.name === topping.name) == undefined) {
            if (this.size.name === "Большая") {
                topping.price = topping.price * 2;
            }
            this.toppings.push(topping);
        }
    }

    removeTopping(topping) {
        this.toppings = this.toppings.filter(t => t.name !== topping.name);
    }

    getToppings() {
        return this.toppings.map(t => t.name);
    }

    getSize() {
        return this.size.name;
    }

    getName() {
        return this.name;
    }

    calculatePrice() {
        let totalPrice = this.price + this.size.price + this.toppings.reduce((total, topping) => {
            return total += topping.price;
        }, 0);
        return totalPrice;
    }
    
    calculateCalories() {
        let totalKkal = this.kkal + this.size.kkal + this.toppings.reduce((total, topping) => {
            return total += topping.kkal;
        }, 0);
        return totalKkal;
    }
}

class Size {
    constructor(name, price, kkal) {
        this.name = name;
        this.price = price;
        this.kkal = kkal;
    }
}

class Topping {
    constructor(name, price, kkal) {
        this.name = name;
        this.price = price;
        this.kkal = kkal;
    }
}

class MargaritaPizza extends Pizza {
    constructor(size) {
        super("Маргарита", size, 500, 300);
    }
}

class PepperoniPizza extends Pizza {
    constructor(size) {
        super("Пепперони", size, 800, 400);
    }
}

class BavarianPizza extends Pizza {
    constructor(size) {
        super("Баварская", size, 700, 450);
    }
}

class BigPizza extends Size {
    constructor() {
        super("Большая", 200, 200);
    }
}

class SmallPizza extends Size {
    constructor() {
        super("Маленькая", 100, 100);
    }
}

class CreamyMozarella extends Topping {
    constructor() {
        super("Сливочная моцарелла", 50, 20);
    }
}

class CheeseBoard extends Topping {
    constructor() {
        super("Сырный борт", 150, 50);
    }
}

class CheddarParmesan extends Topping {
    constructor() {
        super("Чеддер и пармезан", 150, 50);
    }
}

let pizza;
let idxPizza = 0;
const result = document.querySelector(".result");

function createPizza(index, size) {
    if (index === 0) return new PepperoniPizza(size);
    else if (index === 1) return new MargaritaPizza(size);
    return new BavarianPizza(size);
}

function addToppings(toppings) {
    toppings.forEach(t => {
        if(t.textContent.match("Сырный бортик")?.length > 0) {
            pizza.addTopping(new CheeseBoard());
        }
        if(t.textContent.match("Сливочная моцарелла")?.length > 0) {
            pizza.addTopping(new CreamyMozarella());
        }
        if(t.textContent.match("Чеддер и пармезан")?.length > 0) {
            pizza.addTopping(new CheddarParmesan());
        }
    });
}

function changeResultData() {
    let price = pizza.calculatePrice();
    let kkal = pizza.calculateCalories();
    result.textContent = `${price} ₽ (${kkal} кКал)`
}

function hideBorderPizza() {
    pizzaCards.forEach(item => item.classList.remove("pizza-card--active"));
}

function showBorderPizza(index) {
    pizzaCards[index].classList.add("pizza-card--active");
    let size = document.querySelector(".size--active");
    if(size.textContent === "Маленькая") {
        pizza = createPizza(index, new SmallPizza());
    }
    else {
        pizza = createPizza(index, new BigPizza());
    }
    let toppings = document.querySelectorAll(".topping-card--active");
    addToppings(toppings);
    changeResultData();
}

function hideTabSize() {
    size.forEach(item => item.classList.remove("size--active"));
}

function showTabSize(index) {
    size[index].classList.add("size--active");
    showBorderPizza(idxPizza);
}

function changeBorderTopping(t, index) {
    t.classList.toggle("topping-card--active");
    showBorderPizza(idxPizza);
}

const pizzaCards = document.querySelectorAll(".pizza-card");
const size = document.querySelectorAll(".size");
const toppingCards = document.querySelectorAll(".topping-card");

pizzaCards.forEach((piz, index) => piz.addEventListener("click", () => {
    hideBorderPizza();
    showBorderPizza(index);
    idxPizza = index;
}));

size.forEach((s, index) => s.addEventListener("click", () => {
    hideTabSize();
    showTabSize(index);
}));

toppingCards.forEach((t, index)=> t.addEventListener("click", () => {
    changeBorderTopping(t, index);
}));


//let pizza = new MargaritaPizza(new BigPizza());
//pizza.addTopping(new CheeseBoard());
//pizza.addTopping(new CheddarParmesan());
//console.log(pizza.getName());
//console.log(pizza.getSize());
//console.log(pizza.getToppings());
//console.log(pizza.calculatePrice() + " руб");
//console.log(pizza.calculateCalories() + " ккал");

//let pizza2 = new BavarianPizza(new SmallPizza());
//pizza2.addTopping(new CheeseBoard());
//pizza2.removeTopping(new CheeseBoard());
//pizza2.addTopping(new CreamyMozarella());
//console.log(pizza2.getName());
//console.log(pizza2.getSize());
//console.log(pizza2.getToppings());
//console.log(pizza2.calculatePrice() + " руб");
//console.log(pizza2.calculateCalories() + " ккал");