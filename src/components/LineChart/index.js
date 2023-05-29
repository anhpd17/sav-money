import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";

export default function LineChart() {
    const options = {
        chart: {
            type: "column",
            height: 256 + "px",
        },
        xAxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        },
        title: {
            text: "Your Stats",
        },
        series: [
            {
                name: "Income",
                data: [1, 2, 1, 4, 3, 6],
            },
            {
                name: "Expenses",
                data: [1, 1, 4, 6, 7, 3],
            },
        ],
    };
    return (
        <div className="w-full h-full lg:w-2/5  mt-10 lg:mt-0">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}
