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

async function getCities(value) {
    const res = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=x6SNjBEgOiwSoE0Sm7AFRco0OWsPxKcT&q=${value}&language=en-us`)
    return res.data
}
// function getCities(value) {
//     return axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=mlVMZtayZdElb8tDwwm2AdErMADsCHOf&q=${value}&language=en-us`)
//         .then(res => res.data)
// }
async function getWeather(cityKey) {
    const res = await axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=x6SNjBEgOiwSoE0Sm7AFRco0OWsPxKcT&language=en-us&details=false&metric=false`)
        return res.data
}
// function getWeather(cityKey) {
//     return axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=mlVMZtayZdElb8tDwwm2AdErMADsCHOf&language=en-us&details=false&metric=false`)
//         .then(res => res.data)
// }

//x6SNjBEgOiwSoE0Sm7AFRco0OWsPxKcT
//jbQCGr5hw3CneCAiXlvKodc3ASLREpxy
//17nM18URNW0l13ncG90uLIxINREYuwzk


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

