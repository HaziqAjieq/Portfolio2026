import project1 from "../../assets/projectImage/blog/blog1.png"
import project2 from "../../assets/projectImage/blog/blog2.png"
import project3 from "../../assets/projectImage/blog/blog3.png"
import project4 from "../../assets/projectImage/hc-churros.png"
import project5 from "../../assets/projectImage/impian-homestay.png"

// 1. Define the TypeScript Interface
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string; // Optional field
  githubUrl: string;
  isFeature?: boolean;
}

// 2. Sample Dummy Data
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with cart functionality and Stripe integration.",
    technologies: ["React", "TypeScript", "Node.js", "Stripe"],
    imageUrl: project1,
    liveUrl: "https://demo-shop.com",
    githubUrl: "https://github.com/username/project1",
    isFeature:false,
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "An app that generates unique images based on text prompts using OpenAI API.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS"],
    imageUrl: project4,
    githubUrl: "https://github.com/username/project2",
    isFeature: true,
  },
  {
    id: 3,
    title: "Task Manager App",
    description: "A drag-and-drop task management tool with real-time updates.",
    technologies: ["Vue", "Firebase", "TypeScript"],
    imageUrl: project5,
    liveUrl: "https://tasks.demo.com",
    githubUrl: "https://github.com/username/project3",
    isFeature: true
  },
   {
    id: 4,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with cart functionality and Stripe integration.",
    technologies: ["React", "TypeScript", "Node.js", "Stripe"],
    imageUrl: project3,
    liveUrl: "https://demo-shop.com",
    githubUrl: "https://github.com/username/project1",
    isFeature:false,
  },
  {
    id: 5,
    title: "AI Image Generator",
    description: "An app that generates unique images based on text prompts using OpenAI API.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS"],
    imageUrl: project2,
    githubUrl: "https://github.com/username/project2",
    isFeature: true,
  },

];
