import React,{useState} from 'react'
import "./Navbar.css"
import PropTypes from 'prop-types'

// import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const [active, setactive] = useState(false)

    const handleClick=(event)=>{
        setactive(active=>!active);
    }

    let toggleClassChec = active ? 'active': null;

    return (
        <>
            <nav className={`nav-${props.mode}`}>
                <h1>{props.title}</h1>
                <button onClick={handleClick} href="#" className='toggle-button'>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <ul className={`${toggleClassChec}`}>
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
