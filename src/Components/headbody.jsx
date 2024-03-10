import React from 'react';

const Headbody = () => {
    return (
        <div>
            <section className="top-part">
                <div className="hlaf-width">
                    <h1>welcome to <br /> <span className="name-highlight">Al Shahoriar</span> Website</h1>
                    <h3>World Class Devloper</h3>
                    <p>Hi! My name is Al Shahoriar. Welcome to my personal page that I’ve designed to showcase my skills and expertise that I have accumulated over the year. I have also placed all my social links at the left side, feel free to connect with me. I would love to be given the opportunity to hear from you.</p>
                    <a className="link-btn" target="_blank" href="https://www.linkedin.com/in/al-shahoriar-860314220/">Hire me</a>
                </div>
                <div className="hlaf-width">
                    <img src="../public/Untitled.png" alt="me"/>
                </div>
            </section>
        </div>
    );
};

export default Headbody;

