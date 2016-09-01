import React, {Component, PropTypes } from 'react';

import ConfirmBattle from '../components/ConfirmBattle';

import githubhelpers from '../utils/githubHelpers';

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
          playersInfo={this.state.playersInfo} />
    );
  }

  componentDidMount() {
    const query = this.props.location.query;
    //Fetch info from github
  }

  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired
    };
  }
}


export default ConfirmBattleContainer;