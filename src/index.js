
async function getData() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=detroit&APPID=ff43689014e68a973f7dae707de41dfa', {mode: 'cors'});
    const weatherData = await response.json();

    let lat = weatherData.coord.lat;
    let lon = weatherData.coord.lon;
    let location = weatherData.name;
    let feelsLike = weatherData.main.feels_like;
    let temp = weatherData.main.temp;
    let description = weatherData.weather[0].description;

    processData(feelsLike, temp);

    getForecast(lat, lon);

    return {
        location,
        feelsLike,
        description,
    }
}

function processData(feelsLike, temp) {

    feelsLikeCels = Math.ceil((feelsLike - 273.15));

    feelsLikeFar = Math.ceil(((feelsLike - 273.15) * 9/5) + 32);

    console.log("Cels = " + feelsLikeCels + " " + "Far = " + feelsLikeFar);

    tempCels = Math.ceil((temp - 273.15));

    tempFar = Math.ceil(((temp - 273.15) * 9/5) + 32);

    console.log("Cels = " + tempCels + " " + "Far = " + tempFar);

    return {
        feelsLikeCels,
        feelsLikeFar,
        tempCels,
        tempFar,
    }

}

async function getForecast(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ff43689014e68a973f7dae707de41dfa`, {mode: 'cors'});
    const forecastData = await response.json();

    let test1 = forecastData.list[0].dt_txt;
    let test2 = forecastData.list[8].dt_txt;
    let test3 = forecastData.list[16].dt_txt;

    console.log(forecastData);
    console.log(test1);
    console.log(test2);
    console.log(test3);

}



getData();


