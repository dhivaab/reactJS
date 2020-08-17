import React from 'react';
import ReactDOM from 'react-dom';


class One extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return <div><button onClick= {this.submit}>Hello</button></div>;
    }
    submit() {
        alert("hi");
    }
}
export default One;


ReactDOM.render(<One/>, document.getElementById("root"));


// event handling using React

// add a function and call them using onClick event activity 

