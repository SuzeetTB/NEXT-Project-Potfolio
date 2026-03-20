import { AiFillHtml5 } from "react-icons/ai";
import {
  FaAndroid,
  FaCode,
  FaNodeJs,
  FaReact,
  FaUnity,
  FaHotel,
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaPython,
  FaCloud,
  FaLayerGroup,
  FaDatabase,
} from "react-icons/fa6";
import { RiComputerLine, RiDatabase2Line, RiSimCard2Line } from "react-icons/ri";
import {
  SiCplusplus,
  SiDjango,
  SiEclipseide,
  SiFigma,
  SiFirebase,
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRubyonrails,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";
import { IAcademics, IExperience, IProject, ISkill, ISkillGroup } from "./data-type";

export const experiences: Array<IExperience> = [
    {
      id: 1,
      title: "MeroParty",
      role: "Front-End Engineer",
      location: "Bhaktapur, Nepal",
      date: "August 2024 - Present",
      description:
        "Built a <em>Venue Management Tool</em> using <b>Node.js</b> and <b>React</b>. Developed web and app interfaces for venue-side management and mentored junior developers.",
      image: "https://meroparty.com/assets/mero-party-logo-y-470e799b.avif",
      category: "Development",
      Icon: FaHotel,
    },
    {
      id: 2,
      title: "ICC Communications",
      role: "Sales/Marketing",
      location: "Ueno, Japan",
      date: "December 2023 - August 2024",
      description:
        "Leveraged multilingual skills (<b>English, Nepali, Japanese</b>) to engage diverse customers. Increased <em>SIM card</em> and mobile phone sales through effective support.",
      image: "https://picsum.photos/200/300", // Replace with ICC logo if available
      category: "Sales & Support",
      Icon: RiSimCard2Line,
    },
    {
      id: 3,
      title: "Axios Softworks",
      role: "Full Stack Developer",
      location: "Banepa, Nepal",
      date: "April 2021 - April 2022",
      description:
        "Developed web applications using <b>Node.js</b>, <b>React</b>, and <b>Ruby on Rails</b> for projects like <em>NIVID School Management</em>. Contributed to an Android app using <b>Kotlin</b>.",
      image: "https://picsum.photos/200/301",
      category: "Development",
      Icon: RiComputerLine,
    },
    {
      id: 4,
      title: "Cloud Factory",
      role: "Data Entry/Image Training",
      location: "Bhaisepati, Nepal",
      date: "September 2019 - May 2022",
      description:
        "Collected and annotated image data using proprietary tools for <b>AI model training</b> and data processing.",
      image: "https://picsum.photos/200/302",
      category: "Data Science",
      Icon: RiDatabase2Line,
    },
  ];

export const languages: Array<ISkill> = [
  {
    id: 1,
    title: "HTML & CSS",
    Icon: AiFillHtml5,
    level: "90%",
    category: "Front-End",
  },
  {
    id: 3,
    title: "JavaScript",
    Icon: SiJavascript,
    level: "70%",
    category: "Front-End",
  },
  {
    id: 4,
    title: "React",
    Icon: FaReact,
    level: "60%",
    category: "Front-End",
  },
  {
    id: 5,
    title: "Node",
    Icon: FaNodeJs,
    level: "70%",
    category: "Back-End",
  },
  {
    id: 6,
    title: "Ruby on Rails",
    Icon: SiRubyonrails,
    level: "40%",
    category: "Back-End",
  },
  {
    id: 7,
    title: "Kotlin",
    Icon: SiKotlin,
    level: "75%",
    category: "App-End",
  },
];

export const tools: Array<ISkill> = [
  {
    id: 1,
    title: "VS Code",
    Icon: FaCode,
    level: "90%",
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "Android Studio",
    Icon: FaAndroid,
    level: "80%",
    category: "Full-Stack",
  },
  {
    id: 3,
    title: "Unity",
    Icon: FaUnity,
    level: "70%",
    category: "Full-Stack",
  },
  {
    id: 4,
    title: "Eclipse",
    Icon: SiEclipseide,
    level: "60%",
    category: "Full-Stack",
  },
];

export const academics: Array<IAcademics> = [
  {
    id: 1,
    organization: "Shintoshin Japanese Language Institute",
    image: "https://picsum.photos/200/300",
    degree: "Japanese Language",
    year: "2023",
    address: "Saitama, Japan",
  },
  {
    id: 2,
    organization: "Glocal University",
    image: "https://picsum.photos/200/300",
    degree: "B. Tech Computer Science and Engineering",
    year: "2019",
    address: "Dhapakhel, Lalitpur",
  },
  {
    id: 3,
    organization: "Kanjirowa National Higher Secondary School",
    image: "https://picsum.photos/200/300",
    degree: "HSEB(+2)",
    year: "2014",
    address: "Koteshwor, Kathmandu",
  },
  {
    id: 4,
    organization: "Himalayan English Secondary School",
    image: "https://picsum.photos/200/300",
    degree: "SLC",
    year: "2012",
    address: "Dekocha, Bhaktapur",
  },
];

export const projects: Array<IProject> = [
  {
    id: 1,
    name: "Z Blog",
    description:
      "A blogging type simple CMS web project, Build with Node Js at backend and handbrake template engine, pagination.",
    image: "https://picsum.photos/200/300",
    category: ["node", "mongodb"],
    url_deployed: "https://warm-journey-16132.herokuapp.com/",
    url_github: "https://www.google.com",
    key_features: [
      "Node JS",
      "Node",
      "MongoDB",
      "Bootstrap",
      "Jquery",
      "fontAwesome",
    ],
  },
  {
    id: 2,
    name: "Zeitsu E-trade",
    description:
      "An e-commerce web project for product sale, Build with Laravel at backend and Blade template engine, Cart system, toastr notification, Product pagination, Session  and cart checkout using Stripe.",
    image: "https://picsum.photos/200/300",
    category: ["laravel", "php"],
    url_deployed: "https://zeitsuetrade.000webhostapp.com",
    url_github: "https://www.google.com",
    key_features: [
      "PHP",
      "MySQL Database",
      "Bootstrap",
      "Jquery",
      "fontAwesome",
    ],
  },
  {
    id: 3,
    name: "Gesture Based Cursor Control",
    description:
      "A python based application which uses a web camera to capture image of hand and control the mouse events such as click, scroll, based on the gestures performed using the hand.",
    image: "/assets/images/projects/gbmc.png",
    category: ["python"],
    url_deployed: "https://www.google.com",
    url_github: "https://www.google.com",
    key_features: ["Anaconda", "Python", "Numpy", "pyautogui", "OpenCV"],
  },
  {
    id: 4,
    name: "Virtual KEC",
    description:
      "A 3D model-based application to provide user an experience of viewing academic buildings, laboratory buildings of KEC College in virtually designed 3D space with the aim of familiarizing the college compound to new prospects.",
    image: "https://picsum.photos/200/300",
    category: ["javascript", "c#"],
    url_deployed: "https://www.google.com",
    url_github: "https://www.google.com",
    key_features: [
      "Unity",
      "Autodesk 3DS Max",
      "Blender for Modeling",
      "Adobe Photoshop-textures",
    ],
  },
  {
    id: 5,
    name: "Runner Runner",
    description:
      "A simple graphics-based gaming application with 2D drawings, art and animations implementing a continuous loop of animation, plot positions-based collider functions, score points based on duration of survival and double buffering for smooth operation.",
    image: "https://picsum.photos/200/300",
    category: ["c++"],
    url_deployed: "https://www.google.com",
    url_github: "https://www.google.com",
    key_features: ["CodeBlocks", "C++", "graphics.h"],
  },
  {
    id: 6,
    name: "Company Database",
    description:
      "Employee Management System project built to manage employee details and records of an organization or company. It uses CRUD operations with authentication and authorization.",
    image: "https://picsum.photos/200/300",
    category: ["c++"],
    url_deployed: "https://www.google.com",
    url_github: "https://www.google.com",
    key_features: ["Dev C++", "C++"],
  },
  {
    id: 7,
    name: "Plustwonotes.com",
    description:
      "Plustwonotes is an educational website to share and post educational material of grade 11 and 12. I worked as a web designer, Content Creator and manager. The site hosted for 3 years.",
    image: "/assets/images/projects/plus2notes.png",
    category: ["c++"],
    url_deployed: "https://www.google.com",
    url_github: "https://www.google.com",
    key_features: ["CodeBlocks", "C++", "graphics.h"],
  },
  {
    id: 8,
    name: "Meroparty.com",
    description:
      "Meroparty is an event/venue management and e-commerce website to view and compare event venues and also manage the venues like bookings, halls, invoices. I worked as a web designer, full-stack developer. The site hosted from 2024.",
    image: "/assets/images/projects/meroparty.png",
    category: ["c++"],
    url_deployed: "https://www.google.com",
    url_github: "https://www.google.com",
    key_features: ["CodeBlocks", "C++", "graphics.h"],
  },
];

export const skillGroups: ISkillGroup[] = [
  {
    category: "Programming & Scripting Languages",
    Icon: FaCode,
    skills: [
      {
        id: 1,
        title: "C",
        category: "Programming",
        Icon: SiCplusplus,
        level: "80%",
      },
      {
        id: 2,
        title: "C++",
        category: "Programming",
        Icon: SiCplusplus,
        level: "75%",
      },
      {
        id: 3,
        title: "Java",
        category: "Programming",
        Icon: FaJava,
        level: "85%",
      },
      {
        id: 4,
        title: "JavaScript",
        category: "Programming",
        Icon: SiJavascript,
        level: "90%",
      },
      {
        id: 5,
        title: "Python",
        category: "Programming",
        Icon: FaPython,
        level: "80%",
      },
      {
        id: 6,
        title: "SQL",
        category: "Programming",
        Icon: SiPostgresql,
        level: "85%",
      },
    ],
  },
  {
    category: "Full-Stack Development",
    Icon: FaLayerGroup,
    skills: [
      {
        id: 7,
        title: "HTML5",
        category: "Full-Stack",
        Icon: FaHtml5,
        level: "95%",
      },
      {
        id: 8,
        title: "CSS3",
        category: "Full-Stack",
        Icon: FaCss3Alt,
        level: "90%",
      },
      {
        id: 9,
        title: "React",
        category: "Full-Stack",
        Icon: FaReact,
        level: "88%",
      },
      {
        id: 10,
        title: "Next.js",
        category: "Full-Stack",
        Icon: SiNextdotjs,
        level: "85%",
      },
      {
        id: 11,
        title: "Tailwind",
        category: "Full-Stack",
        Icon: SiTailwindcss,
        level: "90%",
      },
      {
        id: 12,
        title: "Node.js",
        category: "Full-Stack",
        Icon: FaNodeJs,
        level: "82%",
      },
      {
        id: 13,
        title: "Django",
        category: "Full-Stack",
        Icon: SiDjango,
        level: "70%",
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    Icon: FaCloud,
    skills: [
      { id: 14, title: "AWS", category: "Cloud", Icon: FaAws, level: "65%" },
      {
        id: 15,
        title: "Firebase",
        category: "Cloud",
        Icon: SiFirebase,
        level: "80%",
      },
      {
        id: 16,
        title: "Docker",
        category: "Cloud",
        Icon: FaDocker,
        level: "75%",
      },
      {
        id: 17,
        title: "CI/CD Pipelines",
        category: "Cloud",
        Icon: FaGitAlt,
        level: "70%",
      },
    ],
  },
  {
    category: "Data & Databases",
    Icon: FaDatabase,
    skills: [
      {
        id: 18,
        title: "MySQL",
        category: "Databases",
        Icon: SiPostgresql,
        level: "85%",
      },
      {
        id: 19,
        title: "PostgreSQL",
        category: "Databases",
        Icon: SiPostgresql,
        level: "80%",
      },
      {
        id: 20,
        title: "MongoDB",
        category: "Databases",
        Icon: SiMongodb,
        level: "78%",
      },
    ],
  },
  {
    category: "UI/UX & Design",
    Icon: FaDatabase,
    skills: [
      {
        id: 21,
        title: "Figma",
        category: "Design",
        Icon: SiFigma,
        level: "85%",
      },
      {
        id: 22,
        title: "Adobe Photoshop",
        category: "Design",
        Icon: SiFigma,
        level: "70%",
      },
      {
        id: 23,
        title: "Adobe Illustrator",
        category: "Design",
        Icon: SiFigma,
        level: "70%",
      },
      {
        id: 24,
        title: "Canva",
        category: "Design",
        Icon: SiFigma,
        level: "70%",
      },
    ],
  },
  {
    category: "Data Science & ML ",
    Icon: FaDatabase,
    skills: [
      {
        id: 25,
        title: "TensorFlow",
        category: "Machine Learning",
        Icon: SiTensorflow,
        level: "60%",
      },
      {
        id: 26,
        title: "Pandas",
        category: "Machine Learning",
        Icon: FaPython,
        level: "75%",
      },
    ],
  },
];
