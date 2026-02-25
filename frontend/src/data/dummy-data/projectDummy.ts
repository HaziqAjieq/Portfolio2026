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
    imageUrl: "/images/project1.jpg",
    liveUrl: "https://demo-shop.com",
    githubUrl: "https://github.com/username/project1",
    isFeature:false,
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "An app that generates unique images based on text prompts using OpenAI API.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS"],
    imageUrl: "/images/project2.jpg",
    githubUrl: "https://github.com/username/project2",
    isFeature: true,
  },
  {
    id: 3,
    title: "Task Manager App",
    description: "A drag-and-drop task management tool with real-time updates.",
    technologies: ["Vue", "Firebase", "TypeScript"],
    imageUrl: "/images/project3.jpg",
    liveUrl: "https://tasks.demo.com",
    githubUrl: "https://github.com/username/project3",
    isFeature: true
  }
];
