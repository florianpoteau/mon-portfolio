import React, { useState } from 'react';
import monImage from '../assets/profil.png';
import Footer from '../Components/Footer/Footer';

const QuiSuisJe = () => {
    const [activeTab, setActiveTab] = useState('profil'); // État pour suivre l'onglet actif

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (<>
    <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a
                            className={`nav-link ${activeTab === 'profil' ? 'active' : ''}`}
                            id="v-pills-profil-tab"
                            data-toggle="pill"
                            href="#v-pills-profil"
                            role="tab"
                            aria-controls="v-pills-profil"
                            aria-selected={activeTab === 'profil'}
                            onClick={() => handleTabClick('profil')}
                        >
                            Mon profil
                        </a>
                        <a
                            className={`nav-link ${activeTab === 'parcours' ? 'active' : ''}`}
                            id="v-pills-parcours-tab"
                            data-toggle="pill"
                            href="#v-pills-parcours"
                            role="tab"
                            aria-controls="v-pills-parcours"
                            aria-selected={activeTab === 'parcours'}
                            onClick={() => handleTabClick('parcours')}
                        >
                            Mon parcours
                        </a>
                    </div>
                </div>

                <div className="col-9">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className={`tab-pane fade ${activeTab === 'profil' ? 'show active' : ''}`} id="v-pills-profil" role="tabpanel" aria-labelledby="v-pills-profil-tab">
                            {/* Contenu de Mon profil */}
                            <div className="row mt-4 mb-4">
                                <div className="col-md-6 text-center">
                                    <h2 className='mb-4'>Mon Profil</h2>
                                    <p>Bonjour, je m'appelle Florian Poteau, j'ai 22 ans et j'habite dans les environs de Valenciennes.</p>
                                    <p>Développeur web depuis un peu plus d'un an, je suis des formations et je me forme en autodidacte dans le développement d'application web et web mobile, j'aimerai en faire mon métier, et je suis toujours disponible pour un éventuel entretien, n'hésitez pas à me contacter sur mon adresse mail <em><u>florianpoteau59@gmail.com</u></em></p>
                                </div>
                                <div className="col-md-6">
                                    <img src={monImage} alt="Mon profil" className="img-fluid rounded" style={{width: '50%'}} />
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'parcours' ? 'show active' : ''}`} id="v-pills-parcours" role="tabpanel" aria-labelledby="v-pills-parcours-tab" >
                            <div>
                            <h2>Mon Parcours</h2>
                            <p>Anciennement <strong>boulanger, pâtissier</strong>. Je suis allé lors de mes études au lycée Léonard De Vinci à trith Saint-Léger.</p>
                            <p>J'ai passé là bas, un <em><u>CAP Pâtissier</u></em>, ainsi qu'un <em><u>bac pro Boulanger, Pâtisser</u></em> </p>
                            <p><strong>Passionné de l'informatique</strong>, j'ai ensuite voulu me lancer dans ce métier passionnant</p>
                            <p>J'ai commencé en autodidacte avant de suivre une formation de découverte chez Simplon d'une durée de 1 mois auquel j'ai utilisé HTML, CSS et javascript</p>
                            <p>Ensuite j'ai suivis une nouvelle formation toujours chez Simplon d'une durée de 2 mois, on a utilisé que du Java JEE lors de cette formation, il s'agissait de mon tout premier langages back-end</p>
                            <p>Puis j'ai suivis une formation d'une durée de 6 mois chez la Sofip de Prouvy-Rouvignies, l'intitulé de la formation est DWWM avec un titre professionnel à la fin, la formation, toujours en cours, arrive à sa fin le 17 novembre</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
        <Footer />
        </>
    );
};

export default QuiSuisJe;
