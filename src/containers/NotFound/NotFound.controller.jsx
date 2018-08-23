import React, {Component} from 'react';
import './NotFound.style.less';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }

    componentDidMount() {

    };

    handlerLogin() {
        console.log(this);
    };

    render() {
        return (
            <div className="login">
                <div className="content">
                    <div className="header">
                        <h1 className="title">Backstage Management System</h1>
                    </div>
                    <div className="body">
                        <div className="form-group">
                            <label className="form-label" for="username"></label>
                            <input className="form-input" id="username" placeholder="please enter your username"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" for="password"></label>
                            <input className="form-input" id="password" placeholder="please enter your password"/>
                        </div>
                        <div className="form-group">
                            <input className="form-checkbox" type="checkbox" id="remember"/>
                            <label className="form-label" for="remember">Remember the password ?</label>
                        </div>
                    </div>
                    <div className="footer">
                        <button className="btn-login" onClick={this.handlerLogin}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}