var React = require('react');

var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Error!'
        }
    },
    componentDidMount: function () {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    render: function () {
        var {title, message} = this.props;
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h3>{title}</h3>
                <p>{message}</p>
                <p>
                    <button className="button hollow text-center" data-close="">Ok</button>
                </p>
            </div>
        )
    }
});

module.exports = ErrorModal;