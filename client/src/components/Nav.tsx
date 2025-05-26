import { NavLink, useLocation } from "react-router"
import { useState } from "react";

export default function Nav() {
  const location = useLocation();

  const isBlog: boolean = location.pathname.startsWith("/blog");
  const isProject: boolean = location.pathname.startsWith("/projects");

  const Nav = [
    { name: "home", path: "/" },
    { name: "about me", path: "/about" },
    { name: "projects", path: "/projects" },
    { name: "study", path: "/blog" },
  ];

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
      ? "text-accent-1 font-bold"
      : "text-primary-3 hover:text-accent-1"
    }`;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="nav">
      <nav id="desktopNav" className="max-sm:hidden mx-auto my-10 flex flex-col items-center">
        <div className="bg-primary-2 w-full max-w-[600px] max-sm:w-screen rounded-full py-4 px-6 flex justify-center items-center">
          <div className="flex gap-8 md:gap-20 uppercase">
            {Nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={`text-primary-5 hover:text-white capitalize`}
              >
                {item.name}
              </NavLink>
            ))}
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
      <div id="mobileNav" className="sm:hidden">
        <div id="Container" className="absolute top-2 left-2 cursor-pointer" onClick={() => setIsOpen(true)}>
          <i className="bi bi-list text-4xl"></i>
        </div>
        {isOpen && (
          <div className="absolute top-0 left-0 z-10 bg-white w-fit p-10 h-screen" >
            <div id="closeContainer" className="absolute top-2 right-2 cursor-pointer" onClick={() => setIsOpen(false)}>
              <i className="bi bi-x-lg"></i>
            </div>
            <div className="flex flex-col gap-8 md:gap-20 uppercase">
              {Nav.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="hover:text-accent-1"
                >
                  {item.name}
                </NavLink>
              ))}
              {isBlog && (
                <div className="mt-4 flex flex-col gap-4 justify-center text-xs">
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
              {isProject && (
                <div className="mt-4 flex flex-col gap-4 justify-center text-xs">
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
            </div>
          </div>
        )}
      </div>
    </div>

  );
}