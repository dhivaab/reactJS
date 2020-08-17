import React from 'react';
import ReactDOM from 'react-dom';
import UpdatedComponent from './HOC';

class MouseHoverCounter extends React.Component {
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
    return <div><h2 onMouseOver = {this.clickme}>Mouse Hover Counter  {this.state.count}</h2>
    <h1>{this.props.name}  from mouse counter</h1>
    </div>;
    }
}

export default UpdatedComponent(MouseHoverCounter);
