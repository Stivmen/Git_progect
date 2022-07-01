let box = [];
const container = document.querySelector('.container');
fetchRequest();

function fetchRequest() {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=48.374806&lon=35.178537&appid=d813e8ffac67731e2e3a2ca923ae3f56").then(response => {
    return response.json();
    }).then(data => {
        while (container.firstChild){
            container.removeChild(container.firstChild);
        };

        window.localStorage.clear();
        box = data;
        console.log(data);

        let city = box.name;
        let temp =(Math.round(box.main.temp) - 273,15);
        let feelsLike = (Math.round(box.main.feels_like) - 273,15);
        let weatherStatus = box.weather[0].main;
        let weatherIcon = data.weather[0].icon;

        window.localStorage.setItem("city", city);
        window.localStorage.setItem("temp", temp);
        window.localStorage.setItem("feelsLike", feelsLike);
        window.localStorage.setItem("weatherStatus", weatherStatus);
        window.localStorage.setItem("weatherIcon", weatherIcon);


        const block = `
                <div class="weather">
                    <div class="title-holder">
                        <h1 class="city">${city}</h1>
                        <img src="https://api.openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}" class="status">
                    </div>
                    <div class="info-holder">
                        <ul class="list-holder">
                            <li class="list-item">Temperature: ${temp}</li>
                            <li class="list-item">Feels Like: ${feelsLike}</li>
                            <li class="list-item">Weather Status: ${weatherStatus}</li>
                            
                        </ul>
                    </div>
                </div>
                `;
        container.insertAdjacentHTML('beforeend', block);
        console.log(window.localStorage.timeNow);
        

    })
    
}

setInterval(fetchRequest, 7200000)


//   48.374806   35.178537