import heroImg from "../../../assets/image/heroImage/test2.png";

const Hero = () => {
  return (
    <section className="flex  items-center justify-center pt-30 lg:pt-20 mb-10 md:pt-40  h-screen overflow-hidden">
     <div className="flex flex-col justify-evenly gap-5 lg:grid lg:grid-cols-3 h-full">

     
        <div className=" flex items-center w-full   ">
          <h1 className="text-center  w-full font-bold font-title text-3xl md:text-6xl m-3 text-text-primary">"Learning, Building, Growing"</h1>
        </div>
        <div className=" flex flex-col  justify-center lg:order-3 ">
          <h2 className="text-center mx-5 lg:text-start font font-medium font-paragraph text-sm md:text-xl text-text-secondary ">
          "I’m Haziq, exploring how to create websites step by step. Here you’ll find the projects I’m working on as I grow my skills."
          </h2>
         
        </div>

        {/* image on the first layer */}
        <div className="h-full sm:col-span-2 lg:col-span-1 lg:order-2 flex  items-end  justify-center ">
          <img src={heroImg} className="w-120 md:180  lg:w-full " />
        </div>
   </div>
    </section>
  );
};

export default Hero;

// contain short info about me
// contain button to contact/download cv
// an image for hero section
