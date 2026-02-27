import ProjectCard from "../../../assets/component/card/ProjectCard"
import { projects } from "../../../data/dummy-data/projectDummy"

const Project = () => {
  return (
    <section>
      <h1 className="text-3xl md:text-4xl lg:text-6xl text-balance font-semibold font-title">A GLIMPSE OF PROJECT I'VE DONE</h1>
        {/* project card section */}
      <div>
        {projects.map((project) => (
             <ProjectCard
          key={project.id}
          project={project}
        />
        ))}
     
      </div>

    </section>
  )
}

export default Project


// a component for showcasing my project done/halfway with a card as an example