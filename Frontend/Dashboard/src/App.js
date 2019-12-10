import React from 'react';
//import {BrowserRouter as Router} from "react-router-dom";
//import axios from 'axios';
import './App.css';

//Import des components
import Ventes from "./Components/Ventes";
import Localisation from "./Components/Localisation";
import Taille from "./Components/Taille";
import Mesures from "./Components/Mesures";
import NbUser from "./Components/NbUser";
import NbCapteurs from "./Components/NbCapteurs";


import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor() {
        super()
    }

    render() {

        return (
            <body>
            <nav className="navbar navbar-dark bg-danger shadow">
                <a>Dashboards Objets Connectés</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a>&copy; 2019 | Sara Sandid & Rémi Flippo</a>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block sidebar shadow"> {/* side bar : sa taille s'adapte a la taille de la page, il sera complet quand ta page sera remplie*/}
                        <div className="sidebar-sticky">
                            <ul>

                                <li>Statistiques</li>
                                <li>Administrateur</li>

                            </ul>
                        </div>
                    </nav>
                <main className="col-10">


                        <div className="row">

                            {/*Widget 1 : nb utilisateurs total*/}
                                <div className="card col-6">
                                    <div className="card-title"> <strong> Température moyenne </strong> </div>
                                    <div className="card-body">
                                        <div className="vente">
                                        <Ventes/>
                                        </div>
                                    </div>
                                </div>

                            {/*Widget 2 : localisation des sensors dans la maison*/}
                                <div className="card col-6">
                                <div className="card-title"> <strong> Localisation des sensors dans la maison </strong> </div>
                                <div className="card-body">
                                    <div className="vente">
                                        <Localisation/>
                                    </div>
                                </div>
                                </div>
                        </div>


                        <div className="row">
                                <div className="card col-12">
                                <div className="card-title"> <strong> Mesures en fonction de la localisation </strong></div>
                                <div className="card-body">
                                    <div className="vente">
                                        <Mesures/>
                                    </div>
                                </div>
                                </div>
                        </div>

                        <div className="row">

                                <div className="card col-4">
                                <div className="card-title"> <strong> Taille de la maison de nos utilisateurs </strong></div>
                                <div className="card-body">
                                    <div className="widget5">
                                        <Taille/>
                                    </div>
                                </div>
                                </div>

                                <div className="card col-4">
                                <div className="card-title"> <strong> Nombre total d'utilisateurs</strong></div>
                                <div className="card-body">
                                    <div className="widget5">
                                        <NbUser/>
                                    </div>
                                </div>
                                </div>

                                <div className="card col-4">
                                <div className="card-title"> <strong> Nombre total de capteurs </strong></div>
                                <div className="card-body">
                                    <div className="widget6">
                                        <NbCapteurs/>
                                    </div>
                                </div>
                                </div>

                        </div>


                </main>
                                </div>
                                </div>
                                </body>
                                );
                                }
                                }

                                export default App;
