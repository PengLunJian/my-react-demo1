import React, {Component} from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import Login from '../containers/Login/Login.controller';
import Main from '../containers/Main/Main.controller';
import NotFound from '../containers/NotFound/NotFound.controller';

export default class RouteMap extends Component {
    updateHandle = () => {
        console.log('每次router变化后触发');
    };

    render() {
        const {history} = this.props;
        return (
            <Router history={history} onUpdate={this.updateHandle}>
                <Route path='/' component={Login}/>
                <Route path='/Login' component={Login}/>
                <Route path='/Main' component={Main}/>
                <Route path='*' component={NotFound}/>
            </Router>
        )
    }
};