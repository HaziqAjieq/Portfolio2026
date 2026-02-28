import { homepageContent } from "../../../content/homepage.type";

const About = () => {
  const { about } = homepageContent;

  return (
    <section className="about flex flex-col items-center bg-gray-50 py-24    ">
      <div className="max-w-6xl mx-full px-8  ">
        
        {/* Title */}
        <h2 className="flex  items-center justify-center md:hidden font-title font-bold text-4xl md:text-4xl text-text-primary text-center mb-10">
          {about.title}
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center  ">
            <img
              src={about.imageUrl}
              alt="About Image"
              className="
                w-[320px] 
                md:w-120 
                lg:w-130
                object-contain
                border-none
                rounded-full
                md:-ml-10
                bg-surface
                shadow-bottom
                h-full
              "
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 flex flex-col gap-2 text-center md:text-left">
            <h2 className="hidden md:flex items-center justify-center font-title font-bold text-3xl md:text-4xl text-text-primary text-center mb-10">
          {about.title}
        </h2>

            <p className="font-paragraph text-text-secondary leading-8 max-w-xl mx-auto md:mx-0">
              {about.description}
            </p>

            <button className="self-center md:self-start bg-primary-accent text-white px-6 py-3 rounded-xl shadow-md hover:bg-secondary hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              {about.ctaButton}
            </button>
          </div>

        </div>
     
      </div>
        <div className="flex bottom-0 left-20 md:left-40 transform -translate-x-1/2 w-3/5 h-1 bg-boder mt-10 md:mt-20 z-0 "></div>
    </section>
  );
};

export default About;