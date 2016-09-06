import React, {
    PropTypes
} from 'react';
import {Link} from 'react-router';

import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import MainContainer from './MainContainer';

const StartOver = () => {
    return (
        <div className="col-sm-12">
            <Link to="/playerOne">
                <button type="button" className="btn btn-lg btn-danger">
                    Start Over
                </button>
            </Link>
        </div>
    );
};

const Results = (props) => {
    const [score1, score2] = props.scores;

    const winningIndex = score1 > score2 ? 0 : 1,
        loosingIndex = winningIndex ? 0 : 1;

    if (props.isLoading) {
        return (
            <div className="jumbotron col-sm-12 text-center">
                <h1>Loading...</h1>
            </div>
        );
    }

    if (score1 === score2) {
        return (
            <div className="jumbotron col-sm-12 text-center">
                <h1>It's a tie!</h1>
                <StartOver />
            </div>
        );
    }

    return (
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails score={props.scores[winningIndex]}
                                 info={props.playersInfo[winningIndex]}
                    /></UserDetailsWrapper>
                <UserDetailsWrapper header="Looser">
                    <UserDetails score={props.scores[loosingIndex]}
                                 info={props.playersInfo[loosingIndex]}
                    /></UserDetailsWrapper>
            </div>
            <StartOver />
        </MainContainer>
    );
};

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};

export default Results;
