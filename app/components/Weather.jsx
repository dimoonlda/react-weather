var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMapService = require('openWeatherMapService');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;
        this.setState({
            isLoading: true
        });
        openWeatherMapService.getTemp(location).then(temp => {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }).catch(error => {
            that.setState({
                isLoading: false
            });
            alert(error);
        });
    },
    render: function () {
        var {isLoading, temp, location} = this.state;
        console.log(isLoading, temp, location);
        function renderMessage(){
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            } if ( typeof temp === 'number' && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }
        return (
            <div>
                <div>
                    <h1>Get Weather</h1>
                </div>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;