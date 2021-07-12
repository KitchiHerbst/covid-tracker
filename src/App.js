import React from 'react'

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchData } from './api';

export default class App extends React.Component {
    state={
        data: {},
        country: ''
    }

    async componentDidMount(){
        const fetchedData = await fetchData()
        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
        //fetch data
        const fetchedData = await fetchData(country)
        //set state
        this.setState({data: fetchedData})
        // this.setState({country: country})
    }

    render(){
        const {data} = this.state 
        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart />
            </div>
        )
    }
}