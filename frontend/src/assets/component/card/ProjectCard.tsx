import type { Project } from "../../../data/dummy-data/projectDummy"

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project } : ProjectCardProps) => {
  return (
    <div className="flex flex-col max-w-2xl rounded-xl border-2 bg-gray-50 border-boder items-center px-5 shadow-xl ">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="mt-5  rounded-2xl items-center w-full h-70 md:h-90 lg:h-100 overflow-hidden  "
      />

      <div className="flex flex-col gap-5 mt-5 w-full">
        <h3 className="text-2xl md:text-3xl text-balance text-start font-title font-bold text-text-primary"> {project.title}</h3>
        <p className="text-lg font-paragraph text-balance text-start md:text-xl">{project.description}</p>

          {/* tech stack need to map since its an object */}
          <div className="flex gap-2 w-auto flex-wrap">
            {project.technologies.map((tech,index) => (
              <span
                key={index}
                className="text-sm text-shadow-md bg-gray-200 px-2 py-1 mb-4 rounded-full shadow-lg border border-gray-500 font-paragraph font-light "
              >
                {tech}
              </span>
            ))}
          </div>

      </div>
    </div>
  )
}

export default ProjectCard
