// Topic 1: Closures & Scope (DEEP DIVE)

function outer() {
    let fname = "Prem"

    return function inner() {
        let lanem = "Singh"
        // console.log(fname, lanem)
    }
}

function createBankAccount() {
    let balance = 0;

    return {
        deposit(amount) {
            balance += amount;
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount();
account.deposit(100);
// console.log(account.getBalance()); // 100

// Closures are used in:
// 🔹 1. Function Currying

const mult = (a) => (b) => a * b
const dobule = mult(2)
dobule(4)

// 🔹 2. Memoization (Performance Optimization)

function memo(fn) {
    const cache = {}

    return function (x) {
        if (cache[x]) return cache[x]

        const result = fn(x)
        cache[x] = result

        return result
    }
}

function getValue(a) {

    return function () {
        return a
    }
}
const callFn = getValue(100)
getValue = null
// console.log(callFn())
// console.log(getValue)
