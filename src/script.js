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

let pizza = new MargaritaPizza(new BigPizza());
pizza.addTopping(new CheeseBoard());
pizza.addTopping(new CheddarParmesan());
console.log(pizza.getName());
console.log(pizza.getSize());
console.log(pizza.getToppings());
console.log(pizza.calculatePrice() + " руб");
console.log(pizza.calculateCalories() + " ккал");

let pizza2 = new BavarianPizza(new SmallPizza());
pizza2.addTopping(new CheeseBoard());
pizza2.removeTopping(new CheeseBoard());
pizza2.addTopping(new CreamyMozarella());
console.log(pizza2.getName());
console.log(pizza2.getSize());
console.log(pizza2.getToppings());
console.log(pizza2.calculatePrice() + " руб");
console.log(pizza2.calculateCalories() + " ккал");