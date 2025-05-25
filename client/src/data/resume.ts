import SorbonneLogo from "../assets/sorbonne.png";
import GELogo from "../assets/gustaveEiffel.png";

interface IEducationData {
    school: string;
    schoolLogo?: string;
    diploma: string;
    content: string[];
    startDate: string;
    endDate: string;
}

export const EducationData: IEducationData[] = [
    {
        school: "Sorbonne Université",
        schoolLogo: SorbonneLogo,
        diploma: "BA Sociology",
        content: [
            "Qualitative Methodology",
            "Quantitative Methodology",
            "Statistics",
            "R"
        ],
        startDate: "01/09/2019",
        endDate: "31/08/2023"
    },
    {
        school: "Université Gustave Eiffel",
        schoolLogo: GELogo,
        diploma: "MA Web and Humanities",
        content: [
            "Agile Method",
            "UX/UI Design",
            "HTML/CSS",
            "JavaScript",
            "PHP",
            "MySQL",
        ],
        startDate: "01/09/2023",
        endDate: "31/08/2025"
    }
]