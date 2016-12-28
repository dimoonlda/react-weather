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
            <div className="col-sm-4 col-sm-offset-4">
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <input className="form-control" ref="location" type="text" placeholder="Enter city name"/>
                    </div>
                    <div>
                        <button className="btn btn-default btn-block">Get Weather</button>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;