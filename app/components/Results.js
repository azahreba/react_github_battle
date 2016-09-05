import React, {
    PropTypes,
} from 'react';

const Results = (props) => {
    return (
        <pre>{JSON.stringify(props, 2, ' ')}</pre>
    );
};

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};

export default Results;
