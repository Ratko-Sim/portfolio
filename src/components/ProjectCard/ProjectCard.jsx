import React from 'react'
import "./projectCard.scss"

const ProjectCard = ({ data }) => {

  return (
    <div className="Project__Card" >
      <div className="Card__Background">
        <img src={data.image} alt="" />
      </div>
      <div className="Card__Body">
        <div className="Card__Data">
          <h3>{data.title}</h3>
          <span>{data.languages}</span>
          <p>{data.info}</p>
        </div>
        <div className="Card__Link">
          <button>
            <div className="animation"></div>
            <a className="title" href={data.code} target="_blank" rel="noreferrer">CODE</a>
          </button>
          <button>
            <div className="animation"></div>
            <a className="title" href={data.demo} target="_blank" rel="noreferrer">DEMO</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

