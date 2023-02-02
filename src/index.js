import { listeners, renderForecast, renderToday, errorMessage } from "./DOM";
import getDay from "date-fns/getDay";

export async function getData(city) {

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ff43689014e68a973f7dae707de41dfa`, {mode: 'cors'});
        const weatherData = await response.json();

        if (weatherData.cod == 404) {
            throw new Error("City not found");
        }
        
        let lat = weatherData.coord.lat;
        let lon = weatherData.coord.lon;
        let location = weatherData.name;
        let feelsLike = processFeelsLike(weatherData.main.feels_like);
        let temp = processTemp(weatherData.main.temp);
        let description = weatherData.weather[0].description;
        let weatherIcon = weatherData.weather[0].icon;

        getForecast(lat, lon);

        const weather = new Weather (
            location,
            feelsLike.feelsLikeCels,
            feelsLike.feelsLikeFar,
            temp.tempCels,
            temp.tempFar,
            description,
            weatherIcon
        );

        weatherStorage.weatherArray = [];

        weatherStorage.weatherArray.push(weather);

    } catch (error) {
        errorMessage();
    };

}

async function getForecast(lat, lon) {

    try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ff43689014e68a973f7dae707de41dfa`, {mode: 'cors'});
        const forecastData = await response.json();

        if (forecastData.cod == 404) {
            throw new Error("City not found");
        }

        let forecastDataArray = forecastData.list;

        forecastStorage.forecastArray = [];

        for (let i = 8; i < forecastDataArray.length; i += 8) {
            let date = processDate(forecastDataArray[i].dt_txt);
            let location = forecastData.city.name
            let forecastTemp = processTemp(forecastDataArray[i].main.temp);
            let forecastDescription = forecastDataArray[i].weather[0].description;
            let forecastIcon = forecastDataArray[i].weather[0].icon;

            const forecast = new Forecast (
                date,
                location,
                forecastTemp.tempCels,
                forecastTemp.tempFar,
                forecastDescription,
                forecastIcon
            )


            forecastStorage.forecastArray.push(forecast);

        }

        renderToday();
        renderForecast();

    } catch (error) {
        alert("Error: " + error.message);
        console.log("error?")
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

function processDate(date) {

    let date_string = date;
    let date_parts = date_string.split(" ")[0].split("-");
    let year = parseInt(date_parts[0]);
    let month = parseInt(date_parts[1]) - 1;
    let day = parseInt(date_parts[2]);

    const dayByString = getDay(new Date(year, month, day));

    let newDay;

    switch(dayByString) {
        case 0:
            newDay = "Sunday";
            return newDay;
          case 1:
            newDay = "Monday";
            return newDay;
          case 2:
            newDay = "Tuesday";
            return newDay;
          case 3:
            newDay = "Wednesday";
            return newDay;
          case 4:
            newDay = "Thursday";
            return newDay;
          case 5:
            newDay = "Friday";
            return newDay;
          case 6:
            newDay = "Saturday";
            return newDay;
    }
}


class Weather {
    constructor(location, feelsLikeCels, feelsLikeFar, tempCels, tempFar, description, weatherIcon) {
        this.location = location,
        this.feelsLikeCels = feelsLikeCels,
        this.feelsLikeFar = feelsLikeFar,
        this.tempCels = tempCels,
        this.tempFar = tempFar,
        this.description = description,
        this.weatherIcon = weatherIcon
    }
}


export const weatherStorage = (() => {

    let weatherArray = [];

    return {
        weatherArray
    };

})();


class Forecast {
    constructor(date, location, forecastTempCels, forecastTempFar, forecastDescription, forecastIcon) {
        this.date = date,
        this.location = location,
        this.forecastTempCels = forecastTempCels,
        this.forecastTempFar = forecastTempFar,
        this.forecastDescription = forecastDescription,
        this.forecastIcon = forecastIcon
    }
}


export const forecastStorage = (() => {

    let forecastArray = [];

    return {
        forecastArray
    };

})();



listeners();


