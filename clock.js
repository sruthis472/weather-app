function getTime(){
    const time = new Date()
    let timeDiv = document.getElementById("times");
    let dateDayDiv = document.getElementById("date");
    
    const day = time.getDate();
    const month = time.getMonth();
    const montharray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthname = montharray[month];
    const year = time.getFullYear();
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[time.getDay()];
    dateDayDiv.innerHTML= `${day}<sup>th </sup>${monthname} ${year} , ${dayOfWeek}`
    
    const hours = time.getHours();
    const min = time.getMinutes();
    timeDiv.innerHTML =`${hours}:${min} ${hours>=12?'PM':'AM'}`

    setTimeout(()=>{
        getTime()
    },1000)
}
getTime()