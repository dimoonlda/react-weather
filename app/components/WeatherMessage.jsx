var React = require('react');

var WeatherMessage = React.createClass({
    render: function () {
        return (
            <div>
                <span>It's {this.props.temp} in {this.props.location}</span>
            </div>
        );
    }
});

module.exports = WeatherMessage;