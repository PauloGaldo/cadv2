import './navbar-operator.scss';

import * as React from 'react';
import { Link } from 'react-router-dom';

export class NavbarOperator extends React.Component {
  render() {
    return (
      <nav className="navbar-operator">
        <div className="nav-wrapper">
          <div className="menu-section">
            <a className="waves-effect waves btn-flat">
              <i className="material-icons">menu</i>
            </a>
            <span className="call-origin"> 911 - LEON</span>
          </div>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to={`/home`}>
                <i className="material-icons">search</i>
              </Link>
            </li>
            <li>
              <a href="badges.html">
                <i className="material-icons">view_module</i>
              </a>
            </li>
            <li>
              <a href="collapsible.html">
                <i className="material-icons">refresh</i>
              </a>
            </li>
            <li>
              <a href="mobile.html">
                <i className="material-icons">more_vert</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarOperator;
