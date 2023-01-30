import { getData, weatherStorage, forecastStorage } from ".";

function listeners() {

    document.addEventListener("click", (e) => {

        if (e.target.matches(".btn-submit")) {
            getData(document.getElementById("inputSearch").value);
            console.log(weatherStorage.weatherArray);
            console.log(forecastStorage.forecastArray);
        }

    });


}

export default listeners