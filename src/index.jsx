import React from 'react';
import ReactDom from 'react-dom';
import {hashHistory} from 'react-router';
import RouteMap from './router/routeMap';

import './reset.less';

ReactDom.render(
    <RouteMap history={hashHistory}/>,
    document.getElementById('root')
);