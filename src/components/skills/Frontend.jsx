import React from 'react';

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxl-html5 skills__icon'></i>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bxl-css3 skills__icon"></i>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bxl-javascript skills__icon"></i>
                    <div>
                        <h3 className="skills__name">Javascript</h3>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class="bx bxl-react skills__icon"></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bxl-vuejs skills__icon"></i>
                    <div>
                        <h3 className="skills__name">Vue.js</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bx-badge-check skills__icon"></i>
                    <div>
                        <h3 className="skills__name">Pug</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend