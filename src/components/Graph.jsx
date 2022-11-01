import React from 'react';
import { Line } from 'react-chartjs-2';

import{
    Chart as ChartJS,
    LineElement, 
    CategoryScale,
    PointElement,
    LinearScale
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function Graph(){

    const data = {
        labels: ["Categoria 1", "Categoria 2", "Categoria 3", "Categoria 4", "Categoria 5"],
        datasets: [{
            data: [8, 3, 6, 2, 4],
            backgroundColor: 'transparent',
            borderColor: '#f26c6d',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4,
            tension: 0.5
        }]
    };
    const options = {
        plugins: {
            legend: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 1,
                max: 10,
                ticks: {
                    stepSize: 2, 
                    callback: (value) => value + 'Uds'
                },
                grid: {
                    borderDash: [10]
                }
            }
           
           
        }
    };

        return(
            <div style = {{width: '500px', height: '500px', marginLeft: '20px'}}>
                <Line data={data} options={options}></Line>
            </div>
        );
}

export default Graph