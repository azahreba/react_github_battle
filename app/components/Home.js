import React from 'react';

import {Link} from 'react-router';

import styles from '../styles';
const {transparentBg} = styles;

class Home extends React.Component {
    render() {
        return (
            <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
                <h1>Github Battle</h1>
                <p className="lead">
                    Fancy motto
                </p>

                <Link to="/playerOne">
                    <button className="btn btn-lg btn-success">Get Started</button>
                </Link>
            </div>
        )
    }
}

export default Home;