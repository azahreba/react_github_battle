import React, {
    PropTypes,
} from 'react';

import styles from '../styles';
const {transparentBg} = styles;

const MainContainer = (props) => {
    return (
        <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
            {props.children}
        </div>
    );
};

export default MainContainer;
