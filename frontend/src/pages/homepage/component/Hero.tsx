import heroImg from "../../../assets/image/heroImage/test2.png";

const Hero = () => {
  return (
    <section className="flex items-center justify-center pt-30 lg:pt-20 mb-10 md:pt-40  h-screen">
     <div className="flex flex-col gap-5 sm:gap-0 sm:grid  sm:grid-cols-2 lg:grid-cols-3 h-full">

     
        <div className=" flex items-center w-full justify-center">
          <h1 className="text-center w-full font-bold font-title text-3xl m-3">"Learning, Building, Growing"</h1>
        </div>
        <div className="lg:order-3 flex items-center">
          <h2 className="text-center mx-5 sm:text-start font font-medium font-paragraph text-md ">
          "I’m Haziq, exploring how to create websites step by step. Here you’ll find the projects I’m working on as I grow my skills."
          </h2>
        </div>

        {/* image on the first layer */}
        <div className="h-full sm:col-span-2 lg:col-span-1 lg:order-2 flex  items-end  justify-center ">
          <img src={heroImg} className="w-80 md:w-80 lg:w-120 " />
        </div>
   </div>
    </section>
  );
};

export default Hero;

// contain short info about me
// contain button to contact/download cv
// an image for hero section
