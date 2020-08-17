import React from 'react';
import ReactDOM from 'react-dom';
import UpdatedComponent from './HOC';

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
    return <div><button onKeyPress = {this.clickme}>Key up Counter  {this.state.count}</button>
    <h1>{this.props.name}  from key up counter</h1></div>;
    }
}

export default UpdatedComponent(KeyUpCounter);
