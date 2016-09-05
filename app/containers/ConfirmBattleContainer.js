import React, {Component, PropTypes } from 'react';

import ConfirmBattle from '../components/ConfirmBattle';

import githubHelpers from '../utils/githubHelpers';

class ConfirmBattleContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      playersInfo: []
    };
  }

  render() {
    return (
      <ConfirmBattle
          isLoading={this.state.isLoading}
          playersInfo={this.state.playersInfo}
          onInitiate={this.handleInitiateBattle.bind(this)} />
    );
  }

  componentDidMount() {
    const query = this.props.location.query;
    
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
        .then(playersInfo => {
          this.setState({
            isLoading: false,
            playersInfo
          });
        });
  }

  handleInitiateBattle() {
    this.context.router.push({
        pathname: '/results',
        state: {
          playersInfo: this.state.playersInfo
        }
    });
  }

  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired
    };
  }
}


export default ConfirmBattleContainer;