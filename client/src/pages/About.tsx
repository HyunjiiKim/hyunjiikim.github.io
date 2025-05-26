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
      "Problem Solving", "Communication", "Teamwork", "Adaptability", "Critical Thinking"
    ]
  }

  return (
    <div id="about" className="max-w-[1000px] my-10 mx-auto">
      <div id="resume" className="flex items-start w-[640px] mx-auto gap-5 max-sm:flex-col max-sm:w-full max-sm: p-10">
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
            <h3 className="text-lg font-bold"> Hard Skills</h3>
            <div className="flex flex-wrap gap-1">
              {Skills.hardSkill.map((items) => (
                <p className="text-xs px-2 py-1 rounded-full bg-accent-1 text-white">{items}</p>
              ))}
            </div>
          </div>
          <div id="skillsContainer" className="bg-primary-4/20 p-2">
            <h3 className="text-lg font-bold"> Soft Skills</h3>
            <ul className="list-disc pl-5 text-xs">
              {Skills.softSkill.map((items) => (
                <li className="text-sm">{items}</li>
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
            <p className="text-xs">Currently building and migrating my tech blog to a custom platform I designed and developed myself. The project reflects my hands-on approach to problem-solving, my curiosity in exploring how things work behind the scenes, and my desire to document and share what I learn along the way. It's an evolving space where I express my development journey and embody the mindset I work by: dream it, build it.</p>
          </div>
          {/* Experience  */}
          <div id="Exprience" className="flex flex-col gap-4">
            <h2 className="text-2xl capitalize font-bold">
              <i className="bi bi-suitcase-lg-fill"></i>
              &nbsp;
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
              &nbsp;
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
              &nbsp;
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