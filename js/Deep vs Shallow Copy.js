// 🧠 Topic 8: Deep vs Shallow Copy (Senior-Level Understanding)

// Primitive (safe copy)

let a = 10
let b = a

b = 20
console.log(a) // 10 

// Reference (danger zone)
const obj1 = { name: "prem" }

const obj2 = obj1

obj2.name = "Rahul"
console.log(obj1.name) // Rahul due to Reference 


// 3. Shallow Copy


const user = {
    user: "Hello",
    address: {
        city: "Bangalore"
    }
}

const cpoyUser = { ...user }

cpoyUser.address.city = "Delhi"
cpoyUser.user = "Prem"

// console.log(user)
// console.log("Coppy ", cpoyUser)


// 4. Deep Copy

const user1 = {
    user: "Hello",
    address: {
        city: "Bangalore"
    }
}

const coppyuser1 = structuredClone(user1)
coppyuser1.address.city = "Delhi"
coppyuser1.user = "Prem"

console.log(user1)
console.log("Coppy1 ", coppyuser1)


// 🔹 3. Custom Recursive Function


function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj

    const copy = Array.isArray(obj) ? [] : {}

    for (let o in obj) {
        copy[o] = deepClone(obj[o])
    }

    return copy
}

const user2 = {
    user: "Data",
    address: {
        city: "Bangalore data"
    }
}
const us = deepClone(user2)

us.user = "New User"
us.address.city = "New City"
console.log(us)
console.log(user2)