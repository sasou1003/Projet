import React from 'react';
import Ventes from "./Ventes";
import Localisation from "./Localisation";
import Mesures from "./Mesures";
import Taille from "./Taille";
import NbUser from "./NbUser";
import NbCapteurs from "./NbCapteurs";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Stats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <body>
            <div className="row">

                {/*Widget 1 : Température en fonction du mois*/}
                <div className="card col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="card-title"> <strong> Température moyenne </strong> </div>
                    <div className="card-body">
                        <div className="vente">
                            <Ventes/>
                        </div>
                    </div>
                </div>

                {/*Widget 2 : localisation des sensors dans la maison*/}
                <div className="card col-lg-6 col-md-6 col-sm-12 col-xs-12">
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

                <div className="card col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="card-title"> <strong> Taille de la maison de nos utilisateurs </strong></div>
                    <div className="card-body">
                        <div className="widget5">
                            <Taille/>
                        </div>
                    </div>
                </div>

                <div className="card col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="card-title"> <strong> Nombre total d'utilisateurs</strong></div>
                    <div className="card-body">
                        <div className="widget5">
                            <NbUser/>
                        </div>
                    </div>
                </div>

                <div className="card col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <div className="card-title"> <strong> Nombre total de capteurs </strong></div>
                    <div className="card-body">
                        <div className="widget6">
                            <NbCapteurs/>
                        </div>
                    </div>
                </div>

            </div>

            </body>



        );
    }
}

export default Stats;