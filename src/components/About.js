import React from 'react'
import './About.css'

export default function About(props) {
  return (
    <>
        <hr className={`about-hr-${props.mode}`} />
        <h1 className={`about-h1-${props.mode}`}>About Me</h1>
        <p className={`about-p-${props.mode}`}> Just another nerd living the life </p>
    </>
  )
}
