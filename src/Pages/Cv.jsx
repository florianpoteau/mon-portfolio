import React from 'react';
import cv from '../assets/cv.png'; // Importez votre image si nécessaire
import Footer from '../Components/Footer/Footer';
import { Button } from 'react-bootstrap';
const myPdf = require('../assets/cv.pdf');


const Cv = () => {
    return (
        <>
            <div className='text-center mt-4 mb-4'>
                <img src={cv} alt="mon cv" style={{width: "30%"}}/>
            </div>
            <div className='text-center'>
            <a href={myPdf}
            download="Cv Florian Poteau"
            target="_blank"
            rel="noopener noreferrer">
            <Button>Télécharger en pdf</Button>
            </a>
            </div>
            <Footer />
        </>
    );
};

export default Cv;
