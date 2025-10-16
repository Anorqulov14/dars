function sanovchi() {
    let count = 1;
    let timer = setInterval(() => {
        console.log(count);
        if (count === 10) {
            clearInterval(timer);
        }
        count++;
    }, 2000);
}


sanovchi();
