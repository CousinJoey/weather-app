import listeners from "./DOM";

export async function getData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ff43689014e68a973f7dae707de41dfa`, {mode: 'cors'});
    const weatherData = await response.json();

    let lat = weatherData.coord.lat;
    let lon = weatherData.coord.lon;
    let location = weatherData.name;
    let feelsLike = processFeelsLike(weatherData.main.feels_like);
    let temp = processTemp(weatherData.main.temp);
    let description = weatherData.weather[0].description;

    getForecast(lat, lon);

    const weather = new Weather (
        location,
        feelsLike.feelsLikeCels,
        feelsLike.feelsLikeFar,
        temp.tempCels,
        temp.tempFar,
        description,
    );

    weatherStorage.weatherArray.push(weather);

    console.log(weatherStorage.weatherArray);


}

async function getForecast(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ff43689014e68a973f7dae707de41dfa`, {mode: 'cors'});
    const forecastData = await response.json();

    let forecastDataArray = forecastData.list;

    for (let i = 0; i < forecastDataArray.length; i += 8) {
        let date = forecastDataArray[i].dt_txt;
        let forecastTemp = processTemp(forecastDataArray[i].main.temp);
        let forecastDescription = forecastDataArray[i].weather[0].description;

        const forecast = new Forecast (
            date,
            forecastTemp.tempCels,
            forecastTemp.tempFar,
            forecastDescription
        )

        forecastStorage.forecastArray.push(forecast);

    }

}


function processFeelsLike(feelsLike) {

    let feelsLikeCels = Math.ceil((feelsLike - 273.15));

    let feelsLikeFar = Math.ceil(((feelsLike - 273.15) * 9/5) + 32);

    return {
        feelsLikeCels,
        feelsLikeFar,
    }

}


function processTemp(temp) {

    let tempCels = Math.ceil((temp - 273.15));

    let tempFar = Math.ceil(((temp - 273.15) * 9/5) + 32);

    return {
        tempCels,
        tempFar,
    }
}


class Weather {
    constructor(location, feelsLikeCels, feelsLikeFar, tempCels, tempFar, description) {
        this.location = location,
        this.feelsLikeCels = feelsLikeCels,
        this.feelsLikeFar = feelsLikeFar,
        this.tempCels = tempCels,
        this.tempFar = tempFar,
        this.description = description
    }
}


export const weatherStorage = (() => {

    let weatherArray = [];

    return {
        weatherArray
    };

})();


class Forecast {
    constructor(date, forecastTempCels, forecastTempFar, forecastDescription) {
        this.date = date,
        this.forecastTempCels = forecastTempCels,
        this.forecastTempFar = forecastTempFar,
        this.forecastDescription = forecastDescription
    }
}


export const forecastStorage = (() => {

    let forecastArray = [];

    return {
        forecastArray
    };

})();



listeners();


