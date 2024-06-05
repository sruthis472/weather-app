let placeName = document.getElementById('place');

placeName.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.keyCode === 13) {
   search()
  }
});

search = async()=>{
    
    let placeName = place.value;
    
    if(placeName){
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=5fe36b192ffd1c36dffb6752bc1722b2&units=metric`)
        response.json().then((data)=>{
         console.log(data);  
         console.log(data.main.temp); 
         console.log(data.weather[0].main);
        

    
    
        if(data.weather[0].main=='Clear'){
            img.src = "./images/clear-day.svg";
         }
        else if(data.weather[0].main=='Rain'){
            img.src = "./images/rain.svg";
        }
        else if(data.weather[0].main=='Snow'){
            img.src = "./images/snow.svg";
        }
        else if(data.weather[0].main=='Clouds'){
            img.src = "./images/cloudy.svg";
        }
        else if(data.weather[0].main=='Mist'){
            img.src = "./images/partly-cloudy-day-rain-mist.svg";
        }
        else if(data.weather[0].main=='Haze'){
            img.src = "./images/partly-cloudy-day-haze.svg";
        }

        
        document.getElementById('place').value = `${placeName}`;
        pname.innerHTML =`<h1>${placeName}</h1>` 
        temp.innerHTML = `<h2>${parseInt(data.main.temp)}°C </h2>`
        desc.innerHTML = `<h4 class="fw-bolder border shadow">${data.weather[0].description}</h4>`
      
        humidity.innerHTML = `<h5>Humidity : ${data.main.humidity}%</h5>`
                           
                            
        pressure.innerHTML = `<h5>Pressure : ${data.main.pressure}mb</h5>`
                           
                                                
        wind.innerHTML = `<h5>Wind Speed : ${data.wind.speed}Km/h </h5>`
                            
                       


        })
    }
    else{
        alert("Please enter a place name");
    }
}
const resetBtn = document.getElementById('btn');
resetBtn.addEventListener('click', reset);
function reset(){
    placeName.value = "";
    img.src = "./images/weather.png";
    pname.innerHTML = ""
    temp.innerHTML = '';
    desc.innerHTML = `Description`;
    humidity.innerHTML = `Humidity`;
    pressure.innerHTML = `Pressure`;
    wind.innerHTML =`Windspeed`;
    
    
}

