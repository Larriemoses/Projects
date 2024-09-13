import React from 'react';
// import Pic1 from '../assets/img1.jpg';


function ProjectItem({ image, name }) {
  return (
    <div className="projectItem">
      {/* Fix: Use backticks for template literals */}
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;
