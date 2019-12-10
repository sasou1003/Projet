import React, { Component } from 'react';
import './App.css';
import Ventes from "./Components/Ventes";
import Localisation from "./Components/Localisation";
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
                        <a>Lien </a>
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
                                <li>Lien 3</li>
                            </ul>
                        </div>
                    </nav>
                    <main className="col-10">


                        <div className="row">

                            {/*Widget 1 : nb utilisateurs total*/}
                                <div className="card col-6">
                                    <div className="card-title"> <strong> Nombre d'utilisateurs total </strong> </div>
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
                                <div className="card-title"> <strong> Widget 3 </strong></div>
                                <div className="card-body">blabla</div>
                                </div>

                                <div className="row">

                                <div className="card col-4">
                                <div className="card-title"> <strong> Widget 4 </strong></div>
                                <div className="card-body">blabla</div>
                                </div>

                                <div className="card col-4">
                                <div className="card-title"> <strong> Widget 5 </strong></div>
                                <div className="card-body">blabla</div>
                                </div>

                                <div className="card col-4">
                                <div className="card-title"> <strong> Widget 6 </strong></div>
                                <div className="card-body">blabla</div>
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
