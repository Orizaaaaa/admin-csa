import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarList({ title, condition, location }) {
    return (
        <li className="nav-item">
            <NavLink to={location} className={`nav-link  ${condition}`} aria-current="page" >{title}</NavLink>
        </li>
    )
}

export default NavbarList