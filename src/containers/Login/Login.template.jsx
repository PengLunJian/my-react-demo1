import React from 'react';
export const LoginTemplate = (_this) => {
    return (
        <div className="login">
            <div className="content">
                <div className="header">
                    <i className="author">PENG</i>
                    <h1 className="title">Backstage Management System</h1>
                </div>
                <div className="body">
                    <div className="form-group">
                        <label className="form-label" htmlFor="username"/>
                        <input className="form-input" id="username" placeholder="please enter your username"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="password"/>
                        <input className="form-input" id="password" placeholder="please enter your password"/>
                    </div>
                    <div className="form-group">
                        <input className="form-checkbox" type="checkbox" id="remember"/>
                        <label className="form-label" htmlFor="remember">Remember the password ?</label>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn-login" onClick={_this.handlerLogin}>Login</button>
                </div>
            </div>
        </div>)
};
