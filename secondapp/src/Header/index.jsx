import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
    render() {
        return (
            
            <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Cognizant </a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><Link to ={"/login"}> Banking & Finance</Link></li>
                <li><Link to ={"/login"}> Healthcare</Link></li>
                <li><Link to ={"/login"}> Insurance</Link></li>
              </ul>
            </div>
          </nav>
        );
    }
}

export default Header;