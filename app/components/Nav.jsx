var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
   onSearch: function (event) {
       event.preventDefault();
       var location = this.refs.location.value;
       if (location) {
           this.refs.location.value = '';
           var encodedLocation = encodeURIComponent(location);
           window.location.hash = '#/?location=' + encodedLocation;
       }
   },
   render: function () {
       return (
           <div className="top-bar">
               <div className="top-bar-left">
                   <ul className="menu">
                       <li className="menu-text">React Weather App</li>
                       <li>
                           <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                       </li>
                       <li>
                           <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                       </li>
                       <li>
                           <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                       </li>
                   </ul>
               </div>
               <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input ref="location" type="search" placeholder="Search weather in city"/>
                            </li>
                            <li>
                                <button className="button" type="submit">Get Weather</button>
                            </li>
                        </ul>
                    </form>
               </div>
           </div>
       );
   }
});

module.exports = Nav;