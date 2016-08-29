import React from 'react';
import ReactDOM from 'react-dom';

import routes from './config/routes';

import Raven from 'raven-js';

const sentryKey = 'cce84dec9d004d6fa4e007d880427288',
    sentryApp = '94337',
    sentryUrl = 'https://' +
        sentryKey +
        '@app.getsentry.com/' +
        sentryApp;

const _APP_INFO = {
    name: 'GithubBattle',
    branch: 'video4',
    version: '1.0'
};

Raven.config(sentryUrl ,{
    release: _APP_INFO.version,
    tags: {
        branch: _APP_INFO.branch
    }
}).install();

ReactDOM.render(routes, document.getElementById('app'));