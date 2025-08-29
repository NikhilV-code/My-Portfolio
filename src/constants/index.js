import project1 from "../assets/projects/project-1.jpg"
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React.js, Express.js, Next.js, Node.js and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025",
    role: "Frontend Developer",
    company: "Grass Solution Pvt. Ltd.",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "JavaScript", "Tailwind CSS"],
  },
  {
    year: "2024 - 2025",
    role: "Full Stack Developer",
    company: "Grass Solution Pvt. Ltd.",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "API"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
  title: "Portfolio Website",
  image: project3,
  description:
    "A responsive personal portfolio website built with React.js, featuring dynamic project sections, smooth navigation, and a contact form.",
  technologies: ["React.js", "JavaScript", "CSS", "Bootstrap"],
},
  {
  title: "Weather App",
  image: project4,
  description:
    "A real-time weather application that fetches data from the OpenWeather API and displays temperature, humidity, and weather conditions based on user input.",
  technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
}
];

export const CONTACT = {
  address: "Gopalpura Mod Jaipur",
  phoneNo: "9887004077",
  email: "nv425522@gmail.com",
};
