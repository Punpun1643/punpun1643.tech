import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <footer className="contact" id="contact">
        <div className="contact__container container">
            <h1 className="contact__title">Contact</h1>
            <ul className="contact__list">
                <li>
                    <a href="#skills" className="contact__link">Skills</a>
                </li>
                <li>
                    <a href="#experience" className="contact__link">Experience</a>
                </li>
                <li>
                    <a href="#projects" className="contact__link">Projects</a>
                </li>
            </ul>

            <div className="contact__social">
                <a href="https://www.linkedin.com/in/papattarada-apithanangsiri/" className="contact__social-icon" target="_blank">
                    <i class='bx bxl-linkedin' ></i>
                </a>
                <a href="https://github.com/Punpun1643" className="contact__social-icon" target="_blank">
                    <i class='bx bxl-github' ></i>
                </a>
                <a href="mailto:papattarada.a@u.nus.edu" className="contact__social-icon" target="_blank">
                    <i class='bx bxl-gmail' ></i>
                </a>
            </div>

            <span className="contact__copy">&#169; 2022 Papattarada A.</span>
        </div>
    </footer>
  )
}

export default Contact