import React from 'react'
import "./Navbar.css"
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <nav className={`nav-${props.mode}`}>
                <h1>{props.title}</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><button onClick={props.toggleMode}>{props.mode}</button></li>
                </ul>
            </nav>
        </>
    )
}

Navbar.propTypes = {title: PropTypes.string}
Navbar.defaultTypes = {title: "What the title"}
