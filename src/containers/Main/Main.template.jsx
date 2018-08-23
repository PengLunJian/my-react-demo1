import React, {Component} from 'react';
import './Main.style.less';

export default class Main extends Component {
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
                <div className="LoginContent">
                    <div className="LoginHeader">
                        <h1 className="LoginTitle">Backstage Management System</h1>
                    </div>
                    <div className="LoginBody">

                    </div>
                    <div className="LoginFooter"></div>
                </div>
            </div>
        );
    }
}