var React = require('react');
var {Link} = require('react-router');

var Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-pills bg-success">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="#">React Weather App</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Get Weather</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/example">Example</Link></li>
                        </ul>
                        <form className="navbar-form navbar-right">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search"/>
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

module.exports = Nav;