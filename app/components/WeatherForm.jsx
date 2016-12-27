var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (event) {
        event.preventDefault();
        var location = this.refs.location.value;
        if (location) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input ref="location" type="text" placeholder="Enter city name"/>
                    </div>
                    <div>
                        <button>Get Weather</button>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;