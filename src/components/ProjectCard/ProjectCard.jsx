import React from 'react'
import Fade from 'react-reveal/Fade';
import "./projectCard.scss"



const ProjectCard = ({ data }) => {


  return (
    <Fade clear cascade key={data.id}>
      <div className="Project__Card" >
        <img src={data.image} alt="" className="Card__Image" />
        <div className="Card__Data">
          <Fade clear cascade>
            <h3>{data.title}</h3>
            <h4>{data.languages}</h4>
            <p>{data.info}</p>
            <div className="Card__Link">
              <a className="Link" href={data.demo} target="_blank" rel="noreferrer">DEMO</a>
              <a className="Link" href={data.code} target="_blank" rel="noreferrer">CODE</a>
            </div>
          </Fade>
        </div>
      </div>
    </Fade>
  )
}

export default ProjectCard

