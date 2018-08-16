import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './reset.less';

import Login from './containers/Login/Login';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return (
            <Login/>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)

// (function HelloWord() {
//     console.log('HelloWorld');
// })();
//
// Array.prototype.distinct = function () {
//     var tempArray = [];
//     for (var i = 0; i < this.length; i++) {
//         if (tempArray.indexOf(this[i]) === -1) {
//             tempArray.push(this[i]);
//         }
//     }
//     return tempArray;
// };
//
// var arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
// console.log(arr.distinct());