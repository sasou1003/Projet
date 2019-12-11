import React from 'react';
//import axios from 'axios';
import './App.css';
import {Route, BrowserRouter, Switch, Link, Router} from 'react-router-dom';

//Import des components
import Ventes from "./Components/Ventes";
import Localisation from "./Components/Localisation";
import Taille from "./Components/Taille";
import Mesures from "./Components/Mesures";
import NbUser from "./Components/NbUser";
import NbCapteurs from "./Components/NbCapteurs";
import UserForm from "./Components/Formulaire";
import Stats from "./Components/Stats";


import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (

            <body>
            <nav className="navbar navbar-dark bg-danger shadow">
                <a>Dashboards Objets Connectés</a>
                <ul className="navbar-nav">
                    <a className="nav-item">
                        <a>&copy; 2019 | Sandid & Flippo</a>
                    </a>
                </ul>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-lg-2 col-md-3 col-sm-4 sidebar shadow"> {/* side bar : sa taille s'adapte a la taille de la page, il sera complet quand ta page sera remplie*/}
                        <div className="sidebar-sticky justify-content-center">
                            <ul>
                                <li> <a href='/' style={{color:'black'}}>Dashboard </a> </li> <br/>
                                <li> <a href='/Formulaire' style={{color:'black'}}> Formulaire </a></li>
                            </ul>

                        </div>
                    </nav>
                    <main className="col-lg-10 col-md-9 col-sm-8">

                        <BrowserRouter>
                            <Switch>
                            <Route exact path='/' exat component={Stats} />
                            <Route exact path='/Formulaire' exact component={UserForm} />
                            </Switch>
                        </BrowserRouter>

                    </main>
                </div>
            </div>

            </body>



                                );
                                }
                                }

  export default App;
