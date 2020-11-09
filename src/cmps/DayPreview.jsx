import React from 'react'

export function DayPreview({ day }) {

    function farToCelsius(temperature) {
        return temperature = ((temperature - 32) * 5 / 9).toFixed(0)
    }

     function getIconUrl() {
        let iconNum = day.Day.Icon;
        if (iconNum < 10) iconNum = '0' + iconNum;
        return `https://developer.accuweather.com/sites/default/files/${iconNum}-s.png`
     }

    function setDate() {
        let date = day.Date
        let newDate = date.split('T')
        date = newDate[0]
        newDate = date.split('-')
        date = newDate.reverse().join('.')
        console.log('date', date);
        return date
    }

    return (
        <div className="day-card">
            <p className="date">{setDate()}</p>
            <hr/>
            <img src={getIconUrl()} alt=""/>
            <hr/>
            <p >{day.Day.IconPhrase}</p>
            <p>{farToCelsius(day.Temperature.Minimum.Value)}°c - {farToCelsius(day.Temperature.Maximum.Value)}°c</p>
        </div>
    )
}
