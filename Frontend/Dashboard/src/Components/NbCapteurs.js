import React, { Component } from 'react';
import {ResponsiveContainer} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import './NbCapteurs.css'




const data = [
    { name: 'Sensors', value: 53},
];


export default class NbCapteurs extends Component {

    render() {
        return (
            <div className="widget-card widget-border">
                <i className="fa fa-apple text-lightgray back-img"></i>
                <div className="widget-card-text text-gray">
                    <h4>
                        Sensors
                    </h4>
                    <p className="value">
                        53
                        <i className="fa fa-arrow-up"></i>
                    </p>
                </div>
            </div>
        )
    }
}