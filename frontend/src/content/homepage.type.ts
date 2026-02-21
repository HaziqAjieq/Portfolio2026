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
};
