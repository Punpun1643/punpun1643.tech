import React from 'react';

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__image" />
      <div className="work__content">
        <h3 className="work__title">{item.title}</h3>
        <p className="work__subtitle">{item.subtitle}</p>
        <div className="work__tech">
          {(item.tech).map((stack) => {
            return <p className="work__tech-item">{stack.stack}</p>
          })}
        </div>
        <a href={item.source} className="work__button button button--flex" target="_blank">
          <i class='work__button-icon bx bxl-github'></i> View source code
        </a>
      </div>   
    </div>
  )
}

export default WorkItems