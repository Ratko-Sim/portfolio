import React from 'react'
import Fade from 'react-reveal/Fade';
import ProjectCard from "../ProjectCard/ProjectCard"
import "./projects.scss"

function Projects() {

  const data = [
    {
      title: "Alpaca-farm website",
      languages: "HTML | CSS",
      info: "Group project of 2 - a static website of an imagined alpaca farm tour company.",
      demo: "https://ratko-sim.github.io/project-alpaca-farm/",
      code: "https://github.com/Ratko-Sim/project-alpaca-farm",
    },
    {
      title: "Pokemon Game",
      languages: "HTML | CSS | VANILLA JS",
      info: "Group project of 3 - a fun pokemon battle game where you attack opponents, buy stardust and hear some cool sound effects.",
      demo: "https://github.com/Ratko-Sim/pokemon-game",
      code: "https://ratko-sim.github.io/pokemon-game/",
    },
    {
      title: "E-commerce shop",
      languages: "SASS | REACT JS | REDUX | API | NPM",
      info: "Group project of 3 - a fashion and tech store with a variety of pages, where you can add/remove items from the shopping cart.",
      demo: "https://arhera-shop.netlify.app/",
      code: "https://github.com/Ratko-Sim/ecommerce-shop",
    },
    {
      title: "Portfolio App",
      languages: "SASS | REACT JS | NPM",
      info: "An application style portfolio page displaying my individual and group projects.",
      demo: "asasas",
      code: "https://github.com/Ratko-Sim/portfolio",
    },
  ];

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
