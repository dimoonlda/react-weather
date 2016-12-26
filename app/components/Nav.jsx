var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
   render: function () {
       return (
           <div>
               <Link to="/">Get Weather</Link>
               <Link to="/about">About</Link>
               <Link to="/example">Example</Link>
           </div>
       )
   }
});

module.exports = Nav;