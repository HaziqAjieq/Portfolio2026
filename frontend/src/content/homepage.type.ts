export interface ServiceList {
  id: number;
  title: string;
  description?: string;
}

export interface HomepageContent {
  hero: {
    title: string;
    subtitle: string;
    ctaButton: string;
  };
  services: ServiceList[];
  about: AboutContent;
}

export interface AboutContent {
  title: string;
  description: string;
  ctaButton: string;
  imageUrl: string;
}

// the text to import

export const homepageContent: HomepageContent = {
  hero: {
    title: "Learning, Building, Growing",
    subtitle:
      "I’m Haziq, exploring how to create websites step by step. Here you’ll find the projects I’m working on as I grow my skills.",
    ctaButton: "Contact",
  },
  services: [
    { id: 1, title: "Frontend Development" ,description: "Modern and responsive built with React" },
    { id: 2, title: "Interactive UI Systems" ,description: "Dynamic applicatiions with API intergration and structured state management"  },
    { id: 3, title: "Full-Stack Awareness",description: "Frontend solutions designed with backend logic and scalability in mind"  },
  ],
  about: {
    title: "About Me",
    description:
      "With over 5 years of experience in the food and beverage industry managing operations and leading teams, I developed strong communication, problem-solving, and time management skills that I now bring into my journey as a self-taught web developer. Driven by curiosity and passion for technology, I transitioned into tech and am currently building projects while learning HTML, CSS, JavaScript, React, Node.js, and MySQL, constantly pushing myself to grow and improve every day.",
    ctaButton: "Contact Me",
    imageUrl: "https://placehold.co/300", // Placeholder image URL
  },
};
