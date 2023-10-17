import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import projetImage1 from '../../assets/app-mobile.jpg';
import projetImage2 from '../../assets/Screenshot_20231016_161718.jpg';
import flecheGauche from '../../assets/prevbtn.png';
import devatopiaPc from '../../assets/devatopiapc.png';
import moderateur from '../../assets/admin1.png';
import flecheDroite from '../../assets/fleche-droite.png';

const CarouselProjet = () => {
    return (<>
        <Carousel style={{ minHeight: "400px" }} prevIcon={<img src={flecheGauche} alt="Flèche gauche" />} nextIcon={<img src={flecheDroite} alt='Fleche droite'/>}>

            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
                    <Image src={projetImage1} thumbnail className="mx-auto" />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
                    <Image src={projetImage2} thumbnail className="mx-auto" />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
                    <Image src={devatopiaPc} thumbnail className="mx-auto" />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
                    <Image src={moderateur} thumbnail className="mx-auto" />
                </div>
            </Carousel.Item>

            {/* Ajoutez d'autres éléments Carousel.Item au besoin */}
        </Carousel>
        </>
    );
};

export default CarouselProjet;
