
import test2 from "../../../assets/image/heroImage/contactImg.jpg";
import SocialMediaContact from "../../../assets/component/ui/SocialMediaContact";

const Contact = () => {
  return (
    <div className="relative w-screen flex items-center align-middle z-0 h-auto">
      <div className="absolute inset-0">
        <img
          src={test2}
          className="absolute  w-full h-full object-cover animate-bg-zoom"
        />
      </div>
      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/60" />

      <div className="flex  flex-1 md:flex-row w-full ">
        <SocialMediaContact/>
     
      </div>
    </div>
  );
};

export default Contact;
//contact form in other component and attach here
