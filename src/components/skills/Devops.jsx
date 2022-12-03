import React from 'react'

const Devops = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">DevOps</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxl-git skills__icon'></i>
                    <div>
                        <h3 className="skills__name">Git</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bxl-github skills__icon"></i>
                    <div>
                        <h3 className="skills__name">GitHub Actions</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bx-badge-check skills__icon"></i>
                    <div>
                        <h3 className="skills__name">Cypress</h3>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class="bx bxl-docker skills__icon"></i>
                    <div>
                        <h3 className="skills__name">Docker</h3>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bxl-kubernetes skills__icon"></i>
                    <div>
                        <h3 className="skills__name">Kubernetes</h3>
                    </div>
                </div>
                <div className="skills__data"></div>
                <div className="skills__data"></div>
            </div>
        </div>
    </div>
  )
}

export default Devops