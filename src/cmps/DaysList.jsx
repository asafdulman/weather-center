import React from 'react'
import { DayPreview } from './DayPreview'


export function DaysList({ days, city }) {


    return (
        <div className="days-list-box">
            <h3>{city.LocalizedName}</h3>
            <div className="days-list">
            
            {days && days.map((day, index) => <DayPreview key={index} day={day} city={city} />)}
            </div>

        </div>
    )
}
