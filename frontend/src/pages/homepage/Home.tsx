import About from "./component/About"
import Hero from "./component/Hero"
import Project from "./component/Project"
import Service from "./component/Service"
import Contact from "./component/Contact"
import Work from './component/Work'
const Home = () => {
  return (
    <>
    <div className="flex flex-col items-center">
     <div className="max-w-360 md:px-5  w-full flex flex-col  items-center justify-center">
      <Hero/>
      <Service/>
      <About/>
      <div className="flex bottom-0 left-20 md:left-40 transform -translate-x-1/2 w-3/5 h-1 bg-boder my-10 z-0 "></div>
      <Work/>
       <div className="flex bottom-0 left-20 md:left-40 transform -translate-x-1/2 w-3/5 h-1 bg-boder my-10 z-0 "></div>
      <Project/>
      
      </div>
      <Contact/>
      </div>
    </>
  )
}

export default Home
