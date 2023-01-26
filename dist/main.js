/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBLHNJQUFzSSxhQUFhO0FBQ25KOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUZBQXlGLElBQUksT0FBTyxJQUFJLDJDQUEyQyxhQUFhO0FBQ2hLOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5hc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9ZGV0cm9pdCZBUFBJRD1mZjQzNjg5MDE0ZTY4YTk3M2Y3ZGFlNzA3ZGU0MWRmYScsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGxldCBsYXQgPSB3ZWF0aGVyRGF0YS5jb29yZC5sYXQ7XG4gICAgbGV0IGxvbiA9IHdlYXRoZXJEYXRhLmNvb3JkLmxvbjtcbiAgICBsZXQgbG9jYXRpb24gPSB3ZWF0aGVyRGF0YS5uYW1lO1xuICAgIGxldCBmZWVsc0xpa2UgPSB3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2U7XG4gICAgbGV0IHRlbXAgPSB3ZWF0aGVyRGF0YS5tYWluLnRlbXA7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICAgIHByb2Nlc3NEYXRhKGZlZWxzTGlrZSwgdGVtcCk7XG5cbiAgICBnZXRGb3JlY2FzdChsYXQsIGxvbik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgZmVlbHNMaWtlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NEYXRhKGZlZWxzTGlrZSwgdGVtcCkge1xuXG4gICAgZmVlbHNMaWtlQ2VscyA9IE1hdGguY2VpbCgoZmVlbHNMaWtlIC0gMjczLjE1KSk7XG5cbiAgICBmZWVsc0xpa2VGYXIgPSBNYXRoLmNlaWwoKChmZWVsc0xpa2UgLSAyNzMuMTUpICogOS81KSArIDMyKTtcblxuICAgIGNvbnNvbGUubG9nKFwiQ2VscyA9IFwiICsgZmVlbHNMaWtlQ2VscyArIFwiIFwiICsgXCJGYXIgPSBcIiArIGZlZWxzTGlrZUZhcik7XG5cbiAgICB0ZW1wQ2VscyA9IE1hdGguY2VpbCgodGVtcCAtIDI3My4xNSkpO1xuXG4gICAgdGVtcEZhciA9IE1hdGguY2VpbCgoKHRlbXAgLSAyNzMuMTUpICogOS81KSArIDMyKTtcblxuICAgIGNvbnNvbGUubG9nKFwiQ2VscyA9IFwiICsgdGVtcENlbHMgKyBcIiBcIiArIFwiRmFyID0gXCIgKyB0ZW1wRmFyKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGZlZWxzTGlrZUNlbHMsXG4gICAgICAgIGZlZWxzTGlrZUZhcixcbiAgICAgICAgdGVtcENlbHMsXG4gICAgICAgIHRlbXBGYXIsXG4gICAgfVxuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxhdCwgbG9uKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD1mZjQzNjg5MDE0ZTY4YTk3M2Y3ZGFlNzA3ZGU0MWRmYWAsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBsZXQgdGVzdDEgPSBmb3JlY2FzdERhdGEubGlzdFswXS5kdF90eHQ7XG4gICAgbGV0IHRlc3QyID0gZm9yZWNhc3REYXRhLmxpc3RbOF0uZHRfdHh0O1xuICAgIGxldCB0ZXN0MyA9IGZvcmVjYXN0RGF0YS5saXN0WzE2XS5kdF90eHQ7XG5cbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdERhdGEpO1xuICAgIGNvbnNvbGUubG9nKHRlc3QxKTtcbiAgICBjb25zb2xlLmxvZyh0ZXN0Mik7XG4gICAgY29uc29sZS5sb2codGVzdDMpO1xuXG59XG5cblxuXG5nZXREYXRhKCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9