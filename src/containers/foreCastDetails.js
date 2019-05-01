import React, { Component } from "react";

class ForeCastDetails extends Component {
    
    constructor(props) {
        super(props);
    }
    render(){
        const {
            weatherData,
            errorText
        } = this.props;
        let cityDetails = weatherData && ( "Displaying weather forecast for " + weatherData.city.name);
        console.log("in foreCastDetails****", weatherData, errorText);
        return(
           <div className = "forecastData">
                <div id = "city">{cityDetails}</div>
                {weatherData && (errorText==undefined || errorText == "") &&
                    <table>
                    <tr>
                        <th>Min Temp</th>
                        <th>Max Temp</th>
                        <th>Humidity</th>
                        <th>Pressure</th>
                    </tr>
                    {weatherData && weatherData.list.length && weatherData.list.map(( listValue, index ) => {
                        return (
                            <tr key={index}>
                            <td>{listValue.main.temp_min}</td>
                            <td>{listValue.main.temp_max}</td>
                            <td>{listValue.main.humidity}</td>
                            <td>{listValue.main.pressure}</td>
                            </tr>
                        );
                        })}
                    </table>
                }
                {errorText != undefined &&
                   <div id = "errormsg">{errorText} </div>
                }
           </div>
        );
    }
}

export default ForeCastDetails;