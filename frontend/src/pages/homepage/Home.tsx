import About from "./component/About"
import Hero from "./component/Hero"
import Project from "./component/Project"
import Service from "./component/Service"
import Contact from "./component/Contact"
import Work from './component/Work'
const Home = () => {
  return (
    <>
    <div className="flex flex-col">
     <div className="max-w-360 md:px-5  w-full flex flex-col">
      <Hero/>
      <Service/>
      <About/>
      <Project/>
      <Work/>
      </div>
      <Contact/>
      </div>
    </>
  )
}

export default Home
