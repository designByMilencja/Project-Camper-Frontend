import React from "react";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js/auto";
import "./BarChart.scss";

interface Props {
    chartData: {
        labels: string[];
        datasets: {
            label: string,
            data: number[],
            backgroundColor: string[],
            borderColor: string[],
            borderWidth: number,
        }[]
    }
}

ChartJS.register(ArcElement, Tooltip, Legend);
export const BarChart = (props: Props) => {
    return <div className="chart"><Bar data={props.chartData}/></div>
}
