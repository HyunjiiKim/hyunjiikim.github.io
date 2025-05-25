import { BrowserRouter, Routes, Route } from 'react-router'

import Home from './pages/Home'
import About from './pages/About'
import { ProjectList, ProjectDetail } from './pages/Projects'
import Blog from './pages/Blog'
import { PostPage } from './pages/Post'


import Nav from './components/Nav'
import Footer from './components/Footer'

import './App.css'

function App() {

  return (

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:category/:id" element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
