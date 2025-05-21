interface ProjectProps {
    title: string;
    description: string;
    img?: Array<string>;
    link?: string;
    github?: string;
    tags?: Array<string>;
}


const ProjectContainer = ({ title, description, img, link, github, tags }: ProjectProps) => {
    return (
        <div className="bg-primary-4/20 p-6 my-4 rounded-lg">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2">{description}</p>
            {img && img.map((image, index) => (
                <img key={index} src={image} alt={title} className="my-2" />
            ))}
            {link && <a href={link} className="text-accent-1 underline"><i className="bi bi-link"></i>View </a>}
            {github && <a href={github} className="text-accent-1 underline"><i className="bi bi-github"></i>Github</a>}
            {tags && tags.map((tag, index) => (
                <span key={index} className="bg-accent-1/20 p-1 rounded-full mr-2">{tag}</span>
            ))}
        </div>
    );
};

const ProjectPage = ({title, description, img, link, github,tags}: ProjectProps) =>{
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            {img && img.map((image, index) => (
                <img key={index} src={image} alt={title} className="my-2" />
            ))}
            <i className="bi bi-github" />
        </div>
    )
} 

export default function Projects() {
    return (
        <div className="max-w-[1000px] mx-auto my-10">
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="mt-4 text-lg">
                Here are some of the projects I have worked on:
            </p>
            <ProjectContainer
                title="Project 1"
                description="This is a description of project 1."
                img={["/path/to/image1.jpg", "/path/to/image2.jpg"]}
                link="https://example.com/project1"
                github="https://goithub.com/user/project1"
                tags={["tag1", "tag2"]}
            />
        </div>
    );
}

