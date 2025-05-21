import { NavLink, useLocation } from "react-router"

export default function Nav() {
  const location = useLocation();

  const isBlog = location.pathname.startsWith("/blog");
  const isProject = location.pathname.startsWith("/projects");

  const StudyCategory = [
    { name: "All", path: "/blog" },
    { name: "Frontend", path: "/blog/frontend" },
    { name: "Backend", path: "/blog/backend" },
    { name: "UI/UX", path: "/blog/uiux" },
    { name: "HTML", path: "/blog/html" },
    { name: "CSS", path: "/blog/css" },
    { name: "JavaScript", path: "/blog/javascript" },
    { name: "TypeScript", path: "/blog/typescript" },
    { name: "React", path: "/blog/react" },
    { name: "Node", path: "/blog/node" },
    { name: "Express", path: "/blog/express" },
    { name: "NestJS", path: "/blog/nestjs" },
  ];

  const ProjectCategory = [
    { name: "All", path: "/projects" },
    { name: "Wind Map", path: "/projects/windmap" },
    { name: "LocalSteps", path: "/projects/localsteps" },
    { name: "NebNeb Collecitf", path: "/projects/nebneb" },
    { name: "FitAura", path: "/projects/fitaura" },
    { name: "Geoje: Captive Memory", path: "/projects/geoje" },
    { name: "console.blog", path: "/projects/blog" },
  ];

  type NavLinkClassNameFn = (state: {
    isActive: boolean;
    isPending: boolean;
    isTransitioning?: boolean;
  }) => string;

  const menuLink: NavLinkClassNameFn = ({ isActive }) =>
    `capitalize cursor-pointer ${isActive
      ? "text-accent-1"
      : "text-primary-3 hover:text-accent-1"
    }`;

  return (
    <nav className="mx-auto my-10 flex flex-col items-center">
      <div className="bg-primary-2 w-full max-w-[600px] rounded-full py-4 px-6 flex justify-center items-center">
        <div className="flex gap-8 md:gap-20 uppercase">
          <NavLink to="/" className="text-primary-5 hover:text-white">
            home
          </NavLink>
          <NavLink to="/about" className="text-primary-5 hover:text-white">
            about me
          </NavLink>
          <NavLink to="/projects" className="text-primary-5 hover:text-white">
            projects
          </NavLink>
          <NavLink to="/blog" className="text-primary-5 hover:text-white">
            study
          </NavLink>
        </div>
      </div>
      {/* study submenu */}
      {isBlog && (
        <div className="mt-4 flex gap-4 flex-wrap justify-center">
          {StudyCategory.map(c => (
            <NavLink
              key={c.path}
              to={c.path}
              className={menuLink}
              end={c.path === "/blog"} 
            >
              {c.name}
            </NavLink>
          ))}
        </div>
      )}
      {/* project submenu */}
      {isProject && (
        <div className="mt-4 flex gap-4 flex-wrap justify-center">
          {ProjectCategory.map(c => (
            <NavLink
              key={c.path}
              to={c.path}
              className={menuLink}
              end={c.path === "/projects"}
            >
              {c.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
