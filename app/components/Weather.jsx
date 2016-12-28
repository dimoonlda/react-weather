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
        function renderMessage(){
            if (isLoading) {
                return (
                    <div className="col-md-12 text-center">
                        <h3>Fetching weather...</h3>
                    </div>);
            } if ( typeof temp === 'number' && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }
        return (
            <div>
                <div className="col-md-12 text-center">
                    <h1>Get Weather</h1>
                </div>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;