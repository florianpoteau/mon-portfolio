import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const footerStyle = {
        width: "100%",
        color: "white",
        textAlign: "center",
        padding: "10px 0",
        position: 'fixed',
        bottom: '0',
    };

    useEffect(() => {
        const body = document.body;
        const footer = document.querySelector('footer');
        body.style.paddingBottom = `${footer.clientHeight}px`;
    }, []);

    return (
        <footer style={footerStyle} className='d-flex flex-row bg-secondary bg-gradient'>
            <a href="https://github.com/florianpoteau?tab=repositories" className='text-white' style={{ width: "50%" }}>
                <FaGithub size={30} /> Mon github
            </a>
            <a href="https://www.linkedin.com/in/florian-poteau-63a9a71a1/" className='text-white' style={{ width: '50%' }}>
                <FaLinkedin size={30} /> Mon linkedin
            </a>
        </footer>
    );
};

export default Footer;
