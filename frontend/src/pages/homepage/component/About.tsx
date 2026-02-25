import { homepageContent } from "../../../content/homepage.type";

const About = () => {
  const { about } = homepageContent;

  return (
    <section className="about bg-gray-50 py-24  overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 z-10">
        
        {/* Title */}
        <h2 className="font-title font-bold text-3xl md:text-4xl text-text-primary text-center mb-16">
          {about.title}
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image */}
          <div className="md:w-1/2 flex justify-center md:justify-start ">
            <img
              src={about.imageUrl}
              alt="About Image"
              className="
                w-[320px] 
                md:w-120 
                lg:w-130
                object-contain

                md:-ml-10
              "
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
            <p className="font-paragraph text-text-secondary leading-8 max-w-xl mx-auto md:mx-0">
              {about.description}
            </p>

            <button className="self-center md:self-start bg-primary text-white px-6 py-3 rounded-xl shadow-md hover:bg-secondary hover:-translate-y-1 transition-all duration-300">
              {about.ctaButton}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;