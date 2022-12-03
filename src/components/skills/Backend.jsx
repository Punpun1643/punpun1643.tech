import React from 'react';

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class="bx bxl-nodejs skills__icon"></i>
                    <div>
                        <h3 className="skills__name">Node.js</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bxl-python skills__icon"></i>
                    <div>
                        <h3 className="skills__name">Python</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bxl-postgresql skills__icon"></i>
                    <div>
                        <h3 className="skills__name">PostgreSQL</h3>
                    </div>
                </div>

            </div>
            
            <div className="skills__group">
                <div className="skills__data">
                    <i class="bx bxl-mongodb skills__icon"></i>
                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bx-badge-check skills__icon"></i>
                    <div>
                        <h3 className="skills__name">SQLite</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bxl-java skills__icon"></i>
                    <div>
                        <h3 className="skills__name">Java</h3>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Backend