import type React from "react"
import { homepageContent } from "../../../content/homepage.type"
import type { ServiceList } from "../../../content/homepage.type";
 
// the card component on the same file
const ServiceCard:React.FC<{ service : ServiceList}> = ({service}) => (
<div className="card flex flex-col text-center w-3/4 gap-2 bg-red-400 py-3 rounded-2xl h-30 justify-center border-2 border-red-700 ">
   
    <h3 className="text-2xl font-title font-semibold">{service.title}</h3>
    <p className="text-sm font-paragraph font-normal ">{service.description}</p>
  </div>
);

const Service = () => {
  return (
    <section className="flex flex-col gap-4 w-full justify-evenly items-center">
        {homepageContent.services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
    </section>
  )
}

export default Service


// hold 3 cards of what im doing

