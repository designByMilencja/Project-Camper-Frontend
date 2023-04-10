import React from "react";
import img from "../../../../img/home/bar-chart.png"
import './ChartView.scss'

export const ChartView = () => {
return <>
    <div className="chartPicture">
        <img src={img} alt="Wykresy słupkowe zademonstrowane jako model" />
    </div>
    </>
}
