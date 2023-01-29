import React from 'react'
import group from "./Group 77.png"
import "../detail.css"
export default function MainContent () {
  return (
    <div className='maincon'>
      <img src={group} className="group_png"/>
    <h1>TITLE</h1>
    <p>THE CONTENT OF THIS PAGE IS NOT SO IMPORTANT</p>
    <ul className='points'>
        <li>LEARN HTML</li>
        <li>THEN CSS , JS</li>
        <li>NOW REACT</li>
    </ul>
    </div>
  )
}


