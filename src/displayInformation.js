import {
  faHome,
  faUser,
  faFileAlt,
  faBriefcase,
  faImage,
  faEnvelope,
  faCode,
  faServer,
  faPhone,
  faMapMarkerAlt,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import PORTFOLIO_ONE from "./assets/images/portfolio1.jpg";
import PORTFOLIO_TWO from "./assets/images/portfolio2.jpg";
import PORTFOLIO_THREE from "./assets/images/portfolio3.jpg";

export const navItemTable = [
  { href: "home", text: "Home", icon: faHome },
  { href: "about", text: "About", icon: faUser },
  { href: "skills", text: "Skills", icon: faFileAlt },
  { href: "services", text: "Services", icon: faBriefcase },
  { href: "portfolio", text: "Portfolio", icon: faImage },
  { href: "contact", text: "Contactme", icon: faEnvelope },
];

export const skillsTable = [
  {
    title: "Frontend developer",
    subtitle: "More than 4 years",
    icon: faCode,
    skillsList: [
      { name: "HTML", number: "90%" },
      { name: "CSS", number: "80%" },
      { name: "JavaScript", number: "60%" },
      { name: "React", number: "85%" },
    ],
  },
  {
    title: "Backend developer",
    subtitle: "More than 2 years",
    icon: faServer,
    skillsList: [
      { name: "PHP", number: "80%" },
      { name: "Node Js", number: "70%" },
      { name: "Firebase", number: "90%" },
      { name: "Python", number: "55%" },
    ],
  },
];

export const qualificationsTable = [
  {
    type: "Education",
    icon: faGraduationCap,
    details: [
      {
        title: "Computer Enginner",
        subtitle: "Peru - University",
        calendar: "2009-2014",
      },
      {
        title: "Web Design",
        subtitle: "Spain - Institute",
        calendar: "2014 -2017",
      },
      {
        title: "Web Development",
        subtitle: "Peru - Institute",
        calendar: "2017 - 2019",
      },
    ],
  },
  {
    type: "Work",
    icon: faBriefcase,
    details: [
      {
        title: "Computer Enginner",
        subtitle: "Peru - University",
        calendar: "2009-2014",
      },
      {
        title: "Web Design",
        subtitle: "Spain - Institute",
        calendar: "2014 -2017",
      },
    ],
  },
];

export const portfolioContentTable = [
  {
    img: PORTFOLIO_ONE,
    title: "Modern Website",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Dolore blanditiis nostrum modion ut quaerat?`,
  },
  {
    img: PORTFOLIO_TWO,
    title: "Brand Design",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Dolore blanditiis nostrum modion ut quaerat?`,
  },
  {
    img: PORTFOLIO_THREE,
    title: "Online Store",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Dolore blanditiis nostrum modion ut quaerat?`,
  },
];

export const contactInformationTable = [
  { icon: faPhone, title: "Call Me", subtitle: "999-777-666" },
  { icon: faEnvelope, title: "Email", subtitle: "999@gmail.com" },
  { icon: faMapMarkerAlt, title: "Location", subtitle: "China" },
];
