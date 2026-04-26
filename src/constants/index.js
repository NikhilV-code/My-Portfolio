import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Full Stack MERN Developer with 1+ year of hands-on experience building scalable web applications, REST APIs, and multi-vendor e-commerce platforms. Proficient in React.js, Next.js, Node.js, TypeScript, MongoDB, and MySQL. My goal is to leverage my expertise in performance optimization, modular UI development, and AI-assisted workflows to deliver exceptional user experiences and drive business growth.`;

export const ABOUT_TEXT = `I am a dedicated Full Stack Web Developer with hands-on experience building production-grade web applications. I have worked with a wide range of technologies including React.js, Next.js, Node.js, Express.js, TypeScript, MongoDB, and MySQL. My journey began with a deep curiosity for how things work on the web, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I have built multi-vendor e-commerce platforms, integrated third-party services like payment gateways and shipping APIs, and leveraged AI-assisted workflows to ship faster and cleaner code. Outside of coding, I enjoy solving DSA problems, exploring system design concepts, and staying up to date with advancements in AI-powered development.`;

export const EXPERIENCES = [
  {
    year: "03/2025 - Present",
    role: "Full Stack Web Developer",
    company: "Techfrigate, Jodhpur",
    description:
      "Built and maintained Falcon Furnish, a multi-vendor e-commerce platform with 3 Next.js apps serving 100+ products and 10+ vendors. Improved development efficiency by 40% using AI-assisted workflows (Claude, Copilot). Designed modular, reusable UI components with React.js and Tailwind CSS. Optimized performance reducing page load time by ~20% through code splitting, lazy loading, and API optimization. Developed and integrated RESTful APIs ensuring seamless frontend-backend communication.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "MySQL",
      "Tailwind CSS",
      "REST APIs",
      "Git",
    ],
  },
  {
    year: "06/2024 - 02/2025",
    role: "Full Stack Web Development Trainee",
    company: "Grras Solution Pvt. Ltd., Jaipur",
    description:
      "Completed an intensive full stack web development program covering frontend and backend technologies. Built projects using the MERN stack, worked with RESTful APIs, and developed responsive UI components.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Falcon Furnish - Multi-Vendor E-Commerce Platform",
    image: project1,
    description:
      "A production-grade multi-vendor e-commerce platform with 3 Next.js apps (customer, vendor, admin), featuring order management, Razorpay payments, Shiprocket shipping integration, and Socket.IO real-time notifications.",
    technologies: ["Next.js", "Node.js", "MySQL", "TypeScript", "Tailwind CSS", "REST APIs"],
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
  },
];

export const CONTACT = {
  address: "Churu, Rajasthan",
  phoneNo: "+91 9887004077",
  email: "nv425522@gmail.com",
};