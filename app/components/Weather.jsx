var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMapService');
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
      errorMessage: undefined,
      temp: undefined,
      location: undefined
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false,
        errorMessage: undefined
      });
    }, function (error) {
      that.setState({
        isLoading: false,
        errorMessage: error,
        temp: undefined,
        location: undefined
      });
    });
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;
    if (location) {
      this.handleSearch(location);
      window.location.hash = '/#';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;
    if (location) {
      this.handleSearch(location);
      window.location.hash = '/#';
    }
  },
  render: function () {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderErrorMessage() {
      if (errorMessage != undefined){
        return (
            <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-tittle">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderErrorMessage()}
      </div>
    )
  }
});

module.exports = Weather;
