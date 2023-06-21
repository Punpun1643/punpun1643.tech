import './App.css'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import ScrollUp from './components/scrollup/ScrollUp'

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <ScrollUp />
    </>
  )
}

export default App
