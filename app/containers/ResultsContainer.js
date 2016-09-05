import React, {
    Component,
    PropTypes,
} from 'react';

import githubHelpers from '../utils/githubHelpers';

import Results from '../components/Results';


class ResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            scores: []
        };
    }

    componentDidMount() {
        githubHelpers.battle(this.props.location.state.playersInfo)
            .then((scores) => {
                this.setState({
                    isLoading: false,
                    scores,
                });
            });
    }

    render() {
        return (
            <Results {...this.state}
                     playersInfo={this.props.location.state.playersInfo} />
        );
    }
}

export default ResultsContainer;
