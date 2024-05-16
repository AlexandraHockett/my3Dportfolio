import { meta, shopify, sheCodes, freecodecamp } from "../assets/images";
import {
    sun,
    rain,
    dictionary,
    pinguin,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    summiz,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const certificates = [
    {
        name: "Responsive Web Design Certification",
        organization: "FreeCodeCamp",
        icon: freecodecamp,
        iconBg: "#0A0A23",
        imageUrl: "https://i.ibb.co/ckFSJ2N/Captura-de-ecr-2024-05-16-100856.png",
        date: "March 26, 2024",
        link: "https://www.freecodecamp.org/certification/AlexandraHockett/responsive-web-design",
    },
    {
        name: "Advanced React Development",
        organization: "SheCodes",
        icon: sheCodes,
        iconBg: "#F5F2FE",
        imageUrl: "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/049/007/original/49007.png?1713538731",
        date: "September 2, 2022",
        link:"https://www.shecodes.io/certificates/44fc432a69159fa02bae45245ef7af0d"
    },
    {
        name: "Responsive Web Development",
        organization: "SheCodes",
        icon: sheCodes,
        iconBg: "#F5F2FE",
        imageUrl: "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/042/017/original/42017.png?1713537710",
        date: "October 24, 2021",
        link:"https://www.shecodes.io/certificates/bcfcc457518b7725d6541e00a418d712"
    
    },
    {
        name: "Web Development",
        organization: "SheCodes",
        icon: sheCodes,
        iconBg: "#F5F2FE",
        imageUrl: "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/035/608/original/35608.png?1713554952",
        date: "August 17, 2021",
        link:"https://www.shecodes.io/certificates/f92923ede3cb550b423dbe1cac2f4f6d"
    },
    {
        name: "Introduction to Coding",
        organization: "SheCodes",
        icon: sheCodes,
        iconBg: "#F5F2FE",
        imageUrl: "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/034/246/original/34246.png?1713536544",
        date: "June 23, 2021",
        link:"https://www.shecodes.io/certificates/67bf8e29a72f0ed3fbbc8182892c91ba"
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pinguin,
        theme: 'btn-back-red',
        name: 'My cute penguin',
        description: 'Created a responsive webpage, complete with an intricately designed penguin image entirely crafted using HTML and CSS.',
        link: 'https://mycutepenguin.netlify.app',
    },
    {
        iconUrl: dictionary,
        theme: 'btn-back-green',
        name: 'Dictionary React APP',
        description: 'Developed a Dictionary App using React.',
        link: 'https://trusting-colden-46af2a.netlify.app/',
    },
    {
        iconUrl: sun,
        theme: 'btn-back-blue',
        name: 'Weather App',
        description: 'Developed a weather application using HTML, CSS, and JavaScript.',
        link: 'https://theweatherhockettapp.netlify.app/',
    },
    {
        iconUrl: rain,
        theme: 'btn-back-pink',
        name: 'Weather App (React)',
        description: 'Built a weather application utilizing React.',
        link: 'https://eloquent-payne-ad85ea.netlify.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];