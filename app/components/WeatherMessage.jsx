var React = require('react');

var WeatherMessage = React.createClass({
    render: function () {
        return (
            <div>
                <span id="weatherResult" hidden="hidden">Weather</span>
            </div>
        );
    }
});

module.exports = WeatherMessage;