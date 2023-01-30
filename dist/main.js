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
            console.log(___WEBPACK_IMPORTED_MODULE_0__.weatherStorage.weatherArray);
            console.log(___WEBPACK_IMPORTED_MODULE_0__.forecastStorage.forecastArray);
        }

    });


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


const weatherStorage = (() => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7O0FBRTdEOztBQUVBOztBQUVBO0FBQ0EsWUFBWSwwQ0FBTztBQUNuQix3QkFBd0IsMERBQTJCO0FBQ25ELHdCQUF3Qiw0REFBNkI7QUFDckQ7O0FBRUEsS0FBSzs7O0FBR0w7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJlOztBQUV2QjtBQUNQLHNGQUFzRixLQUFLLDJDQUEyQyxhQUFhO0FBQ25KOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBLHlGQUF5RixJQUFJLE9BQU8sSUFBSSwyQ0FBMkMsYUFBYTtBQUNoSzs7QUFFQTs7QUFFQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087O0FBRVA7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7O0FBSUQsZ0RBQVM7Ozs7Ozs7OztVQ2hJVDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXREYXRhLCB3ZWF0aGVyU3RvcmFnZSwgZm9yZWNhc3RTdG9yYWdlIH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gbGlzdGVuZXJzKCkge1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIuYnRuLXN1Ym1pdFwiKSkge1xuICAgICAgICAgICAgZ2V0RGF0YShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0U2VhcmNoXCIpLnZhbHVlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJTdG9yYWdlLndlYXRoZXJBcnJheSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdFN0b3JhZ2UuZm9yZWNhc3RBcnJheSk7XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdGVuZXJzIiwiaW1wb3J0IGxpc3RlbmVycyBmcm9tIFwiLi9ET01cIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoY2l0eSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZBUFBJRD1mZjQzNjg5MDE0ZTY4YTk3M2Y3ZGFlNzA3ZGU0MWRmYWAsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGxldCBsYXQgPSB3ZWF0aGVyRGF0YS5jb29yZC5sYXQ7XG4gICAgbGV0IGxvbiA9IHdlYXRoZXJEYXRhLmNvb3JkLmxvbjtcbiAgICBsZXQgbG9jYXRpb24gPSB3ZWF0aGVyRGF0YS5uYW1lO1xuICAgIGxldCBmZWVsc0xpa2UgPSBwcm9jZXNzRmVlbHNMaWtlKHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZSk7XG4gICAgbGV0IHRlbXAgPSBwcm9jZXNzVGVtcCh3ZWF0aGVyRGF0YS5tYWluLnRlbXApO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbiAgICBnZXRGb3JlY2FzdChsYXQsIGxvbik7XG5cbiAgICBjb25zdCB3ZWF0aGVyID0gbmV3IFdlYXRoZXIgKFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgZmVlbHNMaWtlLmZlZWxzTGlrZUNlbHMsXG4gICAgICAgIGZlZWxzTGlrZS5mZWVsc0xpa2VGYXIsXG4gICAgICAgIHRlbXAudGVtcENlbHMsXG4gICAgICAgIHRlbXAudGVtcEZhcixcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgKTtcblxuICAgIHdlYXRoZXJTdG9yYWdlLndlYXRoZXJBcnJheS5wdXNoKHdlYXRoZXIpO1xuXG4gICAgY29uc29sZS5sb2cod2VhdGhlclN0b3JhZ2Uud2VhdGhlckFycmF5KTtcblxuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxhdCwgbG9uKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD1mZjQzNjg5MDE0ZTY4YTk3M2Y3ZGFlNzA3ZGU0MWRmYWAsIHttb2RlOiAnY29ycyd9KTtcbiAgICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBsZXQgZm9yZWNhc3REYXRhQXJyYXkgPSBmb3JlY2FzdERhdGEubGlzdDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3REYXRhQXJyYXkubGVuZ3RoOyBpICs9IDgpIHtcbiAgICAgICAgbGV0IGRhdGUgPSBmb3JlY2FzdERhdGFBcnJheVtpXS5kdF90eHQ7XG4gICAgICAgIGxldCBmb3JlY2FzdFRlbXAgPSBwcm9jZXNzVGVtcChmb3JlY2FzdERhdGFBcnJheVtpXS5tYWluLnRlbXApO1xuICAgICAgICBsZXQgZm9yZWNhc3REZXNjcmlwdGlvbiA9IGZvcmVjYXN0RGF0YUFycmF5W2ldLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgZm9yZWNhc3QgPSBuZXcgRm9yZWNhc3QgKFxuICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgIGZvcmVjYXN0VGVtcC50ZW1wQ2VscyxcbiAgICAgICAgICAgIGZvcmVjYXN0VGVtcC50ZW1wRmFyLFxuICAgICAgICAgICAgZm9yZWNhc3REZXNjcmlwdGlvblxuICAgICAgICApXG5cbiAgICAgICAgZm9yZWNhc3RTdG9yYWdlLmZvcmVjYXN0QXJyYXkucHVzaChmb3JlY2FzdCk7XG5cbiAgICB9XG5cbn1cblxuXG5mdW5jdGlvbiBwcm9jZXNzRmVlbHNMaWtlKGZlZWxzTGlrZSkge1xuXG4gICAgbGV0IGZlZWxzTGlrZUNlbHMgPSBNYXRoLmNlaWwoKGZlZWxzTGlrZSAtIDI3My4xNSkpO1xuXG4gICAgbGV0IGZlZWxzTGlrZUZhciA9IE1hdGguY2VpbCgoKGZlZWxzTGlrZSAtIDI3My4xNSkgKiA5LzUpICsgMzIpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmVlbHNMaWtlQ2VscyxcbiAgICAgICAgZmVlbHNMaWtlRmFyLFxuICAgIH1cblxufVxuXG5cbmZ1bmN0aW9uIHByb2Nlc3NUZW1wKHRlbXApIHtcblxuICAgIGxldCB0ZW1wQ2VscyA9IE1hdGguY2VpbCgodGVtcCAtIDI3My4xNSkpO1xuXG4gICAgbGV0IHRlbXBGYXIgPSBNYXRoLmNlaWwoKCh0ZW1wIC0gMjczLjE1KSAqIDkvNSkgKyAzMik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wQ2VscyxcbiAgICAgICAgdGVtcEZhcixcbiAgICB9XG59XG5cblxuY2xhc3MgV2VhdGhlciB7XG4gICAgY29uc3RydWN0b3IobG9jYXRpb24sIGZlZWxzTGlrZUNlbHMsIGZlZWxzTGlrZUZhciwgdGVtcENlbHMsIHRlbXBGYXIsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbixcbiAgICAgICAgdGhpcy5mZWVsc0xpa2VDZWxzID0gZmVlbHNMaWtlQ2VscyxcbiAgICAgICAgdGhpcy5mZWVsc0xpa2VGYXIgPSBmZWVsc0xpa2VGYXIsXG4gICAgICAgIHRoaXMudGVtcENlbHMgPSB0ZW1wQ2VscyxcbiAgICAgICAgdGhpcy50ZW1wRmFyID0gdGVtcEZhcixcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCB3ZWF0aGVyU3RvcmFnZSA9ICgoKSA9PiB7XG5cbiAgICBsZXQgd2VhdGhlckFycmF5ID0gW107XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3ZWF0aGVyQXJyYXlcbiAgICB9O1xuXG59KSgpO1xuXG5cbmNsYXNzIEZvcmVjYXN0IHtcbiAgICBjb25zdHJ1Y3RvcihkYXRlLCBmb3JlY2FzdFRlbXBDZWxzLCBmb3JlY2FzdFRlbXBGYXIsIGZvcmVjYXN0RGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZSxcbiAgICAgICAgdGhpcy5mb3JlY2FzdFRlbXBDZWxzID0gZm9yZWNhc3RUZW1wQ2VscyxcbiAgICAgICAgdGhpcy5mb3JlY2FzdFRlbXBGYXIgPSBmb3JlY2FzdFRlbXBGYXIsXG4gICAgICAgIHRoaXMuZm9yZWNhc3REZXNjcmlwdGlvbiA9IGZvcmVjYXN0RGVzY3JpcHRpb25cbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGZvcmVjYXN0U3RvcmFnZSA9ICgoKSA9PiB7XG5cbiAgICBsZXQgZm9yZWNhc3RBcnJheSA9IFtdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9yZWNhc3RBcnJheVxuICAgIH07XG5cbn0pKCk7XG5cblxuXG5saXN0ZW5lcnMoKTtcblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9