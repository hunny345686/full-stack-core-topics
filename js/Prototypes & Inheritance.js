// 🧠 Topic 4: Prototypes & Inheritance (Deep Dive)


const obje = {
    name: "Prem"
}

const objPropertys = Object.getPrototypeOf(obje);

console.log(objPropertys)

const user = {
    name: "Prem"
};

console.log(user.toString());

// user → Object.prototype → found toString()


function Persone(name) {
    this.name = name
}

Persone.prototype.sayHello = function () {
    return `${this.name} Saing hello`
}

const p1 = new Persone("Jhon")
console.log(p1.sayHello())


function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function () {
    console.log("eating");
};

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
    console.log("bark");
};

const d = new Dog("Tommy");
d.eat();
d.bark();


const obj = { a: 1 };

obj.hasOwnProperty("a"); // true
obj.hasOwnProperty("toString"); // false