import { workexperience } from "../../../data/workexp/workexp";
import cv  from "../../../data/workexp/MUHAMMAD_HAZIQ_CV.pdf";

const Work = () => {
  return (
    <section className="w-full max-w-4xl mx-auto  px-6 md:px-0  ">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
        Work Experience
      </h2>

      <div className="relative border-l-2 border-gray-200 pl-6 space-y-10">
        {workexperience.map((exp) => (
          <div key={exp.id} className="relative">

            {/* Dot */}
            <div className="absolute -left-2.5 top-2 w-4 h-4 bg-primary-accent rounded-full"></div>

            {/* Card */}
            <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600 text-sm">
                {exp.company} • {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-gray-700 mt-3 text-sm">
                {exp.description}
              </p>
            </div>

          </div>
        ))}


      <a
              href={cv}
              download="MUHAMMAD_HAZIQ_CV.pdf"
              className="cv-btn  self-center md:self-start bg-primary-accent text-white px-6 py-3 rounded-xl shadow-md hover:bg-secondary hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              Download CV
              
            </a>
      </div>

    </section>  
      
  
  )
}

export default Work
//purpose for this component is for showcasing a working experience as developer, simple short for not it related.
//save it as a data
