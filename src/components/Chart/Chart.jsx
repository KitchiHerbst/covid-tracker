import React, {useState, useEffect} from 'react';
import { Line, Bar } from 'react-chartjs-2'

import {fetchDailyData} from '../../api'
import styles from './Chart.module.css'

function Chart(props) {
    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
        const fetchedDailyData = async () => {
            setDailyData(await fetchDailyData())
        }

        fetchedDailyData()
    },)

    const lineChart = (
        <Line 
        data={{
            labels: '',
            datasets: [{}, {}]
        }}

        />
    )

    return (
        <div>
            Chart
        </div>
    );
}

export default Chart;