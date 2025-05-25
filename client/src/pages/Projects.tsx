import { useParams, Link } from "react-router";
import type { IProjectData } from "../data/projects";
import { ProjectData } from "../data/projects";

export function ProjectList() {
    return (
        <div className="max-w-[1000px] mx-auto p-10">
            <h1 className="text-3xl font-bold mb-6 text-center">All Projects</h1>

            {ProjectData.map(p => (
                <ProjectContainer key={p.id} {...p} />
            ))}
        </div>
    );
}

export function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const project = ProjectData.find(p => p.id === id);

    if (!project) return <p className="text-center">Project not found.</p>;

    return <ProjectPage {...project} />;
}

const ProjectContainer = ({ name, summary, coverImg }: IProjectData) => {
    return (
        <div className="bg-primary-4/20 p-6 my-4 rounded-lg">
            <div className="flex">
                <div id="imgContainer">
                    <img src={coverImg} alt={name} />
                </div>
                <div id="TextImage">
                    <p>{summary}</p>
                </div>
            </div>

        </div>
    );
};

const ProjectPage = ({ name, summary, role, description, img, usedSkills, link, github, startDate, endDate }: IProjectData) => {
    return (
        <div className="max-w-[1000px] mx-auto p-10">
            <h1 className="font-bold text-center text-4xl">{name}</h1>
            <div className="text-sm">
                {summary}
            </div>
            <div>
                <p>Role : {role}</p>
                {endDate && (
                    <p>{startDate} - {endDate}</p>
                )}
            </div>
            <div id="link-group" className="flex gap-4">
                {link && (
                    <div>
                        <Link to={link} className="hover:text-primary-2">
                            <i className="bi bi-link" />&nbsp;View
                        </Link>
                    </div>
                )}
                {github && (
                    <div>
                         <Link to={github} className="hover:text-primary-2">
                            <i className="bi bi-github" />&nbsp;Github
                        </Link>
                    </div>
                )}
            </div>
            <p>{description}</p>
            <div>
                <h3 className="text-xl font-bold">Skills</h3>
                <div className="flex gap-2 flex-wrap">
                    {usedSkills.map((it) => (
                        <div className="p-2 rounded-full bg-primary-3 text-white w-fit capitalize">{it}</div>
                    ))}
                </div>

            </div>
            {img && img.map((image, index) => (
                <img key={index} src={image} alt={name} className="my-2" />
            ))}
        </div>
    )
}
