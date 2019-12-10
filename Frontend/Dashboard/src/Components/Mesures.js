import React, { PureComponent } from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [
    {
        name: 'France', temperature: 400, humidity: 240, airpollution: 240,
    },
    {
        name: 'USA', temperature: 300, humidity: 139, airpollution: 221,
    },
    {
        name: 'Italy', temperature: 200, humidity: 980, airpollution: 229,
    },
    {
        name: 'China', temperature: 278, humidity: 390, airpollution: 200,
    },
];

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9hjfkp73/';

    render() {
        return (
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
            <BarChart
                width={50}
                height={180}
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="temperature" stackId="a" fill="#8884d8" />
                <Bar dataKey="humidity" stackId="a" fill="#82ca9d" />
                <Bar dataKey="airpollution" fill="#ffc658" />
            </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
