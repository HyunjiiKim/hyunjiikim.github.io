import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Projects from "./pages/Projects"
import ProjectPage from "./pages/ProjectPage"
import Contact from "./pages/Contact"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id/:id" element={<ProjectPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
