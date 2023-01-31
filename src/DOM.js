import { getData, weatherStorage, forecastStorage } from ".";

export function listeners() {

    document.addEventListener("click", (e) => {

        if (e.target.matches(".btn-submit")) {
            getData(document.getElementById("inputSearch").value);
            let check = document.getElementById("checkbox-input").checked;
            console.log(check);
        }

        if (e.target.matches("#checkbox-input")) {
            renderToday();
            renderForecast();
        }

    });


}

export function renderToday() {

    let unitCheck = document.getElementById("checkbox-input").checked

    let todayWeather = document.querySelector("#today-weather");

    todayWeather.textContent = "";

    let iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");

    let imageContainer = document.createElement("div")

    let icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-cloud");

    imageContainer.appendChild(icon);

    let textContainer = document.createElement("div");

    let text = document.createElement("p");
    text.textContent = `${weatherStorage.weatherArray[0].description}`

    textContainer.appendChild(text);

    iconContainer.appendChild(imageContainer);
    iconContainer.appendChild(textContainer);
    

    let locationContainer = document.createElement("div");

    let location = document.createElement("p");
    location.textContent = `${weatherStorage.weatherArray[0].location}`;

    let extraDataContainer = document.createElement("div");


    if (unitCheck === true) {
        let feelsLikeCels = document.createElement("p");
        feelsLikeCels.textContent = `Feels Like: ${weatherStorage.weatherArray[0].feelsLikeCels} °C`;

        let tempCels = document.createElement("p");
        tempCels.textContent = `Tempature: ${weatherStorage.weatherArray[0].tempCels} °C`;

        extraDataContainer.appendChild(feelsLikeCels);
        extraDataContainer.appendChild(tempCels);

    } else if (unitCheck === false) {

        let feelsLikeFar = document.createElement("p");
        feelsLikeFar.textContent = `Feels Like: ${weatherStorage.weatherArray[0].feelsLikeFar} °F`

        let tempFar = document.createElement("p");
        tempFar.textContent = `Tempature: ${weatherStorage.weatherArray[0].tempFar} °F`;

        extraDataContainer.appendChild(feelsLikeFar);
        extraDataContainer.appendChild(tempFar);

    }

    locationContainer.appendChild(location);

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

        let icon = document.createElement("i");
        icon.classList.add("fa-solid");
        icon.classList.add("fa-cloud");

        let textContainer = document.createElement("div");

        let text = document.createElement("p");
        text.textContent = `${forecastStorage.forecastArray[i].forecastDescription}`

        textContainer.appendChild(text);

        iconContainer.appendChild(imageContainer);
        iconContainer.appendChild(textContainer);

        let dateContainer = document.createElement("div");

        let date = document.createElement("p");
        date.textContent = `${forecastStorage.forecastArray[i].date}`

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



        forecastItem.appendChild(dateContainer);
        forecastItem.appendChild(iconContainer);
        forecastItem.appendChild(extraDataContainer);

        forecast.appendChild(forecastItem);


    }



}

/*
        location,
        feelsLike.feelsLikeCels,
        feelsLike.feelsLikeFar,
        temp.tempCels,
        temp.tempFar,
        description,
*/