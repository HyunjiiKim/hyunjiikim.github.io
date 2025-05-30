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

const ProjectContainer = ({ id, name, summary, coverImg }: IProjectData) => {

    // summary should be under 200 characters
    if (typeof summary === "string" && summary.length > 200) {
        summary = summary.slice(0, 200) + '...';
    }

    return (
        <Link to={`/projects/${id}`} className="block bg-primary-4 p-4 my-2 rounded-lg hover:bg-primary-4/30 transition text-ellipsis wrap-anywhere hover:scale-105 shadow-lg">
            <div className="flex ">
                <div id="imgContainer" className="w-[150px] h-[150px] aspect-square flex items-center justify-center mr-4">
                    <img src={coverImg} alt={name} />
                </div>
                <div id="TextImage" className="text-balance">
                    <h2 className="text-2xl font-bold max-sm:text-lg ">{name}</h2>
                    <p className="text-xs">{summary}</p>
                </div>
            </div>

        </Link>
    );
};

const ProjectPage = ({ name, summary, role, description, img, usedSkills, link, github, startDate, endDate }: IProjectData) => {
    return (
        <div className="max-w-[1000px] mx-auto p-10 flex flex-col gap-4">
            <h1 className="font-bold text-center text-4xl">{name}</h1>
            <div>
                {role && (
                    <div className="flex">
                        <h3 className="text-xl font-bold">Role</h3>
                        {role.map((r, index) => (
                            <div key={index} className="px-2 py-1 rounded-full bg-accent-1 text-sm text-white w-fit capitalize ml-2">
                                {r}
                            </div>
                        ))}
                    </div>
                )
                }
            </div>
            {endDate && (
                <p className="text-sm text-gray-500">
                    <i className="bi bi-calendar3" />&nbsp;{startDate} - {endDate}
                </p>
            )}
            <div id="link-group" className="flex gap-4">
                {link && (
                    <div>
                        <Link to={link} className="hover:text-primary-2">
                            <i className="bi bi-link-45deg" />&nbsp;View
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
            <div className="text-sm">
                {summary}
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