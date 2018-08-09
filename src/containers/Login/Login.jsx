import React, {Component} from 'react';
import ReactDom from 'react-dom';

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
            <h1> Hello, world! </h1>
        );
    }
}

ReactDom.render(
    <Login />,
    document.getElementById('root')
)