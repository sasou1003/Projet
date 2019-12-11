import React from 'react';
import './Formulaire.css';
import axios from 'axios';
import DataTable from "./Tableau";


class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {   _id:'',
                persons: '',
                house : '',
                localisation : '',

            };

        this.handleChangePersons = this.handleChangePersons.bind(this);
        this.handleChangeHouse = this.handleChangeHouse.bind(this);
        this.handleChangeLocalisation = this.handleChangeLocalisation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePersons(event) {
        this.setState({persons: event.target.value});
    }

    handleChangeLocalisation(event) {
        this.setState({localisation: event.target.value});
    }

    handleChangeHouse(event) {
        this.setState({house: event.target.value});
    }

    handleSubmit(event) {
        alert('Formulaire soumis');
        event.preventDefault();

        const userObject = {

            persons : this.state.persons,
            localiation : this.state.localisation,
            house : this.state.house,
        };

        axios.post('http://localhost:3001/User.routes/create', userObject)
            .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });


    }

    render() {
        return (
            <div className="Form row">
                <div className="card col-lg-10 col-md-12 col-sm-12 col-xs-12">
                    <div className="card-title"><h2> <strong> Formulaire d'ajout d'un utilisateur </strong> </h2></div>

            <form onSubmit={this.handleSubmit} className="labels card-body">
                <label className="label1">
                    Nombre de personnes dans votre maison :
                    <input type="text" value={this.state.persons} onChange={this.handleChangePersons} />
                </label> <br/><br/>

                <label className="label2">
                    Choisissez la taille de votre maison :
                    <select value={this.state.house} onChange={this.handleChangeHouse}>
                        <option value="small">Petite</option>
                        <option value="medium">Moyenne</option>
                        <option value="big">Grande</option>
                    </select>
                </label><br/><br/>
                <label className="label3">
                    Localisation :
                    <input type="text" value={this.state.localisation} onChange={this.handleChangeLocalisation} />
                </label><br/><br/>
                <input type="submit" value="Envoyer" />
            </form>
                </div>


                    <div className="card card1 col-lg-10 col-md-12">
                        <div className="card-title"><h2> <strong> Tableau de users </strong> </h2></div>
                        <Users/>
                    </div>

            </div>

        );
    }
}


class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/Users.routes')
            .then(res => {
                this.setState({ usersCollection: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }

    render() {
        return (

            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                        <tr>
                            <td>ID</td>
                            <td>Lieu</td>
                            <td>Personnes dans la maison</td>
                            <td>Taille de la maison</td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>


        );
    }
}

export default UserForm;