export interface Article {
    id: number;
    title: string;
    date: string;
    content: string;
    category: string;
}

export const categories = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node",
    "Express",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
] as const;

export const articles: Article[] = [
    {
        id: 1,
        title: "HTML",
        date: "2023-10-01",
        content: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
        category: "HTML",
    },
    {
        id: 2,
        title: "CSS",
        date: "2023-10-02",
        content: "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
        category: "CSS",
    }
]