// ⚡ Topic 7: Debouncing & Throttling (Deep Dive)

// 3. Debouncing (Deep Dive)    


function debounce(fn, delay) {
    // With debounce 
    let timer = null
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }

    // without Debounce
    return function (...args) {
        fn(args)
    }
}

const search = debounce((q) => {
    console.log("API CALLS:", q)
}, 400)


// Flow => Call => Clear Prev Timer => Set New Timer
search("r");
search("re");
search("rea");


// 4. Throttling (Deep Dive)


function throttle(fn, delay) {
    let inThrottle = false;
    return function (...args) {
        if (!inThrottle) {
            fn.apply(this, args)
            inThrottle = true
        }
        setTimeout(() => {
            inThrottle = false
        }, delay);
    }
}

const logScroll = throttle(() => {
    console.log("scrolling...")
}, 500)
logScroll()
// setInterval(() => {
//     logScroll()
// }, 1000);


// 🔥 2. Throttle with Trailing Execution


function throttleTE(fn, delay) {
    let lastCall = 0;

    return function (...args) {

        const now = Date.now()
        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args)
        }
    }
}
