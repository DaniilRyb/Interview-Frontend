const promise1 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => resolve(json))
        .catch((err) => reject(err))
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise2 status is OK!!!")
    }, 200)
})


const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise3 status is OK!!!"), 1000)
})

Promise.all([promise1, promise2, promise3])
    .then(() => console.log("ok!!!!"))
    .catch((err) => console.log(err))

Promise.race([promise1, promise2, promise3])
    .then(r => console.log(r))
    .catch((err) => console.log(err))


const slow = new Promise(resolve => setTimeout(() => resolve(1), 6000))
const fast = new Promise(resolve => setTimeout(() => resolve(2), 3000))
const theFastest = new Promise((resolve, reject) =>
    setTimeout(() => reject('Some error'), 1000))

Promise.any([slow, fast, theFastest])
    .then(() => console.log("OK"))
    .catch(() => console.log("Some error"))

