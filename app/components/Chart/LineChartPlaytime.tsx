import React from 'react'
import {
    LineChart,
    lineElementClasses,
} from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

import dayjs from 'dayjs';
import { Data } from '@/app/types/PlaytimeType';

const data: Data = {
    "01-05-2024": {
        "playtime": 7
    },
    "02-05-2024": {
        "playtime": 9
    },
    "03-05-2024": {
        "playtime": 35
    },
    "04-05-2024": {
        "playtime": 0
    },
    "05-05-2024": {
        "playtime": 0
    },
    "06-05-2024": {
        "playtime": 0
    },
    "07-05-2024": {
        "playtime": 0
    },
    "08-05-2024": {
        "playtime": 0
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
const emptySeries = {
    series: [],
    margin: { top: 10, right: 10, left: 25, bottom: 25 },
    height: 150,
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