import React from "react"
import "../Styles/video.css"
//import "../index.css"

const Video = () => {

  return(
    <div className="videoFrame">
      <h3 className="section-title">Welcome to Penang!</h3>
      <iframe 
        width="560" 
        height="315"
        title="Penang Tourism"
        src="https://www.youtube.com/embed/GqIgUx43dMQ" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;