import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to="/">DASHBOARD</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#"> <Link to="/home">HOME</Link></a>
                            <a className="nav-item nav-link disabled" href="#">Disabled</a>
                        </div>
                        <ul  className="navbar-nav navbar-right">
                            <a className="nav-item nav-link" href="#"> <Link to="/auth">LOGIN</Link></a>
                        </ul>
                </div>
            </nav>

        );
    }
}

export default Header;