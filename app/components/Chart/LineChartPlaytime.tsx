import React from 'react'
import {
    LineChart,
    MarkPlot,
    lineElementClasses,
    markElementClasses,
} from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

import dayjs from 'dayjs';

interface Data {
    [date: string]: {
        playtime: number;
    };
}

const data: Data = {
    "01-05-2024": {
        "playtime": 0
      },
      "02-05-2024": {
        "playtime": 0
      },
      "03-05-2024": {
        "playtime": 0
      },
      "04-05-2024": {
        "playtime": 635
      },
      "05-05-2024": {
        "playtime": 990
      },
      "06-05-2024": {
        "playtime": 1324
      },
      "07-05-2024": {
        "playtime": 1250
      },
      "08-05-2024": {
        "playtime": 545
      },
      "09-05-2024": {
        "playtime": 0
      },
      "10-05-2024": {
        "playtime": 0
      },
      "11-05-2024": {
        "playtime": 0
      },
      "12-05-2024": {
        "playtime": 0
      },
      "13-05-2024": {
        "playtime": 0
      }
};

const dates = Object.keys(data).map(dateString => {
    const [day, month, year] = dateString.split("-");
    return new Date(`${year}-${month}-${day}`);
});
const playtimes = Object.values(data).map(entry => entry.playtime);

const valueFormatter = (value: number | null) => `${value} min`;

const LineChartPlaytime = () => {
    return (
        <LineChart
            xAxis={[
                {
                    label: "",
                    data: dates,
                    tickInterval: dates,
                    scaleType: "time",
                    valueFormatter: (date) => dayjs(date).format("MMM D"),
                },
            ]}
            yAxis={[{ label: "Czas gry (min)" }]}
            series={[
                {
                    label: "",
                    valueFormatter,
                    data: playtimes,
                    area: true,
                    color: '#2328388e',
                },
            ]}
            height={250}
            sx={{
                [`.MuiBarElement-series-l_id`]: {
                    stroke: '#8884d8',
                },
                [`.${axisClasses.root}`]: {
                    [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                        stroke: '#8884d8',
                        strokeWidth: 3,
                    },
                    [`.${axisClasses.tickLabel}`]: {
                        fill: '#8884d8',
                    },
                },
                [`& .${lineElementClasses.root}`]: {
                    stroke: '#8884d8',
                    strokeWidth: 2,
                },
            }}
            slotProps={{ legend: { hidden: true } }}
        />
    );
};

export default LineChartPlaytime;