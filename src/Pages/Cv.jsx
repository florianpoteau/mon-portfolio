import React from 'react';
import cv from '../assets/cv1.png';
import Footer from '../Components/Footer/Footer';
import { Button } from 'react-bootstrap';

const myPdf = require('../assets/cv.pdf');

const Cv = () => {
    return (
        <>
            <div className='text-center mt-4 mb-4'>
                <img
                    src={cv}
                    alt="mon cv"
                    className="img-fluid d-block mx-auto"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </div>
            <div className='text-center'>
                <a
                    href={myPdf}
                    download="Cv Florian Poteau"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className='mb-3'>Télécharger en pdf</Button>
                </a>
            </div>
            <Footer />
        </>
    );
};

export default Cv;
