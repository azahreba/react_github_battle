import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import styles from '../styles';
const {transparentBg} = styles;

import UserDetails from './UserDetails';

function ConfirmBattle(props) {
  return (
      props.isLoading
          ? <p>Loading...</p>
          : <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
          <h1>Confirm Players</h1>
          <div className="col-md-6 col-sm-offset2">
              <div className="col-sm-6">
                  <p className="lead">Player 1</p>
                  <UserDetails info={props.playersInfo[0]} />
              </div>
              <div className="col-sm-6">
                  <p className="lead">Player 2</p>
                  <UserDetails info={props.playersInfo[1]} />
              </div>
          </div>
          <div className="col-md-6">
              <div className="col-sm-12">
                  <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiate}>Initiate battle</button>
              </div>
              <div className="col-sm-12">
                  <Link to='/playerOne'>
                      <button type="button" className="btn btn-lg btn-danger">Reselect players</button>
                  </Link>
              </div>
          </div>
      </div>
  );
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiate: PropTypes.func.isRequired
};

export default ConfirmBattle;