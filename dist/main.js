/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listeners": () => (/* binding */ listeners),
/* harmony export */   "renderForecast": () => (/* binding */ renderForecast),
/* harmony export */   "renderToday": () => (/* binding */ renderToday)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function listeners() {

    document.addEventListener("click", (e) => {

        if (e.target.matches(".btn-submit")) {
            (0,___WEBPACK_IMPORTED_MODULE_0__.getData)(document.getElementById("inputSearch").value);
            let check = document.getElementById("checkbox-input").checked;
            console.log(check);
        }

        if (e.target.matches("#checkbox-input")) {
            renderToday();
            renderForecast();
        }

    });


}

function renderToday() {

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
    text.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.weatherStorage.weatherArray[0].description}`

    textContainer.appendChild(text);

    iconContainer.appendChild(imageContainer);
    iconContainer.appendChild(textContainer);
    

    let locationContainer = document.createElement("div");

    let location = document.createElement("p");
    location.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.weatherStorage.weatherArray[0].location}`;

    let extraDataContainer = document.createElement("div");


    if (unitCheck === true) {
        let feelsLikeCels = document.createElement("p");
        feelsLikeCels.textContent = `Feels Like: ${___WEBPACK_IMPORTED_MODULE_0__.weatherStorage.weatherArray[0].feelsLikeCels} °C`;

        let tempCels = document.createElement("p");
        tempCels.textContent = `Tempature: ${___WEBPACK_IMPORTED_MODULE_0__.weatherStorage.weatherArray[0].tempCels} °C`;

        extraDataContainer.appendChild(feelsLikeCels);
        extraDataContainer.appendChild(tempCels);

    } else if (unitCheck === false) {

        let feelsLikeFar = document.createElement("p");
        feelsLikeFar.textContent = `Feels Like: ${___WEBPACK_IMPORTED_MODULE_0__.weatherStorage.weatherArray[0].feelsLikeFar} °F`

        let tempFar = document.createElement("p");
        tempFar.textContent = `Tempature: ${___WEBPACK_IMPORTED_MODULE_0__.weatherStorage.weatherArray[0].tempFar} °F`;

        extraDataContainer.appendChild(feelsLikeFar);
        extraDataContainer.appendChild(tempFar);

    }

    locationContainer.appendChild(location);

    todayWeather.appendChild(locationContainer);
    todayWeather.appendChild(iconContainer);
    todayWeather.appendChild(extraDataContainer);

}

function renderForecast() {

    let unitCheck = document.getElementById("checkbox-input").checked

    let forecast = document.querySelector("#forecast")

    forecast.textContent = "";

    for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.forecastStorage.forecastArray.length; i++) {

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
        text.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.forecastStorage.forecastArray[i].forecastDescription}`

        textContainer.appendChild(text);

        iconContainer.appendChild(imageContainer);
        iconContainer.appendChild(textContainer);

        let dateContainer = document.createElement("div");

        let date = document.createElement("p");
        date.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.forecastStorage.forecastArray[i].date}`

        dateContainer.appendChild(date);

        imageContainer.appendChild(icon);

        let extraDataContainer = document.createElement("div");

        if (unitCheck === true) {
            let ForecastTempCels = document.createElement("p");
            ForecastTempCels.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.forecastStorage.forecastArray[i].forecastTempCels} °C`
            extraDataContainer.appendChild(ForecastTempCels);
        } else if (unitCheck === false) {
            let ForecastTempFar = document.createElement("p");
            ForecastTempFar.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.forecastStorage.forecastArray[i].forecastTempFar} °F`
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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forecastStorage": () => (/* binding */ forecastStorage),
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "weatherStorage": () => (/* binding */ weatherStorage)
/* harmony export */ });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


async function getData(city) {
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

    weatherStorage.weatherArray = [];

    weatherStorage.weatherArray.push(weather);


}

