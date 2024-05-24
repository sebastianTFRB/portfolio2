import React from 'react';
//importaciones de slider 1
import SpaceCity1 from "./../../assets/slider1/SpaceCity.jpg"
import SpaceCity2 from "./../../assets/slider1/SpaceCity.jpg"
import SpaceCity3 from "./../../assets/slider1/SpaceCity.jpg"
import SpaceCity4 from "./../../assets/slider1/SpaceCity.jpg"
import SpaceOrange1 from "./../../assets/slider1/planet1.png"
import SpaceOrange2 from "./../../assets/slider1/planet1.png"
import SpaceOrange3 from "./../../assets/slider1/planet1.png"
import SpaceOrange4 from "./../../assets/slider1/planet1.png"

//importaciones de navigation 
import { RxHome, RxPerson, RxDashboard, RxClipboard,RxArchive } from "react-icons/rx";
//importaciones screen projectos
import project1 from "./../../assets/images/project-1.jpg";
import project2 from "./../../assets/images/project-2.jpg";
import project3 from "./../../assets/images/project-3.jpg";
import project4 from "./../../assets/images/project-4.jpg";
import i18n from './../../i18n'
//importacioness screen experiencia / tecnologuias
import html from './../../assets/images/732212.png'; // Asegúrate de usar la extensión de archivo correcta
import django from './../../assets/images/django.png';
import javascript from './../../assets/images/Typescript.png';
import reactImage from './../../assets/images/React-icon.png';
import tailwind from './../../assets/images/tailwind.png';
import vite from './../../assets/images/Vitejs-logo.png';
import graphql from './../../assets/images/graphql_playground_macos_bigsur_icon_190105.png';
import github from './../../assets/images/Git-Icon-1788C.png'
import apache from './../../assets/images/Apache.png'
import azure from './../../assets/images/azure.png'

//import { useTranslation } from 'react-i18next';
 
//const { t } = useTranslation ();
const HERO_CONTENT = i18n.t('exp');
export { HERO_CONTENT }; 

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2023 - Present",//year: t('description')
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
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
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const TECHS = [
  {
    id: 1,
    src: html,
    title:"hol ami nombre es sebastion me gusta desde el momento en que lo use mi experiencia es orta pero representativa" ,
    style:"shadow-orange-500"

  },
  {
    id: 2,
    src: django,
    title: "hol ami nombre es sebastion me gusta desde el momento en que lo use mi experiencia es orta pero representativa" ,
    style: "shadow-blue-500"

  },
  {
    id: 3,
    src: javascript,
    title: "hol ami nombre es sebastion me gusta desde el momento en que lo use mi experiencia es orta pero representativat" ,
    style: "shadow-yellow-500"

  },
  {
    id: 4,
    src: reactImage,
    title: "React" ,
    style:"shadow-blue-600"

  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind" ,
    style:"shadow-sky-400"

  },
  {
    id: 6,
    src: vite,
    title:"Next JS" ,
    style:"shadow-white"

  },
  {
    id: 7,
    src: graphql,
    title:"GraphQL" ,
    style:"shadow-pink-400"

  },
  {
    id: 8,
    src: github,
    title: "GitHub" ,
    style: "shadow-red-400"

  }
]  
export const LENGUAGES = [
  {
    id: 1,
    src: apache,
    title:"hol ami nombre es sebastion me gusta desde el momento en que lo use mi experiencia es orta pero representativa" ,
    style:"shadow-orange-500"

  },
  {
    id: 2,
    src: django,
    title: "hol ami nombre es sebastion me gusta desde el momento en que lo use mi experiencia es orta pero representativa" ,
    style: "shadow-blue-500"

  },
  {
    id: 3,
    src: azure,
    title: "hol ami nombre es sebastion me gusta desde el momento en que lo use mi experiencia es orta pero representativat" ,
    style: "shadow-yellow-500"

  },
  {
    id: 4,
    src: reactImage,
    title: "React" ,
    style:"shadow-blue-600"

  },
  {
    id: 5,
    src: tailwind,
    title: "Tailwind" ,
    style:"shadow-sky-400"

  },
  {
    id: 6,
    src: vite,
    title:"Next JS" ,
    style:"shadow-white"

  },
  {
    id: 7,
    src: graphql,
    title:"GraphQL" ,
    style:"shadow-pink-400"

  },
  {
    id: 8,
    src: github,
    title: "GitHub" ,
    style: "shadow-red-400"

  }
]
export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/ about",
    icon: RxPerson,
    link: "/about",
  },
  {
    name: "/projectos",
    icon: RxDashboard,
    link: "/projectos",
  },

  {
    name: "/experiencia",
    icon: RxArchive,
    link: "/experiencia",

  }

];
export const PurpleImages = [
  {
    src: SpaceCity1,
  },
  {
    src: SpaceCity2,
  },
  {
    src: SpaceCity3,
  },
  {
    src: SpaceCity4,
  },
];

export const OrangeImages = [
  {
    src: SpaceOrange1,
  },
  {
    src: SpaceOrange2,
  },
  {
    src: SpaceOrange3,
  },
  {
    src: SpaceOrange4,
  },
];
