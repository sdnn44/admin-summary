import React from 'react'
import {
    LineChart,
    lineElementClasses,
} from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

import dayjs from 'dayjs';
import { useGlobalState } from '@/app/context/globalContextProvider';

const valueFormatter = (value: number | null) => `${value} min`;

const LineChartPlaytime = () => {
    
    const { adminPlaytime } = useGlobalState();

    console.log(adminPlaytime);

    const dates = adminPlaytime.map(item => {
        const [day, month, year] = item.id.split("-");
        return new Date(`${year}-${month}-${day}`);
    });
    
    console.log(dates);

    const playtimes = adminPlaytime.map(entry => entry.playtime);

    console.log(playtimes);

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
                [`.MuiChartsTooltip-root`]:{
                    bgcolor: '#000',
                    color: '#d14153'
                },
            }}
            slotProps={{ legend: { hidden: true } }}
        />
    );
};

export default LineChartPlaytime;