var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <span>It's {temp} in {location}</span>
        </div>
    );
};

module.exports = WeatherMessage;