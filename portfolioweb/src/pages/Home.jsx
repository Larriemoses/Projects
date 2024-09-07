import React from 'react'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GithubIcon from '@mui/icons-material/GitHub'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className="about">
        <h2>Hi, My Name is Moses </h2>
        <div className="prompt">
          <p>A software developer with passion for learning of creating.</p>
          <LinkedinIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="List">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJs, HTML, CSS, Bootstrap, MaterialUI, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
             Javascript, Python
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home