async function getForecast(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ff43689014e68a973f7dae707de41dfa`, {mode: 'cors'});
    const forecastData = await response.json();

    let forecastDataArray = forecastData.list;

    forecastStorage.forecastArray = [];

    for (let i = 0; i < forecastDataArray.length; i += 8) {
        let date = processDate(forecastDataArray[i].dt_txt);
        let location = forecastData.city.name
        let forecastTemp = processTemp(forecastDataArray[i].main.temp);
        let forecastDescription = forecastDataArray[i].weather[0].description;

        const forecast = new Forecast (
            date,
            location,
            forecastTemp.tempCels,
            forecastTemp.tempFar,
            forecastDescription
        )


        forecastStorage.forecastArray.push(forecast);

    }

    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderToday)();
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderForecast)();

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
    let month = parseInt(date_parts[1]) - 1;
    let result = date_parts[0] + ", " + month + ", " + date_parts[2];


    

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


const weatherStorage = (() => {

    let weatherArray = [];

    return {
        weatherArray
    };

})();


class Forecast {
    constructor(date, location, forecastTempCels, forecastTempFar, forecastDescription) {
        this.date = date,
        this.location = location,
        this.forecastTempCels = forecastTempCels,
        this.forecastTempFar = forecastTempFar,
        this.forecastDescription = forecastDescription
    }
}


const forecastStorage = (() => {

    let forecastArray = [];

    return {
        forecastArray
    };

})();



(0,_DOM__WEBPACK_IMPORTED_MODULE_0__.listeners)();




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXREYXRhLCB3ZWF0aGVyU3RvcmFnZSwgZm9yZWNhc3RTdG9yYWdlIH0gZnJvbSBcIi5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlbmVycygpIHtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLmJ0bi1zdWJtaXRcIikpIHtcbiAgICAgICAgICAgIGdldERhdGEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFNlYXJjaFwiKS52YWx1ZSk7XG4gICAgICAgICAgICBsZXQgY2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrYm94LWlucHV0XCIpLmNoZWNrZWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGVjayk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIiNjaGVja2JveC1pbnB1dFwiKSkge1xuICAgICAgICAgICAgcmVuZGVyVG9kYXkoKTtcbiAgICAgICAgICAgIHJlbmRlckZvcmVjYXN0KCk7XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvZGF5KCkge1xuXG4gICAgbGV0IHVuaXRDaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tib3gtaW5wdXRcIikuY2hlY2tlZFxuXG4gICAgbGV0IHRvZGF5V2VhdGhlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kYXktd2VhdGhlclwiKTtcblxuICAgIHRvZGF5V2VhdGhlci50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBsZXQgaWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaWNvbi1jb250YWluZXJcIik7XG5cbiAgICBsZXQgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZChcImZhLWNsb3VkXCIpO1xuXG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBsZXQgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyU3RvcmFnZS53ZWF0aGVyQXJyYXlbMF0uZGVzY3JpcHRpb259YFxuXG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG4gICAgXG5cbiAgICBsZXQgbG9jYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyU3RvcmFnZS53ZWF0aGVyQXJyYXlbMF0ubG9jYXRpb259YDtcblxuICAgIGxldCBleHRyYURhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cbiAgICBpZiAodW5pdENoZWNrID09PSB0cnVlKSB7XG4gICAgICAgIGxldCBmZWVsc0xpa2VDZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZlZWxzTGlrZUNlbHMudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHt3ZWF0aGVyU3RvcmFnZS53ZWF0aGVyQXJyYXlbMF0uZmVlbHNMaWtlQ2Vsc30gwrBDYDtcblxuICAgICAgICBsZXQgdGVtcENlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGVtcENlbHMudGV4dENvbnRlbnQgPSBgVGVtcGF0dXJlOiAke3dlYXRoZXJTdG9yYWdlLndlYXRoZXJBcnJheVswXS50ZW1wQ2Vsc30gwrBDYDtcblxuICAgICAgICBleHRyYURhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlQ2Vscyk7XG4gICAgICAgIGV4dHJhRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wQ2Vscyk7XG5cbiAgICB9IGVsc2UgaWYgKHVuaXRDaGVjayA9PT0gZmFsc2UpIHtcblxuICAgICAgICBsZXQgZmVlbHNMaWtlRmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZlZWxzTGlrZUZhci50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke3dlYXRoZXJTdG9yYWdlLndlYXRoZXJBcnJheVswXS5mZWVsc0xpa2VGYXJ9IMKwRmBcblxuICAgICAgICBsZXQgdGVtcEZhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0ZW1wRmFyLnRleHRDb250ZW50ID0gYFRlbXBhdHVyZTogJHt3ZWF0aGVyU3RvcmFnZS53ZWF0aGVyQXJyYXlbMF0udGVtcEZhcn0gwrBGYDtcblxuICAgICAgICBleHRyYURhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlRmFyKTtcbiAgICAgICAgZXh0cmFEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBGYXIpO1xuXG4gICAgfVxuXG4gICAgbG9jYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuXG4gICAgdG9kYXlXZWF0aGVyLmFwcGVuZENoaWxkKGxvY2F0aW9uQ29udGFpbmVyKTtcbiAgICB0b2RheVdlYXRoZXIuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcik7XG4gICAgdG9kYXlXZWF0aGVyLmFwcGVuZENoaWxkKGV4dHJhRGF0YUNvbnRhaW5lcik7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckZvcmVjYXN0KCkge1xuXG4gICAgbGV0IHVuaXRDaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tib3gtaW5wdXRcIikuY2hlY2tlZFxuXG4gICAgbGV0IGZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JlY2FzdFwiKVxuXG4gICAgZm9yZWNhc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdFN0b3JhZ2UuZm9yZWNhc3RBcnJheS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGxldCBmb3JlY2FzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmb3JlY2FzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWl0ZW1cIik7XG5cbiAgICAgICAgbGV0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1pY29uLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBsZXQgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICAgICAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIik7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcImZhLWNsb3VkXCIpO1xuXG4gICAgICAgIGxldCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RTdG9yYWdlLmZvcmVjYXN0QXJyYXlbaV0uZm9yZWNhc3REZXNjcmlwdGlvbn1gXG5cbiAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcbiAgICAgICAgaWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcblxuICAgICAgICBsZXQgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0U3RvcmFnZS5mb3JlY2FzdEFycmF5W2ldLmRhdGV9YFxuXG4gICAgICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgbGV0IGV4dHJhRGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgaWYgKHVuaXRDaGVjayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbGV0IEZvcmVjYXN0VGVtcENlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIEZvcmVjYXN0VGVtcENlbHMudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFN0b3JhZ2UuZm9yZWNhc3RBcnJheVtpXS5mb3JlY2FzdFRlbXBDZWxzfSDCsENgXG4gICAgICAgICAgICBleHRyYURhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoRm9yZWNhc3RUZW1wQ2Vscyk7XG4gICAgICAgIH0gZWxzZSBpZiAodW5pdENoZWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IEZvcmVjYXN0VGVtcEZhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgRm9yZWNhc3RUZW1wRmFyLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RTdG9yYWdlLmZvcmVjYXN0QXJyYXlbaV0uZm9yZWNhc3RUZW1wRmFyfSDCsEZgXG4gICAgICAgICAgICBleHRyYURhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoRm9yZWNhc3RUZW1wRmFyKTtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBmb3JlY2FzdEl0ZW0uYXBwZW5kQ2hpbGQoZGF0ZUNvbnRhaW5lcik7XG4gICAgICAgIGZvcmVjYXN0SXRlbS5hcHBlbmRDaGlsZChpY29uQ29udGFpbmVyKTtcbiAgICAgICAgZm9yZWNhc3RJdGVtLmFwcGVuZENoaWxkKGV4dHJhRGF0YUNvbnRhaW5lcik7XG5cbiAgICAgICAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoZm9yZWNhc3RJdGVtKTtcblxuXG4gICAgfVxuXG5cblxufVxuXG4vKlxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgZmVlbHNMaWtlLmZlZWxzTGlrZUNlbHMsXG4gICAgICAgIGZlZWxzTGlrZS5mZWVsc0xpa2VGYXIsXG4gICAgICAgIHRlbXAudGVtcENlbHMsXG4gICAgICAgIHRlbXAudGVtcEZhcixcbiAgICAgICAgZGVzY3JpcHRpb24sXG4qLyIsImltcG9ydCB7IGxpc3RlbmVycywgcmVuZGVyRm9yZWNhc3QsIHJlbmRlclRvZGF5IH0gZnJvbSBcIi4vRE9NXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhKGNpdHkpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mQVBQSUQ9ZmY0MzY4OTAxNGU2OGE5NzNmN2RhZTcwN2RlNDFkZmFgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBsZXQgbGF0ID0gd2VhdGhlckRhdGEuY29vcmQubGF0O1xuICAgIGxldCBsb24gPSB3ZWF0aGVyRGF0YS5jb29yZC5sb247XG4gICAgbGV0IGxvY2F0aW9uID0gd2VhdGhlckRhdGEubmFtZTtcbiAgICBsZXQgZmVlbHNMaWtlID0gcHJvY2Vzc0ZlZWxzTGlrZSh3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UpO1xuICAgIGxldCB0ZW1wID0gcHJvY2Vzc1RlbXAod2VhdGhlckRhdGEubWFpbi50ZW1wKTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXG4gICAgZ2V0Rm9yZWNhc3QobGF0LCBsb24pO1xuXG4gICAgY29uc3Qgd2VhdGhlciA9IG5ldyBXZWF0aGVyIChcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIGZlZWxzTGlrZS5mZWVsc0xpa2VDZWxzLFxuICAgICAgICBmZWVsc0xpa2UuZmVlbHNMaWtlRmFyLFxuICAgICAgICB0ZW1wLnRlbXBDZWxzLFxuICAgICAgICB0ZW1wLnRlbXBGYXIsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICk7XG5cbiAgICB3ZWF0aGVyU3RvcmFnZS53ZWF0aGVyQXJyYXkgPSBbXTtcblxuICAgIHdlYXRoZXJTdG9yYWdlLndlYXRoZXJBcnJheS5wdXNoKHdlYXRoZXIpO1xuXG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QobGF0LCBsb24pIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPWZmNDM2ODkwMTRlNjhhOTczZjdkYWU3MDdkZTQxZGZhYCwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGxldCBmb3JlY2FzdERhdGFBcnJheSA9IGZvcmVjYXN0RGF0YS5saXN0O1xuXG4gICAgZm9yZWNhc3RTdG9yYWdlLmZvcmVjYXN0QXJyYXkgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3REYXRhQXJyYXkubGVuZ3RoOyBpICs9IDgpIHtcbiAgICAgICAgbGV0IGRhdGUgPSBwcm9jZXNzRGF0ZShmb3JlY2FzdERhdGFBcnJheVtpXS5kdF90eHQpO1xuICAgICAgICBsZXQgbG9jYXRpb24gPSBmb3JlY2FzdERhdGEuY2l0eS5uYW1lXG4gICAgICAgIGxldCBmb3JlY2FzdFRlbXAgPSBwcm9jZXNzVGVtcChmb3JlY2FzdERhdGFBcnJheVtpXS5tYWluLnRlbXApO1xuICAgICAgICBsZXQgZm9yZWNhc3REZXNjcmlwdGlvbiA9IGZvcmVjYXN0RGF0YUFycmF5W2ldLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgZm9yZWNhc3QgPSBuZXcgRm9yZWNhc3QgKFxuICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgICAgZm9yZWNhc3RUZW1wLnRlbXBDZWxzLFxuICAgICAgICAgICAgZm9yZWNhc3RUZW1wLnRlbXBGYXIsXG4gICAgICAgICAgICBmb3JlY2FzdERlc2NyaXB0aW9uXG4gICAgICAgIClcblxuXG4gICAgICAgIGZvcmVjYXN0U3RvcmFnZS5mb3JlY2FzdEFycmF5LnB1c2goZm9yZWNhc3QpO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyVG9kYXkoKTtcbiAgICByZW5kZXJGb3JlY2FzdCgpO1xuXG59XG5cblxuZnVuY3Rpb24gcHJvY2Vzc0ZlZWxzTGlrZShmZWVsc0xpa2UpIHtcblxuICAgIGxldCBmZWVsc0xpa2VDZWxzID0gTWF0aC5jZWlsKChmZWVsc0xpa2UgLSAyNzMuMTUpKTtcblxuICAgIGxldCBmZWVsc0xpa2VGYXIgPSBNYXRoLmNlaWwoKChmZWVsc0xpa2UgLSAyNzMuMTUpICogOS81KSArIDMyKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGZlZWxzTGlrZUNlbHMsXG4gICAgICAgIGZlZWxzTGlrZUZhcixcbiAgICB9XG5cbn1cblxuXG5mdW5jdGlvbiBwcm9jZXNzVGVtcCh0ZW1wKSB7XG5cbiAgICBsZXQgdGVtcENlbHMgPSBNYXRoLmNlaWwoKHRlbXAgLSAyNzMuMTUpKTtcblxuICAgIGxldCB0ZW1wRmFyID0gTWF0aC5jZWlsKCgodGVtcCAtIDI3My4xNSkgKiA5LzUpICsgMzIpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcENlbHMsXG4gICAgICAgIHRlbXBGYXIsXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzRGF0ZShkYXRlKSB7XG5cbiAgICBsZXQgZGF0ZV9zdHJpbmcgPSBkYXRlO1xuICAgIGxldCBkYXRlX3BhcnRzID0gZGF0ZV9zdHJpbmcuc3BsaXQoXCIgXCIpWzBdLnNwbGl0KFwiLVwiKTtcbiAgICBsZXQgbW9udGggPSBwYXJzZUludChkYXRlX3BhcnRzWzFdKSAtIDE7XG4gICAgbGV0IHJlc3VsdCA9IGRhdGVfcGFydHNbMF0gKyBcIiwgXCIgKyBtb250aCArIFwiLCBcIiArIGRhdGVfcGFydHNbMl07XG5cblxuICAgIFxuXG59XG5cblxuY2xhc3MgV2VhdGhlciB7XG4gICAgY29uc3RydWN0b3IobG9jYXRpb24sIGZlZWxzTGlrZUNlbHMsIGZlZWxzTGlrZUZhciwgdGVtcENlbHMsIHRlbXBGYXIsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbixcbiAgICAgICAgdGhpcy5mZWVsc0xpa2VDZWxzID0gZmVlbHNMaWtlQ2VscyxcbiAgICAgICAgdGhpcy5mZWVsc0xpa2VGYXIgPSBmZWVsc0xpa2VGYXIsXG4gICAgICAgIHRoaXMudGVtcENlbHMgPSB0ZW1wQ2VscyxcbiAgICAgICAgdGhpcy50ZW1wRmFyID0gdGVtcEZhcixcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCB3ZWF0aGVyU3RvcmFnZSA9ICgoKSA9PiB7XG5cbiAgICBsZXQgd2VhdGhlckFycmF5ID0gW107XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3ZWF0aGVyQXJyYXlcbiAgICB9O1xuXG59KSgpO1xuXG5cbmNsYXNzIEZvcmVjYXN0IHtcbiAgICBjb25zdHJ1Y3RvcihkYXRlLCBsb2NhdGlvbiwgZm9yZWNhc3RUZW1wQ2VscywgZm9yZWNhc3RUZW1wRmFyLCBmb3JlY2FzdERlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGUsXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbixcbiAgICAgICAgdGhpcy5mb3JlY2FzdFRlbXBDZWxzID0gZm9yZWNhc3RUZW1wQ2VscyxcbiAgICAgICAgdGhpcy5mb3JlY2FzdFRlbXBGYXIgPSBmb3JlY2FzdFRlbXBGYXIsXG4gICAgICAgIHRoaXMuZm9yZWNhc3REZXNjcmlwdGlvbiA9IGZvcmVjYXN0RGVzY3JpcHRpb25cbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGZvcmVjYXN0U3RvcmFnZSA9ICgoKSA9PiB7XG5cbiAgICBsZXQgZm9yZWNhc3RBcnJheSA9IFtdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9yZWNhc3RBcnJheVxuICAgIH07XG5cbn0pKCk7XG5cblxuXG5saXN0ZW5lcnMoKTtcblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9