export interface IProjectData {
    id: string;
    name: string;
    summary?: string;
    description: string;
    coverImg ?: string;
    img: string[];
    link?: string;
    github?: string;
    usedSkills: string[];
    role?: string;
    startDate?: string;
    endDate?: string;
}


export const ProjectData: IProjectData[] = [
    {
        id: "localsteps",
        name: "LocalSteps",
        role: "Full Stack Developer",
        usedSkills: ["Node.js", "ExpressJS", "JavaScript", "React", "MongoDB"],
        coverImg: "",
        img: [
            "",
            "",
            ""
        ],
        description: "",
        link: "https://localstepsv2.onrender.com",
        github: "https://github.com/HyunjiiKim/LocalSteps.git",
        startDate: "November 2024",
        endDate: "April 2025"
    },
    {
        id: "nebneb",
        name: "NebNeb Collectif",
        role: "Full Stack Developer",
        usedSkills: ["TypeScript", "PostgreSQL", "ExpessJS", "NodeJS", "React", "TailwindCSS", "Docker", "UX/UI Design"],
        coverImg: "",
        img: [
            "",
            "",
            ""
        ],
        description: "",
        link: ""
    },
    {
        id: "fitaura",
        name: "FitAura",
        role: "Frontend Developer",
        usedSkills: ["figma", "UI Design"],
        coverImg: "",
        img: [
            "",
            "",
            ""
        ],
        description: "",
        link: "https://fitaura.onrender.com",
        github: "https://github.com/HyunjiiKim/FitAura.git"
    },
    {
        id: "geoje",
        name: "Camp de Geoje: Captive Memory",
        role: "Project Manager & Lead Frontend",
        usedSkills: ["figma", "UI Design"],
        coverImg: "",
        img: [
            "",
            "",
            ""
        ],
        description: "",
        link: ""
    },
    {
        id: "blog",
        name: "Console.blog(\"Hyunji.Kim\")",
        role: "Full Stack Developer",
        usedSkills: ["TypeScirpt", "PostgreSQL", "React", "NestJS", "TailWindCSS", "UI Design"],
        coverImg: "",
        img: [
            "",
            "",
            ""
        ],
        description: "",
        link: "",
        github: "",
        startDate: "20/05/2025",
        endDate: new Date().toLocaleDateString()
    }
]