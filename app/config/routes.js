import React from 'react';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';
import ResultsContainer from '../containers/ResultsContainer';

const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path='playerOne' header='Player One' component={PromptContainer}></Route>
            <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer}></Route>
            <Route path='battle' component={ConfirmBattleContainer}></Route>
            <Route path='results' component={ResultsContainer}></Route>
        </Route>
    </Router>
);

export default routes;