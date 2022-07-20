import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            weatherData: {},
        };
    }

    handleInputChange(event) {
        this.setState({searchText: event.target.value});
        //if the input box is empty clear previous data
        if(event.target.value === "") {
            this.setState({weatherData: {}});
        }
    }

    handleSubmit(event) {
        if(this.state.searchText !== "") {
            const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${this.state.searchText}&key=${process.env.REACT_APP_API_KEY}&days=5`;
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                this.setState({weatherData: data.data});
            })
            .catch((error) => console.log(error));
        }
        event.preventDefault();
    }

    render() {
        const result = [];
        result.push(
            <LocationForm key={"form"}
                searchText={this.state.searchText}
                onChange={(event) => this.handleInputChange(event)}
                onSubmit={(event) => this.handleSubmit(event)}
            />
        )

        if(this.state.weatherData.length > 0){
            result.push(
                <WeatherTable key={"table"} weatherData={this.state.weatherData} />
            )
        }
        
        return (
            <div id="app">
                {result}
            </div>
        )
    }
}

function LocationForm(props) {
    return(
        <div id="searchForm">
            <form onSubmit={props.onSubmit}>
                <label id="searchLabel">
                    Location:
                    <input
                        type="text"
                        value={props.searchText}
                        onChange={props.onChange}
                        id="inputBox"
                        placeholder="Enter city name..."
                        />
                </label>
                <button type="submit" id="submitButton">Search</button>
            </form>
        </div>
    )
}

function WeatherTable(props) {
    return (
        <div id="weatherTable">
            <WeatherRow weatherData={props.weatherData} />
        </div>
    )
}

function WeatherRow(props) {
    const weatherCells = props.weatherData.map((weather, index) => {
        return (
            <WeatherCell key={index} dayData={weather} />
        )
    })
    return (
        <div className="weatherRow">
            {weatherCells}
        </div>
    )
}

function WeatherCell(props) {
    return (
        <div className="weatherCell">
            <div className="weatherIcon">
            </div>
            <div className="date">
                {props.dayData.datetime}
            </div>
            <div className="temperature">
                {props.dayData.temp + "°C"}
            </div>
        </div>        
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WeatherApp />);