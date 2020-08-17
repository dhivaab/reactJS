import React from 'react';
import ReactDOM from 'react-dom';
import  './index.css';

class One extends React.Component {
    render() {
        return <div>
            <h1 style={{color: "red"}} >Dhiva Balamurugan</h1> 
            <h2> Cognizant </h2>
            </div>
    }
}

export default One;

ReactDOM.render(<One></One>, document.getElementById("root"));


// adding styles 

// 1. adding simple inline styles
// 2. adding styles simply using index.js 