
import heroImg from "../../../assets/image/heroImage/test2.png";
import { homepageContent } from "../../../content/homepage.type";

const Hero = () => {
  const { hero } = homepageContent ;
  return (
    <section className="hero flex  items-center justify-center pt-30 lg:pt-20 mb-10 md:pt-40  h-screen overflow-hidden ">
     <div className="flex flex-col justify-evenly gap-5 lg:grid lg:grid-cols-3 h-full">

     
        <div className=" flex items-center w-full   ">
          <h1 className="text-center  w-full font-bold font-title text-3xl md:text-6xl m-3 text-text-primary">{hero.title}</h1>
        </div>
        <div className=" flex flex-col  justify-center lg:order-3 ">
          <h2 className="text-center mx-5 lg:text-start font font-medium font-paragraph text-md md:text-xl text-text-secondary ">
         {hero.subtitle}
          </h2>
         
        </div>

        {/* image on the first layer */}
        <div className="md:h-full  sm:col-span-2 lg:col-span-1 lg:order-2 flex  items-end  justify-center  ">
          <img src={heroImg} className="  w-80 sm:w-90 md:w-160 lg:w-full rounded-b-full  " />
        </div>
   </div>
    </section>
  );
};

export default Hero;

// contain short info about me
// contain button to contact/download cv
// an image for hero section
