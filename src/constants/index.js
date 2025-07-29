import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With about 2 years of hands-on experience, I have honed my skills in front-end technologies like React Js, as well as back-end technologies like Node.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With about 2 years of experience, I have worked with a variety of technologies, including React, Node.js, Python, and MongoDB. My journey in web development began with a deep curiosity for how things work on the world wide web, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy playing piano, swimming, and cooking.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Full Stack Developer",
    company: "Freelance",
    description: `My passion for building dynamic, responsive, and high-performance applications drives me to meet the needs of my clients adequately.`,
    technologies: [
      "React Js",
      "Javascript",
      "TypeScript",
      "Node Js",
      "Python",
      "Tailwind Css",
      "Framer Motion",
    ],
  },
  {
    year: "2024 - 2025",
    role: "Frontend Developer Intern",
    company: "Infotact Solutions",
    description: `My team built a functional and fully-responsive Job Board web app with some AI functionalities implemented in it. I was part of the frontend-team that developed reusable components and integrated RESTful APIs to allow for seamless data flow between frontend and backend`,
    technologies: ["Javascript", "React.js", "Node Js", "mongoDB"],
  },
  {
    year: "2024",
    role: "Web Developer Intern",
    company: "Zidio Development",
    description: `I assisted in developing and maintaining responsive websites. I was guided by senior developers to troubleshoot and debug code. I resolved UI/UX issues to improve website performance and accessibility.`,
    technologies: ["HTML", "CSS", "Javascript", "Node Js"],
  },
];

export const PROJECTS = [
  {
    title: "DuelFlix Movie Comparism Website",
    image: project1,
    description:
      "A fully functional website which compares movies based on factors like IMDB Rating, Awards and Nominations, IMDB Votes, Box Office, Metascore, and so on. ",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Riddersstraat 218, 3000 Leuven, Belgium ",
  phoneNo: "+32 4871 801 68 ",
  email: "orekoyadare12@gmail.com",
};
