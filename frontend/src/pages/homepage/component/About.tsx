import { homepageContent } from "../../../content/homepage.type";

const About = () => {
  const { about } = homepageContent;
  return (
    <section className="about flex flex-col items-center gap-5  bg-white mt-10 my-5 rounded-xl">
      <h2 className="font-bold font-title text-2xl md:text-3xl text-text-primary mt-5">
        {about.title}
      </h2>
      <div className="flex flex-col md:flex-row mx-5 items-center pb-3">
        <div>
          <img
            src={about.imageUrl}
            alt="About Image"
            className="w-80 h-60 md:w-160 md:h-80 md:ml-10 object-cover rounded-lg mb-4"
          />
        </div>
        <div className="font-paragraph w-full  mx-15 flex flex-col items-center md:items-start gap-5">
          <p className=" text-md font-paragraph text-start tracking-wide line-height-7 text-text-secondary ">   
    {about.description}</p>

          <button className="bg-primary text-white  py-3 px-4 bg-primary-accent  selection:px-4 py-2 rounded-lg hover:bg-secondary transition-colors duration-300">
            {about.ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

// contain short info about me
// contain button to contact/download cv
// an image for about section
