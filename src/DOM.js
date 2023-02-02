import { getData, weatherStorage, forecastStorage } from ".";

export function listeners() {

    document.addEventListener("click", (e) => {

        if (e.target.matches("#btn-submit")) {

            e.preventDefault();

            let todayWeather = document.getElementById("today-weather");
            let forecast = document.getElementById("forecast");

            todayWeather.textContent = "Loading..."
            forecast.textContent = "";


            getData(document.getElementById("inputSearch").value);
        }

        if (e.target.matches("#checkbox-input")) {
            renderToday();
            renderForecast();
        }

    });
}

window.addEventListener("keydown", keyboardFunc)

function keyboardFunc(e) {
   if (e.key === "Enter") document.getElementById("btn-submit").click();
}

export function renderToday() {

    let unitCheck = document.getElementById("checkbox-input").checked

    let todayWeather = document.querySelector("#today-weather");

    todayWeather.textContent = "";

    let iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");

    let imageContainer = document.createElement("div")

    let icon = document.createElement("img");
    icon.classList.add("weather-icon");
    icon.src = `http://openweathermap.org/img/wn/${weatherStorage.weatherArray[0].weatherIcon}@2x.png`

    imageContainer.appendChild(icon);

    let text = document.createElement("p");
    text.textContent = `${weatherStorage.weatherArray[0].description}`

    iconContainer.appendChild(imageContainer);
    
    let locationContainer = document.createElement("div");
    locationContainer.classList.add("location-container");

    let location = document.createElement("p");
    location.textContent = `${weatherStorage.weatherArray[0].location},`;

    let extraDataContainer = document.createElement("div");
    extraDataContainer.classList.add("extra-data-container");

    extraDataContainer.appendChild(text);


    let tempContainer = document.createElement("div");


    if (unitCheck === true) {
        let feelsLikeCels = document.createElement("p");
        feelsLikeCels.textContent = `Feels Like: ${weatherStorage.weatherArray[0].feelsLikeCels} °C`;

        let tempCels = document.createElement("p");
        tempCels.textContent = `${weatherStorage.weatherArray[0].tempCels} °C`;

        extraDataContainer.appendChild(feelsLikeCels);
        tempContainer.appendChild(tempCels);

    } else if (unitCheck === false) {

        let feelsLikeFar = document.createElement("p");
        feelsLikeFar.textContent = `Feels Like: ${weatherStorage.weatherArray[0].feelsLikeFar} °F`

        let tempFar = document.createElement("p");
        tempFar.textContent = `${weatherStorage.weatherArray[0].tempFar} °F`;

        extraDataContainer.appendChild(feelsLikeFar);
        tempContainer.appendChild(tempFar);

    }

    locationContainer.appendChild(location);
    locationContainer.appendChild(tempContainer);

    todayWeather.appendChild(locationContainer);
    todayWeather.appendChild(iconContainer);
    todayWeather.appendChild(extraDataContainer);

}

export function renderForecast() {

    let unitCheck = document.getElementById("checkbox-input").checked

    let forecast = document.querySelector("#forecast")

    forecast.textContent = "";

    for (let i = 0; i < forecastStorage.forecastArray.length; i++) {

        let forecastItem = document.createElement("div");
        forecastItem.classList.add("forecast-item");

        let iconContainer = document.createElement("div");
        iconContainer.classList.add("forecast-icon-container");

        let imageContainer = document.createElement("div")

        let icon = document.createElement("img");
        icon.classList.add("forecast-icon");
        icon.src = `http://openweathermap.org/img/wn/${forecastStorage.forecastArray[i].forecastIcon}@2x.png`

        iconContainer.appendChild(imageContainer);

        let dateContainer = document.createElement("div");
        dateContainer.classList.add("date-container");

        let date = document.createElement("p");
        date.textContent = `${forecastStorage.forecastArray[i].date},`

        dateContainer.appendChild(date);

        imageContainer.appendChild(icon);

        let extraDataContainer = document.createElement("div");

        if (unitCheck === true) {
            let ForecastTempCels = document.createElement("p");
            ForecastTempCels.textContent = `${forecastStorage.forecastArray[i].forecastTempCels} °C`
            extraDataContainer.appendChild(ForecastTempCels);
        } else if (unitCheck === false) {
            let ForecastTempFar = document.createElement("p");
            ForecastTempFar.textContent = `${forecastStorage.forecastArray[i].forecastTempFar} °F`
            extraDataContainer.appendChild(ForecastTempFar);
        }


        dateContainer.appendChild(extraDataContainer);
        forecastItem.appendChild(dateContainer);
        forecastItem.appendChild(iconContainer);

        forecast.appendChild(forecastItem);


    }
}

export function errorMessage() {
    let todayWeather = document.getElementById("today-weather");
    todayWeather.textContent = "City not found. Please double check spacing and spelling or try a new city name."
}

/*
        location,
        feelsLike.feelsLikeCels,
        feelsLike.feelsLikeFar,
        temp.tempCels,
        temp.tempFar,
        description,
*/