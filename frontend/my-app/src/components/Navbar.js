import React from "react";

import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return(
        <>
            <div className="nav_section">
                <div className="container">
                    <div className="nav_inner">
                        <ul className="d-flex">
                            <li className="nav-item">
                                <NavLink to="/">Home</NavLink> 
                            </li>
                            <li className="nav-item">
                                <NavLink to="/create">Create</NavLink> 
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;