import Fyp_image1 from "../static/fyp1.png";
import Fyp_image2 from "../static/fyp2.png";
import Fyp_poster from "../static/fyp-poster.png";
import project_img1 from "../static/project.png";
import lrt_image1 from "../static/lrt.png";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  images?: string[];
  youtubeId?: string;
}

export const projects: Project[] = [
  {
    title: "Cloud-based Near-line Video Q&A E-learning Platform",
    description:
      "Final Year Project at HKBU - An innovative cloud platform enabling students to upload screen capture videos or images of questions for lab work and debugging. Integrates Azure OpenAI for intelligent responses, Speech-to-Text for accessibility, and MongoDB for scalable data management. Developed a real-time communication system connecting students, TAs, and instructors.",
    tags: [
      "Svelte",
      "Node.js",
      "MongoDB",
      "Azure OpenAI",
      "TypeScript",
      "Speech to Text",
      "Express.js",
      "Cosmos DB",
      "Final Year Project",
    ],
    images: [Fyp_image1, Fyp_image2, Fyp_poster],
    youtubeId: "dr1VgE6dQRo",
  },
  {
    title: "Student Portfolio Website",
    description:
      "Developed a responsive student portfolio website using Svelte framework with Node.js backend.",
    tags: ["Svelte", "Node.js", "TypeScript", "HTML & CSS"],
    images: [project_img1],
    github: "https://github.com/Matthew159951/web",
  },
  {
    title: "LRT Next Train - Hong Kong Light Rail Tracker",
    description:
      "Real-time Light Rail arrival tracker for Hong Kong's Tuen Mun and Yuen Long network. Features bilingual station search, live 20-second updates, and detailed train information including platform assignments, coupled train indicators, and arrival countdowns. Built with React and integrated with MTR's official open data API.",
    tags: [
      "React",
      "TypeScript",
      "Axios",
      "Real-time Updates",
      "Hong Kong Transport",
      "Vite",
      "Public API Integration",
    ],
    github: "https://github.com/Matthew159951/lrt-next-train-web",
    demo: "https://lrt-next-train-web.23214759.workers.dev/",
    images: [lrt_image1],
  },
];

export const projectCount = projects.length;
