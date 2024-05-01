import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
    width: 500,
    height: 400,
};

const dataset = [
    {
        label: 'London',
        value: 59,
    },
    {
        label: 'Paris',
        value: 57,
    },
    {
        label: 'New York',
        value: 86,
    },
    {
        label: 'Seoul',
        value: 21,
    },
];

const valueFormatter = (value: number | null) => `${value}mm`;

export default function HorizontalBarChart() {
    return (
        <BarChart
            dataset={dataset}
            series={[{ dataKey: 'value', valueFormatter }]}
            layout="horizontal"
            {...chartSetting}
        />
    );
}
