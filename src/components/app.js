import React from "react";
import { Component } from "react";

import SearchBar from "../containers/searchBar";

const API_KEY = 'ca9517a69a3a05af3b4eafe3c9e710db';
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&cnt=5&mode=json&q=belfast`;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

class App extends Component {
    render() {
        return (
            <div>
                <SearchBar 
                url = {ROOT_URL}
                />
            </div>
        );
    }
}

export default App;