// ⚡ Topic 3: Event Loop (Microtask vs Macrotask)

console.log("Start")

setTimeout(() => {
    console.log("SetTimeOut")
}, 0)

const promise = new Promise((resolv) => {
    console.log("Invoking Promiss")
    return resolv("Promisse")
}).then((data) => {
    console.log(data)
})

console.log("end")

// Example 2 (Tricky)


setTimeout(() => console.log("1"), 0);

Promise.resolve().then(() => {
    console.log("2");
    setTimeout(() => console.log("3"), 0);
});

console.log("4");
