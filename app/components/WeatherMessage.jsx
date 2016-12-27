var React = require('react');

var WeatherMessage = (props) => {
    var {temp, location} = props;
    return (
        <div>
            <span>It's {temp} in {location}</span>
        </div>
    );
};

module.exports = WeatherMessage;