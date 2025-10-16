async function start() {
    let a = await fetch("https://jsonplaceholder.typicode.com/users")
    a = await a.json()
    for (let i of a) {
        console.log(i);
    }
}

start()
