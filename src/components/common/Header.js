import React, { PropTypes } from 'react';
import { Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <ul className="nav nav-tabs">
            <li role="presentation">
                <IndexLink to="/" activeClassName="active">Super Heroes</IndexLink>
            </li>
            <li role="presentation" activeClassName="active">
                <Link to="/about" activeClassName="active">About</Link>
            </li>
            <li className="pull-right">
                <a href="https://github.com/billyafernandez/ReactReduxDemo" target="_blank">Github</a>
            </li>            
        </ul>
    );
};

export default Header;
