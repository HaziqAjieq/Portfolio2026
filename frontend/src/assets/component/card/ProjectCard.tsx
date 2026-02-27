import type { Project } from "../../../data/dummy-data/projectDummy"

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project } : ProjectCardProps) => {
  return (
    <div>
      <img
        src={project.imageUrl}
        alt={project.title}
        className=""
      />

      <div>
        <h3> {project.title}</h3>
        <p>{project.description}</p>

          {/* tech stack need to map since its an object */}
          <div>
            {project.technologies.map((tech,index) => (
              <span
                key={index}
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
