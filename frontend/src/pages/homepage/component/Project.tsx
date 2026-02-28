import ProjectCard from "../../../assets/component/card/ProjectCard"
import { projects } from "../../../data/dummy-data/projectDummy"

const Project = () => {
  return (
    <section className="h-screen ">
      <h1 className="text-3xl md:text-4xl lg:text-6xl text-balance font-semibold text-text-primary">A GLIMPSE OF PROJECT I'VE DONE</h1>
        {/* project card section */}
      <div className="mt-10 mx-5 lg:mx-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
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