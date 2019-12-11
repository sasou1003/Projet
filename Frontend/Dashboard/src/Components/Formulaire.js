import React from 'react';
import './Formulaire.css';



class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePersons(event) {
        this.setState({value: event.target.value});
    }

    handleChangeLocalisation(event) {
        this.setState({value: event.target.value});
    }

    handleChangeHouse(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Formulaire soumis');
        event.preventDefault();
    }

    render() {
        return (
            <div className="Form row">
                <div className="card col-10">
                    <div className="card-title"><h2> <strong> Formulaire d'ajout d'un utilisateur ! </strong> </h2></div>

            <form onSubmit={this.handleSubmit} className="labels card-body">
                <label className="label1">
                    Nombre de personnes dans votre maison :
                    <input type="text" value={this.state.value} onChange={this.handleChangePersons} />
                </label> <br/><br/>

                <label className="label2">
                    Choisissez la taille de votre maison :
                    <select value={this.state.value} onChange={this.handleChangeHouse}>
                        <option value="small">Petite</option>
                        <option value="medium">Moyenne</option>
                        <option value="big">Grande</option>
                    </select>
                </label><br/><br/>
                <label className="label3">
                    Localisation :
                    <input type="text" value={this.state.value} onChange={this.handleChangeLocalisation} />
                </label><br/><br/><br/>
                <input type="submit" value="Envoyer" />
            </form>
                </div>
            </div>
        );
    }
}

export default UserForm;