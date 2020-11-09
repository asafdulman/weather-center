import React, { Component } from 'react'
import { CitiesList } from '../cmps/CitiesList'
import { DaysList } from '../cmps/DaysList'
import { weatherService } from '../services/weatherService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Modal from '../cmps/Modal'

export class Home extends Component {

    state = {
        showModal: false,
        isFav: false,
        value: '',
        cityToShow: '',
        cityToSave: '',
        cities: [],
    }

    onHandleInput = async ({ target }) => {
        var field = target.name;
        var value = target.value;
        this.setState(prevState => {
            return {
                city: {
                    ...prevState.city,
                    [field]: value
                },
                value
            }
        })

        const cities = await weatherService.getCities(value)
        // console.log('cities', cities);
        this.setState({ cities })
    }

    onAddCity = async (city) => {
        const cityToShow = await weatherService.getWeather(city.Key)
        // console.log('city', cityToShow.DailyForecasts);
        this.setState({ cityToSave: city, cityToShow, value: '', cities: [] })
    }

    addToFavorites = (city) => {
        weatherService.saveFavCity(city)
        // console.log('city added to favs', city);
        this.setState({ isFav: !this.state.isFav, showModal: !this.state.showModal })
        setTimeout(() => {
            this.setState({ showModal: !this.state.showModal })
        }, 2000);
    }

    render() {
        return (
            <div>
                <div class="stars small"></div>
                <div class="stars medium"></div>
                <div class="stars large"></div>

                <div className="home-box">
                    <h1 className="home-heading">Weather-Center</h1>
                    <input className="home-input" type="text" name="days" autoComplete="off" placeholder="Type a Place" onChange={this.onHandleInput} value={this.state.value} />
                    <CitiesList onAddCity={this.onAddCity} cities={this.state.cities} />
                    <FontAwesomeIcon onClick={() => { this.addToFavorites(this.state.cityToSave) }} className={this.state.isFav ? 'fav-icon-active' : 'fav-icon'} icon={faMapMarkerAlt} />
                    <DaysList days={this.state.cityToShow.DailyForecasts} city={this.state.cityToSave} />
                    {this.state.showModal && <Modal />}
                </div>
            </div>
        )
    }
}
