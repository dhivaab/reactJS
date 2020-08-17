import React from 'react';
import ReactDOM from 'react-dom';

class One extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
    }
    changeme =() => {
        if (this.state.visible) {
        this.setState({visible: false});
        } else {
            this.setState({visible: true});

        }
    }
    render() {
        return <div>
            Welcome balamurugan 
            {this.state.visible? "I am true and visible": "I am false and invisble"}
            <button onClick = {this.changeme}>change me</button>
        </div>
    }
}
export default One;

ReactDOM.render(<One></One>, document.getElementById("root"));



// conditional rendering using ternary operator 

// a==true ? 1:2
