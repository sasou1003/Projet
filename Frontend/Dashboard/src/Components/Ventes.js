import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const data = [{mois: 'Janvier', temperature: 6},{mois: 'Février', temperature: 12}, {mois: 'Mars', temperature: 10},
    {mois: 'Avril', temperature: 13}, {mois: 'Mai', temperature: 17}, {mois: 'Juin', temperature: 20},
    {mois: 'Juillet', temperature: 23},{mois: 'Août', temperature: 20}];

class Ventes extends Component {
    constructor() {
        super()
    }

    render(){
        return(
            <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
            <LineChart width={510} height={300} data={data}>
            <Line type="monotone" dataKey="temperature" stroke="green"/>
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