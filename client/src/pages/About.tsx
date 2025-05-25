import { Link } from "react-router";

import { EducationData } from "../data/resume";
import { ProjectData } from "../data/projects";

import ProfilePhoto from "../../public/favicon.png";

export default function About() {
  const Info = [
    {
      id: "email",
      name: "hjkim96727@gmail.com",
      icon: "bi bi-envelope-fill"
    },
    {
      id: "phone",
      name: "+33 6 52 96 98 75",
      icon: "bi bi-telephone-fill"
    },
    {
      id: "adress",
      name: "Paris, France",
      icon: "bi bi-geo-alt-fill"
    },
    {
      id: "github",
      name: "https://github.com/HyunjiiKim",
      icon: "bi bi-github"
    }
  ];

  const Skills = {
    hardSkill: [
      "HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React",
      "Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL", "MySQL",
      "PHP", "R", "Docker", "Git", "GitHub", "Figma",
    ],
    softSkill: [
      "Agile", "Lean Startup", "Lean Thinking", "Pair Programming",
      "Scrum", "Kanban", "UX Design", "UI Design", "Web Design",
    ]
  }

  return (
    <div id="about" className="max-w-[1000px] my-10 mx-auto">
      <div id="section1" className="flex justify-between items-center w-[640px] mx-auto gap-5">
        <div id="Left" className="flex flex-col gap-5 justify-center w-fit">
          <div className="aspect-square bg-accent-1 w-full">
            <img src={ProfilePhoto} alt="Hyunji Kim" className="w-full h-full object-cover" />
          </div>
          <div id="infoContainer" className="flex flex-col gap-2">
            {Info.map((info, index) => (
              <div key={index} className="flex gap-1 items-center bg-primary-4/20 p-2">
                {info.icon && (
                  <i className={`${info.icon} text-primary-1`}></i>
                )}
                {info.id === "github" ? (
                  <Link to={info.name} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-1 hover:underline">
                    {info.name}
                  </Link>
                ) :
                  <p className="text-sm">{info.name}</p>
                }
              </div>
            ))}
          </div>
          <div id="skillsContainer" className="bg-primary-4/20 p-2">
            <h3 className="text-lg font-bold">Skills</h3>
            <ul>
              {Skills.hardSkill.map((items) => (
                <li>{items}</li>
              ))}
            </ul>
          </div>
        </div>
        <div id="Right" className="flex flex-col gap-5">
          <div id="name">
            <h1 className="font-bold text-4xl">Hyunji Kim</h1>
            <h3 className="text-md font-bold text-gray-400">Full Stack Developer</h3>
          </div>
          <div id="description">
            <p className="text-xs">I'd like to come true what I've imagined. Code Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet augue faucibus finibus interdum. Suspendisse at laoreet purus, at semper risus. Integer sed massa euismod lacus porttitor molestie vel eget enim. Nunc porttitor est sed sapien rhoncus posuere. Quisque ut pretium mi. Quisque pulvinar rhoncus leo quis ultricies. Aliquam erat volutpat. Vestibulum fermentum ipsum sed augue iaculis tincidunt. Nunc accumsan porta libero, sit amet mattis leo. Nunc id massa quis quam dapibus suscipit. Nunc pharetra diam non risus hendrerit, quis vestibulum nunc egestas. Proin vel elit sapien. Donec placerat elementum est quis efficitur.</p>
          </div>
          {/* Experience  */}
          <div id="Exprience" className="flex flex-col gap-4">
            <h2 className="text-2xl capitalize font-bold">
              <i className="bi bi-suitcase-lg-fill"></i>
              experience
            </h2>
            <hr />
            <div id="Exprience_first">
              <div className="flex">
                <div id="imgContainer">
                  <img src="" alt="" />
                </div>
                <div id="textContainer">
                  <h3>NebNeb Collectif <strong className="text-xs">(2025.02 - 2025.04)</strong></h3>
                  <h4 className="text-xs font-bold text-gray-400">Full Stack Developer</h4>
                </div>
              </div>
              <ul className="text-xs">
                <li>First Misson</li>
                <li>First Misson</li>
                <li>First Misson</li>
                <li>First Misson</li>
                <li>First Misson</li>
              </ul>
            </div>
          </div>
          {/* Projects  */}
          <div id="Projects" className="flex flex-col gap-4">
            <h2 className="text-2xl capitalize font-bold">
              <i className="bi bi-laptop"></i>
              projects
            </h2>
            <hr />
            <div>
              {ProjectData.map((project) => (
                <div key={project.id} className="flex flex-col p-2 bg-primary-4 hover:bg-primary-1 hover:text-white rounded-lg mb-4 shadow-lg hover:scale-105 transition-transform">
                  <h3 className="text-xl uppercase">{project.name}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent-1">View Project</a>
                </div>
              ))}
            </div>
          </div>
          {/* Education  */}
          <div id="Education" className="flex flex-col gap-4">
            <h2 className="text-2xl capitalize font-bold">
              <i className="bi bi-mortarboard-fill"></i>
              Education
            </h2>
            <hr />
            <div className="flex flex-col gap-4">
              {EducationData.map((item) => (
                <div id="EducationDataContainer">
                  <div className="flex items-center gap-4">
                    <div id="imgContainer" className="w-fit h-[60px] aspect-square flex items-center justify-center">
                      <img src={item.schoolLogo} alt={item.school} className="h-[60px]" />
                    </div>
                    <div id="textContainer">
                      <h3 className="text-lg font-bold">{item.school}</h3>
                      <p className="text-gray-400 font-bold text-sm">{item.diploma}</p>
                      <p className="text-xs">{item.startDate} - {item.endDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}