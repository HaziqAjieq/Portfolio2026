import type { Project } from "../../../data/data/projectData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group flex flex-col max-w-2xl rounded-2xl border border-gray-200 bg-white items-center p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      {/* Image */}
      <div className="w-full overflow-hidden rounded-xl">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 mt-5 w-full">
        
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-title font-bold text-gray-900 leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-600 font-paragraph leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mt-2">
          {project.tags.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full border border-gray-200 hover:bg-gray-200 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="text-sm font-medium px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
            >
              Live
            </a>
          )}

          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;