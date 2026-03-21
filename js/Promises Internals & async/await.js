// 🔥 Topic 6: Promises Internals & async/await (Deep Dive)

// getData(function (data) {
//     processData(data, function () {
//         save(result, function () {
//             // CallBack hell
//         })
//     })
// })

// 2. Why Promises Exist    

const promiss = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject("heiil Promise eror ")
        resolve("Hello Promise Done")
    }, 1000)
})

promiss.then((data) => {
    return data
}).then((data) => {
    console.log("@nd Then " + data)
}).catch((err) => {
    console.log(err)
})

// 🔥 Build Your Own Promise (Core Idea)

// class Promise {
//     constructor(executor) {
//         this.state = "Pending"
//         this.value = undefined
//         this.handler = []

//         const resolve = (value) => {
//             this.state = "Fullfill"
//             this.value = value
//             this.handler.forEach((h) => h(value));
//         }
//         executor(resolve);
//     }

//     than(cb) {
//         if (this.state === "Fullfill") {
//             cb(this.value)
//         } else {
//             this.handler.push(cb);
//         }
//     }
// }


// 9. async/await (Syntactic Sugar)

async function test() {
    console.log("P")
    console.log("r")
    const res = await Promise.resolve(10)
    console.log(res)
    console.log("H")
    console.log("E")
}

// test()

// 🔹 3. Retry Logic

async function retry(fn, retry = 3) {
    try {
        const res = await fn()
    } catch (error) {
        if (retry === 0) throw error
        return retry(fn, retry - 1)
    }
}

// 🔥 1. Promise.resolve Flattening

// Promise.resolve(Promise.resolve(5)).then((d) => console.log(d))
// Promise.resolve(Promise.resolve(Promise.resolve(666))).then((d) => console.log(d))

// Slow
// await a()
// await b()

// Fast
// await Promise.all([a(), b()])

async function test1() {
    return await 5;
}

console.log(test1)

