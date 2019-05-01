import React, { Component } from "react";
import axios from "axios";

import ForeCastDetails from "./foreCastDetails";

class SearchBar extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            searchKey : "",
            displayWeatherData : false,
            weatherData : null,
            errorText : null
        }
        this.onInputChange = (event)=>{
            console.log("event.target.value", event.target.value);
            this.setState({
                searchKey : event.target.value
            })
        }
    }

    onFormSubmit=(event) => {
        event.preventDefault();
        let city = this.state.searchKey;
        const count = 5;
        const mode = "json";
        this.setState({
            displayWeatherData : true
        })
        let updated_url = this.props.url + `&cnt=5&mode=json&q=${city}`;
        console.log("this.state.searchKey", this.state.searchKey);
        if (this.state.searchKey == undefined || this.state.searchKey == "") {
            console.log("called from if");
            this.setState({
                errorText : "Please enter a valid city to proceed...!",
                weatherData : ""
            })
        }
        else {
            console.log("called from else");
            axios.get(updated_url).then((response) => {
                console.log("response in axios", response);
                if(response.data.cod == "200") {
                    console.log("success");
                    this.setState({
                        weatherData : response.data,
                        errorText : ""
                    });
                }
                else {
                    console.log("error");
                    this.setState({
                        errorText : "Please enter a valid city to proceed...!",
                        weatherData : ""
                    }) 
                }
            })
            .catch((error) => {
                this.setState({
                    errorText : "Please enter a valid city to proceed...!",
                    weatherData : ""
                });
            })
        }
        

    }
    

    render() {
        const {
            searchKey,
            displayWeatherData,
            weatherData,
            errorText
        } = this.state;

        return(
            <div>
                <form onSubmit = {this.onFormSubmit} className = "searchForm">
                <label>Get 5 Days Forecast for city of your choice....!</label><br/>
                <input type ="text"
                id = "searchText"
                placeholder = "Enter city name"
                value = {searchKey}
                onChange = {this.onInputChange}
                >
                </input>
                <button 
                type ="submit"
                id ="searchButton">Search</button>
                </form>
                {displayWeatherData && <ForeCastDetails 
                weatherData = {weatherData}
                errorText = {errorText}
                /> }
            </div>          
        );
    }
}

export default SearchBar;