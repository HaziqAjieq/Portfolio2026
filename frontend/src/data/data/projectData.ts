import hcchurros from '../../assets/projectImage/hc-churros.png';
import blogImg from '../../assets/projectImage/blog/blog1.png';
import homestayImg from '../../assets/projectImage/impian-homestay.png';
import portfolioImg from '../../assets/projectImage/portfolioImg.png'

// Define the interface
export interface Project {
  id: number | string;
  title: string;
  description: string;
  tags: string[]; // Technologies used (e.g., ["React", "TypeScript", "Tailwind"])
  imageUrl: string;
  liveUrl?: string; // Optional: Live demo link
  sourceUrl?: string; // Optional: GitHub repository link
  featured?: boolean; // To highlight special projects
}

// Define and export the array of projects
export const projectsData: Project[] = [
  {
    id: 1,
    title: "HC-CHURROS",
    description:
      "A full-stack website built for a small churros business, focusing on managing multiple store locations with ease. The platform includes simple user authentication for stall owners to create new outlets and add promotional content through a customizable slideshow. It’s designed to help the business grow while staying user-friendly.",
    tags: ["JavaScript", "Tailwind", "React",],
    imageUrl: hcchurros,
    liveUrl: "https://hcchurros.com", // add if deployed
    sourceUrl: "https://github.com/HaziqAjieq/Hc-churros2025",
    featured: true,
  },
  {
    id: 2,
    title: "CMS Blog (Work in Progress)",
    description:
      "A blogging platform tailored for the gaming industry, featuring role-based authentication with Admin and Editor accounts. Admins can create and manage new users, while Editors focus on publishing content. The goal is to build a custom CMS for managing posts, tags, and categories — still in progress, but a step toward mastering real-world content systems.",
    tags: ["React", "Tailwind", "JavaScript", "Node.js", "Wordpress CMS"],
    imageUrl: blogImg,
    liveUrl: "",
    sourceUrl: "https://github.com/HaziqAjieq/blog-cms",
    featured: true,
  },
  {
  id: 3,
  title: "Personal Portfolio Website",
  description:
    "A modern single-page portfolio website built to showcase my projects, skills, and experience as a web developer. Designed with a clean and responsive UI, it highlights my work, includes smooth navigation, and serves as a central hub for potential clients and employers to learn more about me.",
  tags: ["React", "TypeScript", "Tailwind"],
  imageUrl: portfolioImg, // update if different
  liveUrl: "https://muhammadhaziq.netlify.app", // add your deployed link if available
  sourceUrl: "https://github.com/HaziqAjieq/Portfolio2026", // add GitHub repo if available
  featured: true,
},
{
  id:4,
  title:"Impian Homestay Website",
  description: "A modern Homestay Website for improving my skill as i learn, build a prototype where the owner can update their property, a client can make a booking and the info will connect to google calender with an API call.",
  tags: ["React" , "Tailwind" ,"Node.js" , "Wordpress CMS"],
  imageUrl: homestayImg,
  liveUrl:"",
  sourceUrl:"https://github.com/HaziqAjieq/impian-homestay",
  featured:true,
}
];