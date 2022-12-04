import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <ScrollUp />
    </>
  )
}

export default App;
