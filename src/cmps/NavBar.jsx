import React from 'react'
import { NavLink } from 'react-router-dom'


export function NavBar() {
    return (
        <div className="main-nav">
            <NavLink className="nav-btn" to="/">Home</NavLink>
            <NavLink className="nav-btn" to="/favorites">Favorites</NavLink>
        </div>
    )
}
