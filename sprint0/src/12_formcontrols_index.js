import React from 'react';
import ReactDOM from 'react-dom';


class One extends React.Component {
    constructor(props) {
        super(props)    
        this.state = {
            dataval: "kundavai"
        }
    }
    changeme =(e) => {
        this.setState({dataval: e.target.value})
    }
    render() {
        return (
            <form>
                <input type = "text" value = {this.state.dataval} onChange = {this.changeme}/>
                <h1>{this.state.dataval}</h1>
            </form>
        )
    }
}
export default One;

ReactDOM.render(<One/>, document.getElementById("root"));


// form fields to access it to add lot more validation etc. 
// 1. capture the form value and set in state and display in h1. this is real time data manipulation 