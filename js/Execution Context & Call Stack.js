// 🧠 Topic 2: Execution Context & Call Stack (Deep Dive)

function one() {
    two()
}

function two() {
    three()
}

function three() {
    console.log("done")
}
one()
// Call Stack == > [Global]-- > [one]-- > [tow]-- > [three]
// Unwinds:
// [ three ] → done → removed
// [ two ] → removed
// [ one ] → removed

function a() {
    console.log("A");
    b();
    console.log("A end");
}

function b() {
    console.log("B");
}

a();