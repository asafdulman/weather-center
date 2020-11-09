import axios from 'axios';
import { storageService , loadFromStorage } from './storageService';

export const weatherService = {
    getWeather,
    getCities,
    saveCity,
    loadCity,
    saveFavCity,
    loadFavCity
}

var favCities = []
var citiesNames = []

function getCities(value) {
    return axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=mlVMZtayZdElb8tDwwm2AdErMADsCHOf&q=${value}&language=en-us`)
        .then(res => res.data)
}
function getWeather(cityKey) {
    return axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=mlVMZtayZdElb8tDwwm2AdErMADsCHOf&language=en-us&details=false&metric=false`)
        .then(res => res.data)
}


function saveCity(city) {
    storageService.saveToStorage('CITY' ,city)
}

function loadCity(key) {
    storageService.loadFromStorage(key)
}

function saveFavCity(city) {
    favCities.push(city)
    storageService.saveToStorage('FAV_CITIES' ,favCities)
}

function loadFavCity(key) {
    return storageService.loadFromStorage(key)
}

