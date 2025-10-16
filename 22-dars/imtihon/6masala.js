function returnTime(){
    setInterval(() => {
        let date = new Date()
        console.log(date.getSeconds());
    }, 1000);
    
}

returnTime()


