import type React from "react"
import { homepageContent } from "../../../content/homepage.type"
import type { ServiceList } from "../../../content/homepage.type";
 
// the card component on the same file
const ServiceCard:React.FC<{ service : ServiceList}> = ({service}) => (
<div className="card flex flex-col  text-center w-3/4 gap-2 bg-background py-3 rounded-2xl h-30 md:h-60 justify-center border-2 border-boder ">
   
    <h3 className="text-2xl md:text-3xl font-title font-semibold w-full">{service.title}</h3>
    <p className="text-sm md:text-md font-paragraph font-normal text-center justify-center mx-20">{service.description}</p>
  </div>
);

const Service = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 w-full justify-evenly items-center">
        {homepageContent.services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
    </section>
  )
}

export default Service


// hold 3 cards of what im doing

