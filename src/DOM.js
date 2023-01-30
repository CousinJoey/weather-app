import { getData, weatherStorage, forecastStorage } from ".";

function listeners() {

    document.addEventListener("click", (e) => {

        if (e.target.matches(".btn-submit")) {
            getData(document.getElementById("inputSearch").value);
            renderUI();
        }

    });


}

function renderUI() {


    // let todayWeather = document.querySelector(".today-weather")



}


export default listeners