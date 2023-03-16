let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((value1) => {

    console.log(value1.status)
    console.log(value1.ok)
    return value1.json()
}).then((value2) => {
    console.log(value2)

    // Create HTML elements for the weather data
    let cityElement = document.getElementById("wind");
    let temperatureElement = document.getElementById("temperature");
    let descriptionElement = document.getElementById("description");

    cityElement.innerHTML = `Wind is ${value2.wind}`;
    temperatureElement.innerHTML = `Temprature is ${value2.temperature}`;
    descriptionElement.innerHTML = `Weather condition ${value2.description}`;
})    
