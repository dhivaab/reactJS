import React from 'react';
import ReactDOM from 'react-dom';



class Two extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "balamurugan"
        }
    }
    changeme =() => {
       this.setState({
           name: "ramya"
       })

    }
    
    render() {
        return <div>{this.state.name} <button onClick = {this.changeme}>Change Me</button></div>;
    }
}

export default Two

ReactDOM.render(<Two/>, document.getElementById("root"));


// state change using events and and setstate 
// practice yourselves to use method or function name with =() => bracket 

