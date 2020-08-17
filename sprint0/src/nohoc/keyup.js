import React from 'react';
import ReactDOM from 'react-dom';

class KeyUpCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    clickme =() => {
        this.setState({count:this.state.count + 1});
    }
    
    render() {
    return <button onKeyPress = {this.clickme}>Key up Counter  {this.state.count}</button>;
    }
}

export default KeyUpCounter;
