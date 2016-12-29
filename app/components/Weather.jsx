var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMapService = require('openWeatherMapService');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });
        openWeatherMapService.getTemp(location).then(temp => {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }).catch(error => {
            that.setState({
                isLoading: false,
                errorMessage: error
            });
            alert(error);
        });
    },
    render: function () {
        var {isLoading, temp, location, errorMessage} = this.state;
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

        function renderError() {
            if (errorMessage) {
                return <ErrorModal message={errorMessage}/>
            }
        }

        return (
            <div>
                <div className="col-md-12 text-center">
                    <h1>Get Weather</h1>
                </div>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;