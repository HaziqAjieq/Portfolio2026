import type React from "react"
import { homepageContent } from "../../../content/homepage.type"
import type { ServiceList } from "../../../content/homepage.type";
 
// the card component on the same file
const ServiceCard:React.FC<{ service : ServiceList}> = ({service}) => (
<div className="card">
   
    <h3>{service.title}</h3>
    <p>{service.description}</p>
  </div>
);

const Service = () => {
  return (
    <section>
        {homepageContent.services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
    </section>
  )
}

export default Service


// hold 3 cards of what im doing

