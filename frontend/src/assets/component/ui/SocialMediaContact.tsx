import React from "react";
import { SocialMedia } from "@nightmaregaurav/react-social-media-links";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ContactForm from "./ContactForm";

interface SocialLink {
  media: SocialMedia;
  link: string;
  name: string;
}

const SocialMediaContact = () => {

  const iconMap: Record<string, React.ReactElement> = {
    [SocialMedia.GitHub]: <FaGithub />,
    [SocialMedia.LinkedIn]: <FaLinkedin />,
    [SocialMedia.Other]: <FaWhatsapp />,
  };

  const socialLinks: SocialLink[] = [
    {
      media: SocialMedia.GitHub,
      link: "https://github.com/HaziqAjieq",
      name: "GitHub",
    },
    {
      media: SocialMedia.LinkedIn,
      link: "https://linkedin.com/in/muhammad-haziq-khair/",
      name: "LinkedIn",
    },
    {
      media: SocialMedia.Other,
      link: "https://wa.me/601151112216?text=[Sending Message From your Website!]",
      name: "Whatsapp",
    }
  ];

  return (
    <div className="w-full flex flex-col gap-4 mx-auto my-16 px-6 py-8 bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg text-white">
      
      <h1 className="text-2xl md:text-3xl font-bold text-center">
        Let's Work Together
      </h1>

      <h3 className="text-lg md:text-xl text-center">
        Have a project in mind? I'd love to hear about it. Let's discuss how we
        can bring your vision to life.
      </h3>

      {/* ✅ Social Links */}
       <div className="flex flex-col items-center align-middle  w-full">
      <div className="flex flex-col md:flex-row gap-3 mt-4">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 max-w-50 px-5 py-3 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-105 transition"
          >
            {/* Icon */}
            <span className="text-xl">
              {iconMap[item.media]}
            </span>

            {/* Text */}
            <span className="text-sm md:text-base">
              {item.name}
            </span>
          </a>
        ))}
      </div>
     
        <ContactForm/>
      </div>

    </div>
  );
};

export default SocialMediaContact;