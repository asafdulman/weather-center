import React, { Component } from 'react'
import { DaysList } from '../cmps/DaysList'
import { weatherService } from '../services/weatherService'

export class Favorites extends Component {

    state = {
        favCities: [],
        cityToShow: '',
        cityToSave:'',
    }

    componentDidMount() {
        const favCities = this.loadFavCities()
        console.log('favCities', favCities);
        this.setState({ favCities })
    }

    loadFavCities = () => {
        return weatherService.loadFavCity('FAV_CITIES')
    }

    onAddCity = async (city) => {
        const cityToShow = await weatherService.getWeather(city.Key)
        console.log('city', cityToShow.DailyForecasts);
        this.setState({ cityToSave: city, cityToShow})
    }

    render() {

        const { favCities } = this.state
        if (!favCities) return <h1 className="no-fav">Favorite places box is empty.</h1>
        return (
            <div className="favorite-box">
                <h1>Your Favorite Places</h1>
                <ul className="favorite-list">
                    {favCities.map((city, index) => <h3 onClick={()=> {this.onAddCity(city)}} key={index} className="city-name">{city.LocalizedName}</h3>)}
                </ul>

                <DaysList  days={this.state.cityToShow.DailyForecasts} city={this.state.cityToSave} />
            </div>
        )
    }
}
