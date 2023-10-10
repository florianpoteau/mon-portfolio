import React, { useEffect } from 'react';

const Footer = () => {
    const footerStyle = {
        width: "100%",
        backgroundColor: "#007bff",
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
        <footer style={footerStyle}>
            Réseaux: <br />
            <br />
            <a href="https://github.com/florianpoteau?tab=repositories" className='text-white'>Mon github</a> <br />
            <a href="https://www.linkedin.com/in/florian-poteau-63a9a71a1/" className='text-white'>Mon linkedin</a>
        </footer>
    );
};

export default Footer;
