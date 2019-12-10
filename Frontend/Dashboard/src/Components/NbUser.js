import React, { Component } from 'react';
import {PieChart, Pie, ResponsiveContainer, Cell, Tooltip} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


const data = [
    { name: 'Total Users', value: 21 },
];


export default class NbUser extends Component {
    static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';

    render() {
        return (
            <div style={{ width: '100%', height: 400}}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            //cx={150}
                            //cy={150}
                            //labelLine={true}
                            label= {data.value}
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