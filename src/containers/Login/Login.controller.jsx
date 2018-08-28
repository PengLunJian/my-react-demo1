import React, {Component} from 'react';
import {LoginTemplate} from './Login.template';
import './Login.style.less';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
    }

    componentDidMount() {

    };

    handlerLogin = () => {
        const {history} = this.props;
        history.push({
            pathname: '/Main'
        });
    };

    render() {
        return LoginTemplate(this);
    }
}