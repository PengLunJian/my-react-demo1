import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import store from '../redux/store/store';

import Login from '../containers/Login/Login.controller';
import Main from '../containers/Main/Main.controller';
import NotFound from '../containers/NotFound/NotFound.controller';

export default class RouteMap extends Component {
    constructor(props) {
        super(props);
    }

    updateHandle = () => {
        console.log('每次router变化后触发');
    };

    render() {
        const {history} = this.props;
        return (
            <Provider store={store}>
                <Router history={history} onUpdate={this.updateHandle}>
                    <Route path='/' component={Login}/>
                    <Route path='/Login' component={Login}/>
                    <Route path='/Main' component={Main}/>
                    <Route path='*' component={NotFound}/>
                </Router>
            </Provider>
        )
    }
};