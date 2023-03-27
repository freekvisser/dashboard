import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
};

export const Graph = (props) => {
    const { history } = props;
    const labels = [];
    const values = [];

    history.map((match, index) => {
        labels.push(match.date.getDay() + "-" + (match.date.getMonth() + index));
        values.push(match.value);
    })

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: values,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    console.log(labels, values)

    return <Line options={options} data={data} />;
}