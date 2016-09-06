import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';

function ConfirmBattle(props) {
  return (
      props.isLoading
          ? <p>Loading...</p>
          : <MainContainer>
              <h1>Confirm Players</h1>
              <div className="col-md-6 col-sm-offset2">
                <UserDetailsWrapper header="Player One">
                  <UserDetails info={props.playersInfo[0]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Player Two">
                  <UserDetails info={props.playersInfo[1]} />
                </UserDetailsWrapper>
              </div>
              <div className="col-md-6 col-sm-offset2">
                  <div className="col-sm-12">
                      <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiate}>Initiate battle</button>
                  </div>
                  <div className="col-sm-12">
                      <br/>
                      <Link to='/playerOne'>
                          <button type="button" className="btn btn-lg btn-danger">Reselect players</button>
                      </Link>
                  </div>
              </div>
          </MainContainer>
  );
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiate: PropTypes.func.isRequired
};

export default ConfirmBattle;