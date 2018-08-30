import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    dispatchGetUserName,
    dispatchGetUserLogo
} from '../../redux/reducers/login';
import {LoginTemplate} from './Login.template';
import './Login.style.less';

class LoginInfo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    };

    handlerLogin = () => {
        const data = {isLogin: true};
        this.props.dispatchGetUserName(data);

        const {history} = this.props;
        history.push({
            pathname: '/Main'
        });
    };

    render() {
        return LoginTemplate(this);
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        dispatchGetUserName,
        dispatchGetUserLogo
    }
};

const Login = connect(
    mapStateToProps
)(LoginInfo);

export default Login;