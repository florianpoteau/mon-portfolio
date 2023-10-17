import React, { useState } from 'react';
import monImage from '../assets/profil.png';
import CarouselProjet from '../Components/Carousels/CarouselProjet';
import Footer from '../Components/Footer/Footer';

const QuiSuisJe = () => {
    const [activeTab, setActiveTab] = useState('profil');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (<>
    <div className='d-flex flex-column'>
    <div style={{position: 'relative'}}>
        <div className="container mt-5">
        <div className="d-md-flex">
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
                        <a
                            className={`nav-link ${activeTab === 'projets' ? 'active' : ''}`}
                            id="v-pills-projets-tab"
                            data-toggle="pill"
                            href="#v-pills-projets"
                            role="tab"
                            aria-controls="v-pills-projets"
                            aria-selected={activeTab === 'projets'}
                            onClick={() => handleTabClick('projets')}
                        >
                            Mes projets
                        </a>
                    </div>
                </div>

                <div className="col-12 col-lg-9">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className={`tab-pane fade ${activeTab === 'profil' ? 'show active' : ''}`} id="v-pills-profil" role="tabpanel" aria-labelledby="v-pills-profil-tab">
                            {/* Contenu de Mon profil */}
                            <div className="row sm-col mt-4 mb-4">
                                <div className="col-md-6  text-center">
                                    <h2 className='mb-4'>Mon Profil</h2>
                                    <p>Bonjour, je m'appelle Florian Poteau, j'ai 22 ans et j'habite dans les environs de Valenciennes.</p>
                                    <p>Développeur web depuis un peu plus d'un an, je suis des formations et je me forme en autodidacte dans le développement d'application web et web mobile, j'aimerai en faire mon métier, et je suis toujours disponible pour un éventuel entretien, n'hésitez pas à me contacter sur mon adresse mail <em><u><a href="mailto:florianpoteau59@gmail.com">florianpoteau59@gmail.com</a></u></em></p>
                                </div>
                                <div className="col-md-6 text-center">
    <img src={monImage} alt="Mon profil" className="img-fluid rounded mx-auto" style={{ width: '50%' }} />
</div>

                            </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'parcours' ? 'show active' : ''}`} id="v-pills-parcours" role="tabpanel" aria-labelledby="v-pills-parcours-tab" >
                            <div style={{marginLeft: "3%", marginRight: '3%'}}>
                            <h2 className='mt-4 mb-4'>Mon Parcours</h2>
                            <p>Anciennement <strong>boulanger, pâtissier</strong>. Je suis allé lors de mes études au lycée Léonard De Vinci à trith Saint-Léger.</p>
                            <p>J'ai passé là bas, un <em><u>CAP Pâtissier</u></em>, ainsi qu'un <em><u>bac pro Boulanger, Pâtisser</u></em> </p>
                            <p><strong>Passionné de l'informatique</strong>, j'ai ensuite voulu me lancer dans ce métier passionnant</p>
                            <p>J'ai commencé en autodidacte avant de suivre une formation de découverte chez Simplon d'une durée de 1 mois auquel j'ai utilisé HTML, CSS et javascript</p>
                            <p>Ensuite j'ai suivis une nouvelle formation toujours chez Simplon d'une durée de 2 mois, on a utilisé que du Java JEE lors de cette formation, il s'agissait de mon tout premier langages back-end</p>
                            <p>Puis j'ai suivis une formation d'une durée de 6 mois chez la Sofip de Prouvy-Rouvignies, l'intitulé de la formation est DWWM avec un titre professionnel à la fin, la formation, toujours en cours, arrive à sa fin le 17 novembre</p>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 'projets' ? 'show active' : ''}`} id="v-pills-projets" role="tabpanel" aria-labelledby="v-pills-projets-tab">
                            {/* Contenu de Mes projets */}
                            <div className="row mt-4 mb-4" style={{marginLeft: "3%", marginRight: '3%'}}>
                                <h2 className='mb-4 mt-2'>Mes projets réalisés</h2>
                                <p>Dans le cadre de projet réalisé en formation, que ce soit en solo, ou en groupe. Nous avons su collaborer pour créer un ou plusieurs projets.</p>
                                <p>Nous avons créer par exemple :</p>
                                <ul className='mb-4'>
                                    <li>Site web d'une association caricative(en groupe de 3)</li>
                                    <li>Dévatopia, le site web de deux de mes formateurs de l'organisme de formation "Sofip"(en solo)</li>
                                    <li>Plusieurs api REST, tous développer en PHP, Symfony (en solo)</li>
                                    <li>Une application mobile nommée "Renconsport" permettant de faire des rencontres tout en faisant du sport (en groupe de 3)</li>
                                    <li>Bonne fete qui est un site web développer que en PHP pur, avec base de données, session utilisateur, rôle etc... (en groupe de 2)</li>
                                    <li>Et bien d'autres projet, je vous invite à visiter <a href="https://github.com/florianpoteau">Mon github</a> pour plus d'informations</li>
                                </ul>
                                <CarouselProjet/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />

    </div>
        </>
    );
};

export default QuiSuisJe;
