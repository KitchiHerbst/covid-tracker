import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'


function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
    if (!confirmed) {
        return 'Loading...'
    }
    console.log(lastUpdate)

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify-content='center'>
                <Grid item component={Card} className={cx(styles.card, styles.infected)} xs={12} md={3}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5' >
                            <CountUp start={0} end={confirmed.value} duration={.5} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(styles.card, styles.recovered)} xs={12} md={3}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5' >
                            <CountUp start={0} end={recovered.value} duration={.5} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(styles.card, styles.deaths)} xs={12} md={3}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5' >
                            <CountUp start={0} end={deaths.value} duration={.5} separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of Deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;