import React from 'react'

export function CitiesList({ cities, onAddCity }) {

    return (
        <div>
            {cities && <ul className="cities-list">
                {cities.map((city, index) => <button className="city-btn" onClick={() => { onAddCity(city) }} key={index}>{city.LocalizedName}</button>)}
            </ul>}
        </div>
    )
}
