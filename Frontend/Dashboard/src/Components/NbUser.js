import React, { Component } from 'react';
import {PieChart, Pie, ResponsiveContainer, Cell, Tooltip} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from "axios";


const data = [
    { name: 'Total Users', value: 20 },
];


export default class NbUser extends Component {
    static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';

    constructor(props) {
        super(props);
        this.state = {
            name: 'Total Users',
            totUser: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3001/Users.routes')
            .then(res => {
                this.setState({ totUser: res.data });

            })
            .catch(function (error) {
                console.log(error);
            })

        }

    render() {
        return (
            //Test nombre d'utilisateurs
            console.log(this.state.totUser.length),

            <div style={{ width: '100%', height: 400}}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            //data={this.state}
                            //cx={150}
                            //cy={150}
                            //labelLine={true}
                            /*label= {this.state.name}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey={this.state.totUser.length}*/

                            data={data}
                            label= {data.name}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"

                        >
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}