/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDay/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorMessage": () => (/* binding */ errorMessage),
/* harmony export */   "listeners": () => (/* binding */ listeners),
/* harmony export */   "renderForecast": () => (/* binding */ renderForecast),
/* harmony export */   "renderToday": () => (/* binding */ renderToday)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function listeners() {

    document.addEventListener("click", (e) => {

        if (e.target.matches("#btn-submit")) {

            e.preventDefault();

            let todayWeather = document.getElementById("today-weather");
            let forecast = document.getElementById("forecast");

            todayWeather.textContent = "Loading..."
            forecast.textContent = "";


            (0,___WEBPACK_IMPORTED_MODULE_0__.getData)(document.getElementById("inputSearch").value);
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

function renderToday() {

    let unitCheck = document.getElementById("checkbox-input").checked

    let todayWeather = document.querySelector("#today-weather");

    todayWeather.textContent = "";

    let iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");

    let imageContainer = document.createElement("div")

    let icon = document.createElement("img");
    icon.classList.add("weather-icon");
    icon.src = `http://openweathermap.org/img/wn/${___WEBPACK_IMPORTED_MODULE_0__.weatherStorage.weatherArray[0].weatherIcon}@2x.png`

    imageContainer.appendChild(icon);

    let text = document.createElement("p");
    text.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.weatherStorage.weatherArray[0].description}`

    iconContainer.appendChild(imageContainer);
    
    let locationContainer = document.createElement("div");
    locationContainer.classList.add("location-container");

    let location = document.createElement("p");
    location.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.weatherStorage.weatherArray[0].location},`;

    let extraDataContainer = document.createElement("div");
    extraDataContainer.classList.add("extra-data-container");

    extraDataContainer.appendChild(text);


    let tempContainer = document.createElement("div");


    if (unitCheck === true) {
        let feelsLikeCels = document.createElement("p");
        feelsLikeCels.textContent = `Feels Like: ${___WEBPACK_IMPORTED_MODULE_0__.weatherStorage.weatherArray[0].feelsLikeCels} °C`;

        let tempCels = document.createElement("p");
        tempCels.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.weatherStorage.weatherArray[0].tempCels} °C`;

        extraDataContainer.appendChild(feelsLikeCels);
        tempContainer.appendChild(tempCels);

    } else if (unitCheck === false) {

        let feelsLikeFar = document.createElement("p");
        feelsLikeFar.textContent = `Feels Like: ${___WEBPACK_IMPORTED_MODULE_0__.weatherStorage.weatherArray[0].feelsLikeFar} °F`

        let tempFar = document.createElement("p");
        tempFar.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.weatherStorage.weatherArray[0].tempFar} °F`;

        extraDataContainer.appendChild(feelsLikeFar);
        tempContainer.appendChild(tempFar);

    }

    locationContainer.appendChild(location);
    locationContainer.appendChild(tempContainer);

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

        let icon = document.createElement("img");
        icon.classList.add("forecast-icon");
        icon.src = `http://openweathermap.org/img/wn/${___WEBPACK_IMPORTED_MODULE_0__.forecastStorage.forecastArray[i].forecastIcon}@2x.png`

        iconContainer.appendChild(imageContainer);

        let dateContainer = document.createElement("div");
        dateContainer.classList.add("date-container");

        let date = document.createElement("p");
        date.textContent = `${___WEBPACK_IMPORTED_MODULE_0__.forecastStorage.forecastArray[i].date},`

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


        dateContainer.appendChild(extraDataContainer);
        forecastItem.appendChild(dateContainer);
        forecastItem.appendChild(iconContainer);

        forecast.appendChild(forecastItem);


    }
}

function errorMessage() {
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
/* harmony import */ var date_fns_getDay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/getDay */ "./node_modules/date-fns/esm/getDay/index.js");



async function getData(city) {

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
        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.errorMessage)();
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

        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderToday)();
        (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderForecast)();

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

    const dayByString = (0,date_fns_getDay__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(year, month, day));

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


