// ⚡ Topic 5: this, bind, call, apply (Deep Dive)

//  => This

// console.log(this); //window object

function show() {
    console.log(this);// globle object
}

// show();

const user = {
    name: "prem",
    fn: function () {
        console.log(this.name)
    }
}
// console.log(user.fn())

const obj = {
    name: "Prem",
    greet: function () {
        console.log(this.name);
    }
};
obj.greet()
// console.log(hello())


const user1 = {
    name: "Prem",
    greet() {
        console.log(this.name);
    }
};
// Bind

const fn = user1.greet.bind(user1);
fn() // ❌ undefined


// call 
function greet(age) {
    console.log(this.name, age)
}

const user2 = { name: "Prem" };

greet.call(user, 25);
greet.apply(user, [25]);


const u1 = { name: "Prem" };
const u2 = { name: "Rahul" };

greet.call(u1, 34);
greet.apply(u2, [55]);


const obj1 = {
    name: "Tesign",
    greet() {
        return () => {
            console.log(this.name);
        };
    }
};

obj1.greet()();


const obj3 = {
    value: 10,
    getValue() {
        return () => {
            return this.value;
        };
    }
};

console.log(obj3.getValue()())



const obj4 = {
    name: "settime",
    greet() {
        console.log(this.name);
    }
};

setTimeout(() => {
    obj4.greet()
}, 0);