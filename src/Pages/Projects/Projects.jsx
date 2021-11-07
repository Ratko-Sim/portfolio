import React from 'react'
import Fade from 'react-reveal/Fade';
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import "./projects.scss"
import data from "./data"

function Projects() {

  return (

    <Fade clear cascade>
      <div className="Projects">
        <h2>Projects</h2>
        <div className="Projects__Cards">
          {data.map((data) => (
            <ProjectCard data={data} />
          ))}
        </div>
      </div>
    </Fade>
  )
}

export default Projects
