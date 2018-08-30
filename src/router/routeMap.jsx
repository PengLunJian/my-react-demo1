import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route} from 'react-router';
import store from '../redux/store/store';

import Login from '../containers/Login/Login.controller';
import Main from '../containers/Main/Main.controller';
import NotFound from '../containers/NotFound/NotFound.controller';

export default class RouteMap extends Component {
    constructor(props) {
        super(props);

        this.routes = [
            {
                path: '/',
                component: Login
            },
            {
                path: '/Login',
                component: Login
            },
            {
                path: '/Main',
                component: Main
            },
            {
                path: '*',
                component: NotFound
            }
        ];
    }


    updateHandle = () => {
        console.log('每次router变化后触发');
    };

    render() {
        const {history} = this.props;
        return (
            <Provider store={store}>
                <Router history={history} onUpdate={this.updateHandle}>
                    {
                        this.routes.map((item) => {
                            return (
                                <Route path={item.path}
                                       component={item.component}/>
                            );
                        })
                    }
                </Router>
            </Provider>
        )
    }
};