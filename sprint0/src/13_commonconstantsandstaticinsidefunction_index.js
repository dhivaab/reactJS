import React from 'react';
import ReactDOM from 'react-dom';


class One extends React.Component {
    static pie = 3.13
    constructor(props) {
        super(props)
        this.state = {
            name: "hi "
        };
    }
    render() {
    
        const { name } = this.state;
        const {name1} = this.props;
        return <div> 
            my state name is {name}
            my props name is {name1}
            my props is {One.pie}
        </div>
    }
}
export default One;

ReactDOM.render(<One name1 = "hi1"/>, document.getElementById("root"));



// constant variables 

// 1.static variable used inside the class instance
// 2. assigning direct variables from state and props to const 

//Note.
// const can be assigned variables in render or function not at class level. 

