import React, { PureComponent } from 'react';
import {PieChart, Pie, ResponsiveContainer, Cell, Tooltip} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const data = [
    { name: 'small', value: 4 },
    { name: 'big', value: 12 },
    { name: 'medium', value: 6 },

];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
                                   cx, cy, midAngle, innerRadius, outerRadius, percent, index,
                               }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default class Taille extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

    render() {
        return (
            <div style={{ width: '100%', height: 400}}>
                <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={data}
                    //cx={150}
                    //cy={150}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Tooltip />
            </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
