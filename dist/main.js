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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function listeners() {

    document.addEventListener("click", (e) => {

        if (e.target.matches(".btn-submit")) {
            (0,___WEBPACK_IMPORTED_MODULE_0__.getData)(document.getElementById("inputSearch").value);
            renderUI();
        }

    });


}

function renderUI() {


    // let todayWeather = document.querySelector(".today-weather")



}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listeners);

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

    console.log(weatherStorage.weatherArray);


}

async function getForecast(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ff43689014e68a973f7dae707de41dfa`, {mode: 'cors'});
    const forecastData = await response.json();

    let forecastDataArray = forecastData.list;

    forecastStorage.forecastArray = [];

    for (let i = 0; i < forecastDataArray.length; i += 8) {
        let date = forecastDataArray[i].dt_txt;
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

    console.log(forecastStorage.forecastArray);

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



(0,_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])();




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7O0FBRTdEOztBQUVBOztBQUVBO0FBQ0EsWUFBWSwwQ0FBTztBQUNuQjtBQUNBOztBQUVBLEtBQUs7OztBQUdMOztBQUVBOzs7QUFHQTs7OztBQUlBOzs7QUFHQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmU7O0FBRXZCO0FBQ1Asc0ZBQXNGLEtBQUssMkNBQTJDLGFBQWE7QUFDbko7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0EseUZBQXlGLElBQUksT0FBTyxJQUFJLDJDQUEyQyxhQUFhO0FBQ2hLOztBQUVBOztBQUVBOztBQUVBLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7O0FBSUQsZ0RBQVM7Ozs7Ozs7OztVQzFJVDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXREYXRhLCB3ZWF0aGVyU3RvcmFnZSwgZm9yZWNhc3RTdG9yYWdlIH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gbGlzdGVuZXJzKCkge1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIuYnRuLXN1Ym1pdFwiKSkge1xuICAgICAgICAgICAgZ2V0RGF0YShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0U2VhcmNoXCIpLnZhbHVlKTtcbiAgICAgICAgICAgIHJlbmRlclVJKCk7XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG5cbn1cblxuZnVuY3Rpb24gcmVuZGVyVUkoKSB7XG5cblxuICAgIC8vIGxldCB0b2RheVdlYXRoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LXdlYXRoZXJcIilcblxuXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBsaXN0ZW5lcnMiLCJpbXBvcnQgbGlzdGVuZXJzIGZyb20gXCIuL0RPTVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JkFQUElEPWZmNDM2ODkwMTRlNjhhOTczZjdkYWU3MDdkZTQxZGZhYCwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgbGV0IGxhdCA9IHdlYXRoZXJEYXRhLmNvb3JkLmxhdDtcbiAgICBsZXQgbG9uID0gd2VhdGhlckRhdGEuY29vcmQubG9uO1xuICAgIGxldCBsb2NhdGlvbiA9IHdlYXRoZXJEYXRhLm5hbWU7XG4gICAgbGV0IGZlZWxzTGlrZSA9IHByb2Nlc3NGZWVsc0xpa2Uod2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlKTtcbiAgICBsZXQgdGVtcCA9IHByb2Nlc3NUZW1wKHdlYXRoZXJEYXRhLm1haW4udGVtcCk7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICAgIGdldEZvcmVjYXN0KGxhdCwgbG9uKTtcblxuICAgIGNvbnN0IHdlYXRoZXIgPSBuZXcgV2VhdGhlciAoXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBmZWVsc0xpa2UuZmVlbHNMaWtlQ2VscyxcbiAgICAgICAgZmVlbHNMaWtlLmZlZWxzTGlrZUZhcixcbiAgICAgICAgdGVtcC50ZW1wQ2VscyxcbiAgICAgICAgdGVtcC50ZW1wRmFyLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICApO1xuXG4gICAgd2VhdGhlclN0b3JhZ2Uud2VhdGhlckFycmF5ID0gW107XG5cbiAgICB3ZWF0aGVyU3RvcmFnZS53ZWF0aGVyQXJyYXkucHVzaCh3ZWF0aGVyKTtcblxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJTdG9yYWdlLndlYXRoZXJBcnJheSk7XG5cblxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChsYXQsIGxvbikge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9ZmY0MzY4OTAxNGU2OGE5NzNmN2RhZTcwN2RlNDFkZmFgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgbGV0IGZvcmVjYXN0RGF0YUFycmF5ID0gZm9yZWNhc3REYXRhLmxpc3Q7XG5cbiAgICBmb3JlY2FzdFN0b3JhZ2UuZm9yZWNhc3RBcnJheSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdERhdGFBcnJheS5sZW5ndGg7IGkgKz0gOCkge1xuICAgICAgICBsZXQgZGF0ZSA9IGZvcmVjYXN0RGF0YUFycmF5W2ldLmR0X3R4dDtcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gZm9yZWNhc3REYXRhLmNpdHkubmFtZVxuICAgICAgICBsZXQgZm9yZWNhc3RUZW1wID0gcHJvY2Vzc1RlbXAoZm9yZWNhc3REYXRhQXJyYXlbaV0ubWFpbi50ZW1wKTtcbiAgICAgICAgbGV0IGZvcmVjYXN0RGVzY3JpcHRpb24gPSBmb3JlY2FzdERhdGFBcnJheVtpXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0ID0gbmV3IEZvcmVjYXN0IChcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgIGZvcmVjYXN0VGVtcC50ZW1wQ2VscyxcbiAgICAgICAgICAgIGZvcmVjYXN0VGVtcC50ZW1wRmFyLFxuICAgICAgICAgICAgZm9yZWNhc3REZXNjcmlwdGlvblxuICAgICAgICApXG5cblxuICAgICAgICBmb3JlY2FzdFN0b3JhZ2UuZm9yZWNhc3RBcnJheS5wdXNoKGZvcmVjYXN0KTtcblxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0U3RvcmFnZS5mb3JlY2FzdEFycmF5KTtcblxufVxuXG5cbmZ1bmN0aW9uIHByb2Nlc3NGZWVsc0xpa2UoZmVlbHNMaWtlKSB7XG5cbiAgICBsZXQgZmVlbHNMaWtlQ2VscyA9IE1hdGguY2VpbCgoZmVlbHNMaWtlIC0gMjczLjE1KSk7XG5cbiAgICBsZXQgZmVlbHNMaWtlRmFyID0gTWF0aC5jZWlsKCgoZmVlbHNMaWtlIC0gMjczLjE1KSAqIDkvNSkgKyAzMik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmZWVsc0xpa2VDZWxzLFxuICAgICAgICBmZWVsc0xpa2VGYXIsXG4gICAgfVxuXG59XG5cblxuZnVuY3Rpb24gcHJvY2Vzc1RlbXAodGVtcCkge1xuXG4gICAgbGV0IHRlbXBDZWxzID0gTWF0aC5jZWlsKCh0ZW1wIC0gMjczLjE1KSk7XG5cbiAgICBsZXQgdGVtcEZhciA9IE1hdGguY2VpbCgoKHRlbXAgLSAyNzMuMTUpICogOS81KSArIDMyKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBDZWxzLFxuICAgICAgICB0ZW1wRmFyLFxuICAgIH1cbn1cblxuXG5jbGFzcyBXZWF0aGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihsb2NhdGlvbiwgZmVlbHNMaWtlQ2VscywgZmVlbHNMaWtlRmFyLCB0ZW1wQ2VscywgdGVtcEZhciwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uLFxuICAgICAgICB0aGlzLmZlZWxzTGlrZUNlbHMgPSBmZWVsc0xpa2VDZWxzLFxuICAgICAgICB0aGlzLmZlZWxzTGlrZUZhciA9IGZlZWxzTGlrZUZhcixcbiAgICAgICAgdGhpcy50ZW1wQ2VscyA9IHRlbXBDZWxzLFxuICAgICAgICB0aGlzLnRlbXBGYXIgPSB0ZW1wRmFyLFxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IHdlYXRoZXJTdG9yYWdlID0gKCgpID0+IHtcblxuICAgIGxldCB3ZWF0aGVyQXJyYXkgPSBbXTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHdlYXRoZXJBcnJheVxuICAgIH07XG5cbn0pKCk7XG5cblxuY2xhc3MgRm9yZWNhc3Qge1xuICAgIGNvbnN0cnVjdG9yKGRhdGUsIGxvY2F0aW9uLCBmb3JlY2FzdFRlbXBDZWxzLCBmb3JlY2FzdFRlbXBGYXIsIGZvcmVjYXN0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSxcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uLFxuICAgICAgICB0aGlzLmZvcmVjYXN0VGVtcENlbHMgPSBmb3JlY2FzdFRlbXBDZWxzLFxuICAgICAgICB0aGlzLmZvcmVjYXN0VGVtcEZhciA9IGZvcmVjYXN0VGVtcEZhcixcbiAgICAgICAgdGhpcy5mb3JlY2FzdERlc2NyaXB0aW9uID0gZm9yZWNhc3REZXNjcmlwdGlvblxuICAgIH1cbn1cblxuXG5leHBvcnQgY29uc3QgZm9yZWNhc3RTdG9yYWdlID0gKCgpID0+IHtcblxuICAgIGxldCBmb3JlY2FzdEFycmF5ID0gW107XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JlY2FzdEFycmF5XG4gICAgfTtcblxufSkoKTtcblxuXG5cbmxpc3RlbmVycygpO1xuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=