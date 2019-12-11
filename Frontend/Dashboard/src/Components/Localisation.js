import { ResponsiveContainer, PieChart, Pie, Tooltip} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React, { Component } from 'react';


const data = [
    { name: 'LivingRoom', value: 400 }, { name: 'Kitchen', value: 300 },
    { name: 'Bedroom', value: 300 }, { name: 'Bathroom', value: 200 },
];

export default class Localisation extends Component {
    static jsfiddleUrl = '//jsfiddle.net/alidingling/6okmehja/';

    render() {
        return (
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie dataKey="value" data={data} fill="#8884d8" label />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