const weatherStorage = (() => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9nZXREYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBnZXREYXlcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7MHwxfDJ8M3w0fDV8Nn0gdGhlIGRheSBvZiB3ZWVrLCAwIHJlcHJlc2VudHMgU3VuZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB3ZWVrIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXkobmV3IERhdGUoMjAxMiwgMSwgMjkpKVxuICogLy89PiAzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHJldHVybiBkYXk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IGdldERhdGEsIHdlYXRoZXJTdG9yYWdlLCBmb3JlY2FzdFN0b3JhZ2UgfSBmcm9tIFwiLlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbGlzdGVuZXJzKCkge1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIjYnRuLXN1Ym1pdFwiKSkge1xuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCB0b2RheVdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5LXdlYXRoZXJcIik7XG4gICAgICAgICAgICBsZXQgZm9yZWNhc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmVjYXN0XCIpO1xuXG4gICAgICAgICAgICB0b2RheVdlYXRoZXIudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcuLi5cIlxuICAgICAgICAgICAgZm9yZWNhc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuXG5cbiAgICAgICAgICAgIGdldERhdGEoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFNlYXJjaFwiKS52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIiNjaGVja2JveC1pbnB1dFwiKSkge1xuICAgICAgICAgICAgcmVuZGVyVG9kYXkoKTtcbiAgICAgICAgICAgIHJlbmRlckZvcmVjYXN0KCk7XG4gICAgICAgIH1cblxuICAgIH0pO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5Ym9hcmRGdW5jKVxuXG5mdW5jdGlvbiBrZXlib2FyZEZ1bmMoZSkge1xuICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXN1Ym1pdFwiKS5jbGljaygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9kYXkoKSB7XG5cbiAgICBsZXQgdW5pdENoZWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja2JveC1pbnB1dFwiKS5jaGVja2VkXG5cbiAgICBsZXQgdG9kYXlXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheS13ZWF0aGVyXCIpO1xuXG4gICAgdG9kYXlXZWF0aGVyLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGxldCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpY29uLWNvbnRhaW5lclwiKTtcblxuICAgIGxldCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWljb25cIik7XG4gICAgaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyU3RvcmFnZS53ZWF0aGVyQXJyYXlbMF0ud2VhdGhlckljb259QDJ4LnBuZ2BcblxuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gYCR7d2VhdGhlclN0b3JhZ2Uud2VhdGhlckFycmF5WzBdLmRlc2NyaXB0aW9ufWBcblxuICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuICAgIFxuICAgIGxldCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uLWNvbnRhaW5lclwiKTtcblxuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7d2VhdGhlclN0b3JhZ2Uud2VhdGhlckFycmF5WzBdLmxvY2F0aW9ufSxgO1xuXG4gICAgbGV0IGV4dHJhRGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXh0cmFEYXRhQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJleHRyYS1kYXRhLWNvbnRhaW5lclwiKTtcblxuICAgIGV4dHJhRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuXG4gICAgbGV0IHRlbXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cbiAgICBpZiAodW5pdENoZWNrID09PSB0cnVlKSB7XG4gICAgICAgIGxldCBmZWVsc0xpa2VDZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGZlZWxzTGlrZUNlbHMudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHt3ZWF0aGVyU3RvcmFnZS53ZWF0aGVyQXJyYXlbMF0uZmVlbHNMaWtlQ2Vsc30gwrBDYDtcblxuICAgICAgICBsZXQgdGVtcENlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGVtcENlbHMudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyU3RvcmFnZS53ZWF0aGVyQXJyYXlbMF0udGVtcENlbHN9IMKwQ2A7XG5cbiAgICAgICAgZXh0cmFEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGZlZWxzTGlrZUNlbHMpO1xuICAgICAgICB0ZW1wQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBDZWxzKTtcblxuICAgIH0gZWxzZSBpZiAodW5pdENoZWNrID09PSBmYWxzZSkge1xuXG4gICAgICAgIGxldCBmZWVsc0xpa2VGYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZmVlbHNMaWtlRmFyLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7d2VhdGhlclN0b3JhZ2Uud2VhdGhlckFycmF5WzBdLmZlZWxzTGlrZUZhcn0gwrBGYFxuXG4gICAgICAgIGxldCB0ZW1wRmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRlbXBGYXIudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyU3RvcmFnZS53ZWF0aGVyQXJyYXlbMF0udGVtcEZhcn0gwrBGYDtcblxuICAgICAgICBleHRyYURhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlRmFyKTtcbiAgICAgICAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wRmFyKTtcblxuICAgIH1cblxuICAgIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wQ29udGFpbmVyKTtcblxuICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbnRhaW5lcik7XG4gICAgdG9kYXlXZWF0aGVyLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpO1xuICAgIHRvZGF5V2VhdGhlci5hcHBlbmRDaGlsZChleHRyYURhdGFDb250YWluZXIpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJGb3JlY2FzdCgpIHtcblxuICAgIGxldCB1bml0Q2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrYm94LWlucHV0XCIpLmNoZWNrZWRcblxuICAgIGxldCBmb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9yZWNhc3RcIilcblxuICAgIGZvcmVjYXN0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3RTdG9yYWdlLmZvcmVjYXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBsZXQgZm9yZWNhc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9yZWNhc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1pdGVtXCIpO1xuXG4gICAgICAgIGxldCBpY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtaWNvbi1jb250YWluZXJcIik7XG5cbiAgICAgICAgbGV0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtaWNvblwiKTtcbiAgICAgICAgaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtmb3JlY2FzdFN0b3JhZ2UuZm9yZWNhc3RBcnJheVtpXS5mb3JlY2FzdEljb259QDJ4LnBuZ2BcblxuICAgICAgICBpY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcblxuICAgICAgICBsZXQgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFN0b3JhZ2UuZm9yZWNhc3RBcnJheVtpXS5kYXRlfSxgXG5cbiAgICAgICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICBsZXQgZXh0cmFEYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBpZiAodW5pdENoZWNrID09PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgRm9yZWNhc3RUZW1wQ2VscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgRm9yZWNhc3RUZW1wQ2Vscy50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0U3RvcmFnZS5mb3JlY2FzdEFycmF5W2ldLmZvcmVjYXN0VGVtcENlbHN9IMKwQ2BcbiAgICAgICAgICAgIGV4dHJhRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChGb3JlY2FzdFRlbXBDZWxzKTtcbiAgICAgICAgfSBlbHNlIGlmICh1bml0Q2hlY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgRm9yZWNhc3RUZW1wRmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBGb3JlY2FzdFRlbXBGYXIudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFN0b3JhZ2UuZm9yZWNhc3RBcnJheVtpXS5mb3JlY2FzdFRlbXBGYXJ9IMKwRmBcbiAgICAgICAgICAgIGV4dHJhRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChGb3JlY2FzdFRlbXBGYXIpO1xuICAgICAgICB9XG5cblxuICAgICAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGV4dHJhRGF0YUNvbnRhaW5lcik7XG4gICAgICAgIGZvcmVjYXN0SXRlbS5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcbiAgICAgICAgZm9yZWNhc3RJdGVtLmFwcGVuZENoaWxkKGljb25Db250YWluZXIpO1xuXG4gICAgICAgIGZvcmVjYXN0LmFwcGVuZENoaWxkKGZvcmVjYXN0SXRlbSk7XG5cblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yTWVzc2FnZSgpIHtcbiAgICBsZXQgdG9kYXlXZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RheS13ZWF0aGVyXCIpO1xuICAgIHRvZGF5V2VhdGhlci50ZXh0Q29udGVudCA9IFwiQ2l0eSBub3QgZm91bmQuIFBsZWFzZSBkb3VibGUgY2hlY2sgc3BhY2luZyBhbmQgc3BlbGxpbmcgb3IgdHJ5IGEgbmV3IGNpdHkgbmFtZS5cIlxufVxuXG4vKlxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgZmVlbHNMaWtlLmZlZWxzTGlrZUNlbHMsXG4gICAgICAgIGZlZWxzTGlrZS5mZWVsc0xpa2VGYXIsXG4gICAgICAgIHRlbXAudGVtcENlbHMsXG4gICAgICAgIHRlbXAudGVtcEZhcixcbiAgICAgICAgZGVzY3JpcHRpb24sXG4qLyIsImltcG9ydCB7IGxpc3RlbmVycywgcmVuZGVyRm9yZWNhc3QsIHJlbmRlclRvZGF5LCBlcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCBnZXREYXkgZnJvbSBcImRhdGUtZm5zL2dldERheVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mQVBQSUQ9ZmY0MzY4OTAxNGU2OGE5NzNmN2RhZTcwN2RlNDFkZmFgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGlmICh3ZWF0aGVyRGF0YS5jb2QgPT0gNDA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDaXR5IG5vdCBmb3VuZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGxhdCA9IHdlYXRoZXJEYXRhLmNvb3JkLmxhdDtcbiAgICAgICAgbGV0IGxvbiA9IHdlYXRoZXJEYXRhLmNvb3JkLmxvbjtcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gd2VhdGhlckRhdGEubmFtZTtcbiAgICAgICAgbGV0IGZlZWxzTGlrZSA9IHByb2Nlc3NGZWVsc0xpa2Uod2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlKTtcbiAgICAgICAgbGV0IHRlbXAgPSBwcm9jZXNzVGVtcCh3ZWF0aGVyRGF0YS5tYWluLnRlbXApO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICBsZXQgd2VhdGhlckljb24gPSB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb247XG5cbiAgICAgICAgZ2V0Rm9yZWNhc3QobGF0LCBsb24pO1xuXG4gICAgICAgIGNvbnN0IHdlYXRoZXIgPSBuZXcgV2VhdGhlciAoXG4gICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgIGZlZWxzTGlrZS5mZWVsc0xpa2VDZWxzLFxuICAgICAgICAgICAgZmVlbHNMaWtlLmZlZWxzTGlrZUZhcixcbiAgICAgICAgICAgIHRlbXAudGVtcENlbHMsXG4gICAgICAgICAgICB0ZW1wLnRlbXBGYXIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHdlYXRoZXJJY29uXG4gICAgICAgICk7XG5cbiAgICAgICAgd2VhdGhlclN0b3JhZ2Uud2VhdGhlckFycmF5ID0gW107XG5cbiAgICAgICAgd2VhdGhlclN0b3JhZ2Uud2VhdGhlckFycmF5LnB1c2god2VhdGhlcik7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBlcnJvck1lc3NhZ2UoKTtcbiAgICB9O1xuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxhdCwgbG9uKSB7XG5cbiAgICB0cnkge1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9ZmY0MzY4OTAxNGU2OGE5NzNmN2RhZTcwN2RlNDFkZmFgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpZiAoZm9yZWNhc3REYXRhLmNvZCA9PSA0MDQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNpdHkgbm90IGZvdW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZvcmVjYXN0RGF0YUFycmF5ID0gZm9yZWNhc3REYXRhLmxpc3Q7XG5cbiAgICAgICAgZm9yZWNhc3RTdG9yYWdlLmZvcmVjYXN0QXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gODsgaSA8IGZvcmVjYXN0RGF0YUFycmF5Lmxlbmd0aDsgaSArPSA4KSB7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IHByb2Nlc3NEYXRlKGZvcmVjYXN0RGF0YUFycmF5W2ldLmR0X3R4dCk7XG4gICAgICAgICAgICBsZXQgbG9jYXRpb24gPSBmb3JlY2FzdERhdGEuY2l0eS5uYW1lXG4gICAgICAgICAgICBsZXQgZm9yZWNhc3RUZW1wID0gcHJvY2Vzc1RlbXAoZm9yZWNhc3REYXRhQXJyYXlbaV0ubWFpbi50ZW1wKTtcbiAgICAgICAgICAgIGxldCBmb3JlY2FzdERlc2NyaXB0aW9uID0gZm9yZWNhc3REYXRhQXJyYXlbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGxldCBmb3JlY2FzdEljb24gPSBmb3JlY2FzdERhdGFBcnJheVtpXS53ZWF0aGVyWzBdLmljb247XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcmVjYXN0ID0gbmV3IEZvcmVjYXN0IChcbiAgICAgICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIGZvcmVjYXN0VGVtcC50ZW1wQ2VscyxcbiAgICAgICAgICAgICAgICBmb3JlY2FzdFRlbXAudGVtcEZhcixcbiAgICAgICAgICAgICAgICBmb3JlY2FzdERlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGZvcmVjYXN0SWNvblxuICAgICAgICAgICAgKVxuXG5cbiAgICAgICAgICAgIGZvcmVjYXN0U3RvcmFnZS5mb3JlY2FzdEFycmF5LnB1c2goZm9yZWNhc3QpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJUb2RheSgpO1xuICAgICAgICByZW5kZXJGb3JlY2FzdCgpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoXCJFcnJvcjogXCIgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcj9cIilcbiAgICB9XG5cbn1cblxuXG5cbmZ1bmN0aW9uIHByb2Nlc3NGZWVsc0xpa2UoZmVlbHNMaWtlKSB7XG5cbiAgICBsZXQgZmVlbHNMaWtlQ2VscyA9IE1hdGguY2VpbCgoZmVlbHNMaWtlIC0gMjczLjE1KSk7XG5cbiAgICBsZXQgZmVlbHNMaWtlRmFyID0gTWF0aC5jZWlsKCgoZmVlbHNMaWtlIC0gMjczLjE1KSAqIDkvNSkgKyAzMik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmZWVsc0xpa2VDZWxzLFxuICAgICAgICBmZWVsc0xpa2VGYXIsXG4gICAgfVxuXG59XG5cblxuZnVuY3Rpb24gcHJvY2Vzc1RlbXAodGVtcCkge1xuXG4gICAgbGV0IHRlbXBDZWxzID0gTWF0aC5jZWlsKCh0ZW1wIC0gMjczLjE1KSk7XG5cbiAgICBsZXQgdGVtcEZhciA9IE1hdGguY2VpbCgoKHRlbXAgLSAyNzMuMTUpICogOS81KSArIDMyKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBDZWxzLFxuICAgICAgICB0ZW1wRmFyLFxuICAgIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0RhdGUoZGF0ZSkge1xuXG4gICAgbGV0IGRhdGVfc3RyaW5nID0gZGF0ZTtcbiAgICBsZXQgZGF0ZV9wYXJ0cyA9IGRhdGVfc3RyaW5nLnNwbGl0KFwiIFwiKVswXS5zcGxpdChcIi1cIik7XG4gICAgbGV0IHllYXIgPSBwYXJzZUludChkYXRlX3BhcnRzWzBdKTtcbiAgICBsZXQgbW9udGggPSBwYXJzZUludChkYXRlX3BhcnRzWzFdKSAtIDE7XG4gICAgbGV0IGRheSA9IHBhcnNlSW50KGRhdGVfcGFydHNbMl0pO1xuXG4gICAgY29uc3QgZGF5QnlTdHJpbmcgPSBnZXREYXkobmV3IERhdGUoeWVhciwgbW9udGgsIGRheSkpO1xuXG4gICAgbGV0IG5ld0RheTtcblxuICAgIHN3aXRjaChkYXlCeVN0cmluZykge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBuZXdEYXkgPSBcIlN1bmRheVwiO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0RheTtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBuZXdEYXkgPSBcIk1vbmRheVwiO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0RheTtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBuZXdEYXkgPSBcIlR1ZXNkYXlcIjtcbiAgICAgICAgICAgIHJldHVybiBuZXdEYXk7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgbmV3RGF5ID0gXCJXZWRuZXNkYXlcIjtcbiAgICAgICAgICAgIHJldHVybiBuZXdEYXk7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgbmV3RGF5ID0gXCJUaHVyc2RheVwiO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0RheTtcbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBuZXdEYXkgPSBcIkZyaWRheVwiO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0RheTtcbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBuZXdEYXkgPSBcIlNhdHVyZGF5XCI7XG4gICAgICAgICAgICByZXR1cm4gbmV3RGF5O1xuICAgIH1cbn1cblxuXG5jbGFzcyBXZWF0aGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihsb2NhdGlvbiwgZmVlbHNMaWtlQ2VscywgZmVlbHNMaWtlRmFyLCB0ZW1wQ2VscywgdGVtcEZhciwgZGVzY3JpcHRpb24sIHdlYXRoZXJJY29uKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbixcbiAgICAgICAgdGhpcy5mZWVsc0xpa2VDZWxzID0gZmVlbHNMaWtlQ2VscyxcbiAgICAgICAgdGhpcy5mZWVsc0xpa2VGYXIgPSBmZWVsc0xpa2VGYXIsXG4gICAgICAgIHRoaXMudGVtcENlbHMgPSB0ZW1wQ2VscyxcbiAgICAgICAgdGhpcy50ZW1wRmFyID0gdGVtcEZhcixcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLFxuICAgICAgICB0aGlzLndlYXRoZXJJY29uID0gd2VhdGhlckljb25cbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IHdlYXRoZXJTdG9yYWdlID0gKCgpID0+IHtcblxuICAgIGxldCB3ZWF0aGVyQXJyYXkgPSBbXTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHdlYXRoZXJBcnJheVxuICAgIH07XG5cbn0pKCk7XG5cblxuY2xhc3MgRm9yZWNhc3Qge1xuICAgIGNvbnN0cnVjdG9yKGRhdGUsIGxvY2F0aW9uLCBmb3JlY2FzdFRlbXBDZWxzLCBmb3JlY2FzdFRlbXBGYXIsIGZvcmVjYXN0RGVzY3JpcHRpb24sIGZvcmVjYXN0SWNvbikge1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb24sXG4gICAgICAgIHRoaXMuZm9yZWNhc3RUZW1wQ2VscyA9IGZvcmVjYXN0VGVtcENlbHMsXG4gICAgICAgIHRoaXMuZm9yZWNhc3RUZW1wRmFyID0gZm9yZWNhc3RUZW1wRmFyLFxuICAgICAgICB0aGlzLmZvcmVjYXN0RGVzY3JpcHRpb24gPSBmb3JlY2FzdERlc2NyaXB0aW9uLFxuICAgICAgICB0aGlzLmZvcmVjYXN0SWNvbiA9IGZvcmVjYXN0SWNvblxuICAgIH1cbn1cblxuXG5leHBvcnQgY29uc3QgZm9yZWNhc3RTdG9yYWdlID0gKCgpID0+IHtcblxuICAgIGxldCBmb3JlY2FzdEFycmF5ID0gW107XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JlY2FzdEFycmF5XG4gICAgfTtcblxufSkoKTtcblxuXG5cbmxpc3RlbmVycygpO1xuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=