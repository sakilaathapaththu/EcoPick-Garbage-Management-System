import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { BarChart, axisClasses } from '@mui/x-charts';
import axios from 'axios'; // Import Axios for HTTP requests
import { API_BASE_URL } from "../../utils/constants";

export default function Chart() {
    const theme = useTheme();
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchFillingDetails = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/Api/Fillingdetails/filling-details`);
                const fillingDetails = response.data;
                const latestRecords = getLatestRecords(fillingDetails);
                setChartData(latestRecords);
            } catch (error) {
                console.error('Error fetching filling details:', error);
            }
        };

        fetchFillingDetails();
    }, []);

    const getLatestRecords = (fillingDetails) => {
        const latestRecords = {};

        fillingDetails.forEach(detail => {
            const { date, totalCapacity, emptyCapacity, filledCapacity } = detail;
            const existingRecord = latestRecords[date];

            if (!existingRecord || existingRecord.date < date) {
                latestRecords[date] = {
                    date,
                    filledCapacity: totalCapacity - emptyCapacity // Calculate filled capacity
                };
            }
        });

        return Object.values(latestRecords);
    };

    return (
        <React.Fragment>
            <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
                <BarChart
                    dataset={chartData}
                    margin={{
                        top: 16,
                        right: 20,
                        left: 70,
                        bottom: 40,
                    }}
                    xAxis={[
                        {
                            label: 'Date',
                            scaleType: 'band', // Set scaleType to 'band'
                            dataKey: 'date',
                            tickNumber: 2,
                            tickLabelStyle: theme.typography.body2,
                        },
                    ]}
                    yAxis={[
                        {
                            label: 'Filled Capacity',
                            labelStyle: {
                                ...theme.typography.body1,
                                fill: theme.palette.text.primary,
                            },
                            tickLabelStyle: theme.typography.body2,
                            max: 2500,
                            tickNumber: 3,
                        },
                    ]}
                    series={[
                        {
                            dataKey: 'filledCapacity',
                            showMark: false,
                            color: theme.palette.primary.light,
                        },
                    ]}
                    sx={{
                        [`.${axisClasses.root} line`]: { stroke: theme.palette.text.secondary },
                        [`.${axisClasses.root} text`]: { fill: theme.palette.text.secondary },
                        [`& .${axisClasses.left} .${axisClasses.label}`]: {
                            transform: 'translateX(-25px)',
                        },
                    }}
                />
            </div>
        </React.Fragment>
    );
}

