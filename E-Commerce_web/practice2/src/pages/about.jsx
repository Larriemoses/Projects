import React from 'react'
import { useToggle } from './useToggle'

function About() {
    const [isVisible, toggle] = useToggle ()

  return (
    <div className='About'>
        <button onClick={toggle}>
            {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <h1>Hidden text</h1>}

    </div>
  )
}

export default About