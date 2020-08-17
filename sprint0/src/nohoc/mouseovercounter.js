import React from 'react';
import ReactDOM from 'react-dom';

class MouseHoverCounter extends React.Component {
 
    
    render() {
    return <h2 onMouseOver = {this.clickme}>Mouse Hover Counter  {this.state.count}</h2>;
    }
}

export default MouseHoverCounter;