import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"

import '../styles/Experience.css'

function Experience() {
  return (
   <div className="experience">
      <VerticalTimeline className="VT"lineColor='#3e497a'>
        <VerticalTimelineElement style={{ color: 'black' }} className='vertical-timeline-element--education' date="2010 - 2014" 
        iconStyle={{background: '#3e497a', color: "#fff "}} icon={<SchoolIcon />}>
          <h3  style={{ color: '#3e497a' }} vertical-timeline-element-title>Gbabijo High School, Gbabijo, Ondo State</h3>
          <p>High School Disploma</p>
        </VerticalTimelineElement>
         
        <VerticalTimelineElement className='vertical-timeline-element--education' date="2020 - 2025" iconStyle={{background: '#3e497a', color: "#fff "}} icon={<SchoolIcon />}>
          <h3 style={{ color: '#3e497a' }}vertical-timeline-element-title>Federal University of Technology, Owerri, Imo State</h3>
          <p style={{ color: 'black' }}>B.Tech Mathematics</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date="2022 - 2024" iconStyle={{background: '#ff6347', color: "#fff "}} icon={<WorkIcon />}>
          <h3 style={{ color: '#3e497a' }}vertical-timeline-element-title>El-CybersolHUB</h3>
          <p style={{ color: 'black' }}>UI/UX Designer</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date="2022 - 2024" iconStyle={{background: '#ff6347', color: "#fff "}} icon={<WorkIcon />}>
          <h3 style={{ color: '#3e497a' }}vertical-timeline-element-title>Upwork</h3>
          <p style={{ color: 'black' }}>Professional Freelancer (Technical Writer) </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    
      
    </div>
      
  )
}

export default Experience