import React from 'react';
import './projects.css';
import Work from './Work';

const Projects = () => {
  return (
    <section className="projects section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">What I have worked on</span>
        <Work />
    </section>
  )
}

export default Projects