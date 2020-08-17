import React from 'react';
import ReactDOM from 'react-dom';


class NameComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>how are u {this.props.name} and age is {this.props.age} </div>;
    }
}
export default NameComponent;

function Name1Component(props) {
    return <div>how are u {props.name} and age is {props.age} </div>;
}

// ReactDOM.render(<NameComponent name = "balamurugan" age = "22" />, document.getElementById("root"));
ReactDOM.render(<Name1Component name = "balamurugan" age = "22" />, document.getElementById("root"));



// Passing values to components and use them using "PROPS"

// you can pass single component props or multiple component props 
// you can render through class or functions for class props is always available and this.props should be used  and in function should be like props as parameter and avoid this 





