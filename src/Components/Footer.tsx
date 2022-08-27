import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <a href="https://rs.school/react/" className="link__rss">
                        <img src="images/rss-logo.svg" alt="rss-logo" className="rss__logo"/>
                    </a>
                    <span className="year">2022</span>
                    <div className="developer__wrapper">
                        <a href="https://github.com/IgorBadyukov" className="developer__link">Igor Badyukov</a>
                        <a href="https://github.com/AlexanderBychyk" className="developer__link">Aliaksandr Bychyk</a>
                        <a href="https://github.com/drEdisn" className="developer__link">Denis Demenchik</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
