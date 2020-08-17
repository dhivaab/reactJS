import React from 'react';
import ReactDOM from 'react-dom';



class One extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          counter: 1  
        };
    }
    add =() => {
        this.setState({counter: this.state.counter +1 });
    }
    sub =() => {
        this.setState({counter: this.state.counter -1});
    }
    
    render() {
        return <div><p> {this.state.counter} </p><button onClick = {this.add}>Add One </button> 
        <button onClick = {this.sub}> Subract One</button></div>;
    }
}
export default One;

ReactDOM.render(<One/>, document.getElementById("root"));