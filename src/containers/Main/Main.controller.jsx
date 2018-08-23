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
            <div className="main">
                <div className="side">Side</div>
                <div className="body">
                    <div className="header">Header</div>
                    <div className="content">Content</div>
                </div>
            </div>
        );
    }
}