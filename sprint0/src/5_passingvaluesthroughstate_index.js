import React from 'react';
import ReactDOM from 'react-dom';


class ThirdComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "welcome to cognizant"
        }
      
    }
    
    render() {
        return <div>hi {this.state.name}</div>;
    }
}

export default ThirdComponent;

ReactDOM.render(<ThirdComponent/>,document.getElementById("root"));


// passing values through state. 

// note state should be in constructor 

