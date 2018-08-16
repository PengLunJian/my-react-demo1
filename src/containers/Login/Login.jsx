import React, {Component} from 'react';
import './Login.less';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="Login">
                <h1> Hello, world! </h1>
            </div>
        );
    }
}