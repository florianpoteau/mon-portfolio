import React, { useState } from 'react';
import Footer from '../Components/Footer/Footer';
import { Container } from 'react-bootstrap';
const image = require('../assets/html.png');
const image2 = require('../assets/css.png');
const image3 = require('../assets/js.png');
const image4 = require('../assets/java.png');
const image5 = require('../assets/react.png');
const image6 = require('../assets/flutter.png');
const image7 = require('../assets/dart.png');
const image8 = require('../assets/php.png');
const image9 = require('../assets/symfony.png');
const image10 = require('../assets/apiplatform.png');
const image11 = require('../assets/mysql.png');
const image12 = require('../assets/postgresql.png');
const image13 = require('../assets/github.png');
const image14 = require('../assets/figma.png');
const image15 = require('../assets/trello.png');

const Competences = () => {
    const [activeTab, setActiveTab] = useState('langages');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a
                                    className={`nav-link ${activeTab === 'langages' ? 'active' : ''}`}
                                    id="v-pills-langages-tab"
                                    data-toggle="pill"
                                    href="#v-pills-langages"
                                    role="tab"
                                    aria-controls="v-pills-langages"
                                    aria-selected={activeTab === 'langages'}
                                    onClick={() => handleTabClick('langages')}
                                >
                                    Langages
                                </a>
                                <a
                                    className={`nav-link ${activeTab === 'savoirfaire' ? 'active' : ''}`}
                                    id="v-pills-parcours-tab"
                                    data-toggle="pill"
                                    href="#v-pills-savoirfaire"
                                    role="tab"
                                    aria-controls="v-pills-savoirfaire"
                                    aria-selected={activeTab === 'savoirfaire'}
                                    onClick={() => handleTabClick('savoirfaire')}
                                >
                                    Savoir faire
                                </a>
                            </div>
                        </div>

                        <div className="col-9">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className={`tab-pane fade ${activeTab === 'langages' ? 'show active' : ''}`} id="v-pills-langages" role="tabpanel" aria-labelledby="v-pills-langages-tab">
                                    <h4 className='text-center mb-5'>Les langages, frameworks et outils que j'ai utilisés:</h4>
                                    <div className='col'>
                                        <div className='row mb-5'>
                                            <Container className='text-center'>
                                                <img src={image} className='mx-2' alt="HTML" />
                                                <img src={image2} className='mx-2' alt="CSS" />
                                                <img src={image3} className='mx-2' alt="javascript" />
                                                <img src={image4} className='mx-2' alt="java" />
                                                <img src={image5} className='mx-2' alt="react" />
                                            </Container>
                                        </div>
                                        <div className='row mb-5'>
                                            <Container className='text-center'>
                                                <img src={image6} className='mx-2' alt="flutter" />
                                                <img src={image7} className='mx-2' alt="dart" />
                                                <img src={image8} className='mx-2' alt="php" />
                                                <img src={image9} className='mx-2' alt="symfony" />
                                                <img src={image10} className='mx-2' alt="apiplatform" />
                                            </Container>
                                        </div>
                                        <div className='row mb-5'>
                                            <Container className='text-center'>
                                                <img src={image11} className='mx-2' alt="Mysql" />
                                                <img src={image12} className='mx-2' alt="postgresql" />
                                                <img src={image13} className='mx-2' alt="github" />
                                                <img src={image14} className='mx-2' alt="figma" />
                                                <img src={image15} className='mx-2' alt="trello" />
                                            </Container>
                                        </div>


                                    </div>
                                </div>

                                {/* Savoir faire */}
                                <div className={`tab-pane fade ${activeTab === 'savoirfaire' ? 'show active' : ''}`} id="v-pills-savoirfaire" role="tabpanel" aria-labelledby="v-pills-savoirfaire-tab">

                                    <h3 className='mb-5'>Savoirs faire</h3>
                                    <h4>Front-end</h4>
                                    <p className='mb-5'>J'ai appris et je sais faire du front avec du html, du css, du javascript, du react du php ou du flutter. je sais développer des sites web et des applications mobile.</p>

                                    <h4>Back-end</h4>
                                    En ce qui concerne le back-end, je sais rendre un site fonctionnel et sécurisé avec par exemple des fichiers .env, des paramètres ou des techniques tel que la création d'un api REST en php avec api platform.
                                    Je sais donc:
                                    <ul className='mb-5'>
                                        <li>Utiliser une api REST</li>
                                        <li>Créer une api REST</li>
                                        <li>Faire des requête SQL GET, POST, PUT ou DELETE selon les besoins et en évitant les injections SQL pour la sécurité</li>
                                        <li>Etre logique, et écrire des fonctions modulables et pratique.</li>
                                        <li>Utiliser le MVC ( Models, Views, Controllers), en ce qui concerne les bonnes pratiques de développement, et la POO pour l'orientée objet</li>
                                    </ul>

                                    <h4>Api</h4>
                                    <p className='mb-5'>Je sais créer une api REST en php, symfony, et avec api platform, je sais utiliser chacune des méthodes, GET, POST, PUT ou DELETE. et je sais sécurisé mon api afin que l'accès aux données puisse etre restreint selon par exemple le rôle d'un utilisateur.</p>
<h4>Bases de données</h4>
<p>Je sais créer une base de données postgresql ou MySQL ou noSQL, pour la partie noSQL, j'ai pu voir l'utilisation d'une base de données en temps réel (Firebase). Pour la partie MySQL et postgresql, c'est a dire les bases de données relationnels, je sais créer une base de données, mettre a jour, supprimer, ou effectuer d'autres manipulations de la base de données.
    <p>J'ai pu aussi réaliser un dictionnaire de données, un MCD et un schéma relationnel, pour la mise en place d'une base de données et effectuer les relations entre différentes tables, cela me sert particulièrement à voir comment la base de données sera construite avant de procéder aux tests.</p>
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Competences;
