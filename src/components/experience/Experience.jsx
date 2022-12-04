import React from 'react';
import './experience.css';
import Data from './Data';
import Card from './Card';

const Experience = () => {
  return (
    <section className="experience section" id="experience">
        <h2 className="section__title">Experience</h2>
        <span className="section__subtitle">My work and academic experiences</span>

        <div className="experience__container container grid">
            {/* Education */}
            <div className="timeline grid">
                {Data.map((val, id) => {
                    if (val.category === "education") {
                        return (
                            <Card 
                                key={id} 
                                icon={val.icon} 
                                title={val.title} 
                                year={val.year} 
                                desc={val.desc} 
                            />
                        );
                    }
                })}
            </div>

            {/* Experience */}
            <div className="timeline grid">
                {Data.map((val, index) => {
                    if (val.category === "experience") {
                        return (
                            <Card 
                                key={index} 
                                icon={val.icon} 
                                title={val.title} 
                                year={val.year} 
                                desc={val.desc} 
                            />
                        );
                    }
                })}
            </div>
        </div>
    </section>
  )
}

export default Experience