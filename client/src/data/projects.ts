import favicon from "../assets/favicon.png";

export interface IProjectData {
    id: string;
    name: string;
    summary?: string;
    description: string;
    coverImg?: string;
    img: string[];
    link?: string;
    github?: string;
    usedSkills: string[];
    role?: string[];
    startDate?: string;
    endDate?: string;
}


export const ProjectData: IProjectData[] = [
    {
        id: "localsteps",
        name: "LocalSteps",
        summary: "Local Steps is a mobile-first web application that connects tourists with locals and their authentic recommendations. Developed between November 2024 and April 2025 as part of the Master Cultures et Métiers du Web, the project was my first full-stack experience, where I was responsible for both the frontend and backend development. On the server side, I used Express.js with MongoDB to handle data and API logic, while the client side was built using React and JavaScript with a strong focus on responsive design. Throughout the project, I deepened my understanding of team collaboration and learned how to work effectively with agile methodologies, improving my ability to communicate within a development team and adapt to iterative workflows.",
        role: ["Full Stack Developer"],
        usedSkills: ["Node.js", "ExpressJS", "JavaScript", "React", "MongoDB"],
        coverImg: "https://localstepsv2.onrender.com/assets/logo_icon_green-DrQ0bxr-.png",
        img: [

        ],
        description: "",
        link: "https://localstepsv2.onrender.com",
        github: "https://github.com/HyunjiiKim/LocalSteps.git",
        startDate: "November 2024",
        endDate: "April 2025"
    },
    {
        id: "nebneb",
        name: "Collectif NebNeb",
        summary: "Collectif NebNeb is a French-Korean cartoonist collective based in Angoulême. During my internship as a full-stack developer, I was responsible for both the design and development of their website. Working independently, I handled the entire project—from designing the user interface to developing the frontend and backend. The site serves as a platform where artists from the collective can showcase their work, and it includes a custom-built back office that allows them to manage content autonomously. Although the project is still in progress, it has been a valuable experience. It taught me how to enhance user experience through thoughtful design and helped me understand how designers should approach users’ needs with empathy and clarity.",
        role: ["Full Stack Developer"],
        usedSkills: ["TypeScript", "PostgreSQL", "ExpessJS", "NodeJS", "React", "TailwindCSS", "Docker", "UX/UI Design"],
        coverImg: "https://collectifnebneb.onrender.com/assets/afterTransition-ClWXLP9B.png",
        img: [
     
        ],
        description: "",
        link: "https://collectifnebneb.onrender.com"
    },
    {
        id: "fitaura",
        name: "FitAura",
        summary: "FitAura is a lightweight web application that offers users AI-powered nutrition and workout coaching. Developed over the course of one week as part of an agile sprint exercise in the Master Cultures et Métiers du Web, the project aimed to demonstrate our understanding of collaborative, iterative development. I worked as a frontend developer, using React, JavaScript, and TailwindCSS to build a clean and responsive interface. Through this project, I learned how to integrate AI APIs and effectively filter and display dynamic data based on user input, enhancing my understanding of both user experience and real-time data handling.",
        role: ["Frontend Developer"],
        usedSkills: ["JavaScript", "React", "TailwindCSS", "AI Integration"],
        coverImg: "data:image/png;base64,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",
        img: [
        ],
        description: "",
        link: "https://fitaura.onrender.com",
        github: "https://github.com/HyunjiiKim/FitAura.git"
    },
    {
        id: "geoje",
        name: "Camp de Geoje: Captive Memory",
        summary: "This project is an interactive documentary that explores the history of the Geoje POW Camp in South Korea. Initiated in January 2025, it is a collaborative effort between French web students and cinema students from Dong-Eui University in Korea. I took on the role of Project Manager and Lead Frontend Developer, coordinating a bilingual team of 11 members. This experience taught me how to manage cross-cultural communication, provide constructive feedback, and ensure smooth collaboration within a large team. Technically, we are using Phaser.js to create interactive, graphic-based storytelling elements. The project is currently in progress and is scheduled for completion in mid-June 2025.",
        role: ["Project Manager","Frontend Developer"],
        usedSkills: ["JavaScript", "React", " Phaser.js", "TailwindCSS", "Project Management", "Team Collaboration"],
        coverImg: "https://pow-uge-deu-2025.onrender.com/assets/img/favicon.ico",
        img: [

        ],
        description: "",
        link: "https://pow-uge-deu-2025.onrender.com",
        github: "https://github.com/HyunjiiKim/cmw_documentaire_interactif.git"
    },
    {
        id: "blog",
        name: "Console.blog(\"Hyunji.Kim\")",
        summary: `This is my most recent project—an ongoing effort to migrate my tech blog to the very website where you're reading this text. The application is built with TypeScript, React, and Tailwind CSS on the client side, and NestJS with PostgreSQL on the server side. I plan to deploy the full stack on AWS using Docker. As I’m currently focused on backend development, the blog content is temporarily stored and rendered on the client side. Over time, the project will evolve into a fully dynamic blog platform. I plan to regularly share development updates, including the challenges I encounter and how I solve technical problems, offering a transparent look into the process behind building this site.`,
        role: ["Full Stack Developer"],
        usedSkills: ["TypeScirpt", "PostgreSQL", "React", "NestJS", "TailWindCSS", "UI Design"],
        coverImg: favicon,
        img: [
        ],
        description: "",
        link: "https://hyunjikim.onrender.com",
        github: "https://github.com/HyunjiiKim/hyunjiikim.github.io",
        startDate: "20/05/2025",
        endDate: new Date().toLocaleDateString()
    }
]