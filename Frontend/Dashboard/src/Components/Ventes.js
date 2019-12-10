import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const data = [{mois: 'Janvier', nbVentes: 500},{mois: 'Février', nbVentes: 700}, {mois: 'Mars', nbVentes: 1700},
    {mois: 'Avril', nbVentes: 900}, {mois: 'Mai', nbVentes: 1000}, {mois: 'Juin', nbVentes: 700},
    {mois: 'Juillet', nbVentes: 620},{mois: 'Août', nbVentes: 892}];

class Ventes extends Component {
    constructor() {
        super()
    }

    render(){
        return(
            <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
            <LineChart width={510} height={300} data={data}>
            <Line type="monotone" dataKey="nbVentes" stroke="green"/>
            <CartesianGrid stroke="#ccc"/>
            <XAxis dataKey="mois" />
            <YAxis />
            <Tooltip />
            </LineChart>
            </ResponsiveContainer>
            </div>


        );
    }
}

export default Ventes;