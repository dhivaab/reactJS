import React from 'react';
import ReactDOM from 'react-dom';
import UpdatedComponent from './HOC';

class ClickCounter extends React.Component {
 
    
    render() {
    return <div><button onClick = {this.clickme}>Click Counter  {this.props.count}</button> <h1>{this.props.name}  from click counter</h1></div>;
    }
}

export default UpdatedComponent(ClickCounter);