import React from 'react';
import { Cards, Charts, CountryPicker } from './Components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImg from './images/covid.png';


class App extends React.Component {
	 //created an object  to  call data
	 state = {
	  data : {},
	  country: ''
	 }
     async componentDidMount () {
		const fetchedData = await fetchData();

		this.setState({ data: fetchedData });
	}
	handleCountryChange = async (country) => {
	const fetchedData = await fetchData(country);

	this.setState({ data: fetchedData, country: country});
	}
	render()  {
	const { data, country } = this.state;  
		return(
			<div className={styles.container}> 
			<img  className= {styles.img}src={coronaImg} alt="COVID-19"/>
			<Cards data ={data} />
			<CountryPicker handleCountryChange={this.handleCountryChange} />
			<Charts data={data} country={country}/> 
			</div>
		)
	}
}
export default App;