import React from 'react';
import ReactDOM from 'react-dom';

const nameElement = <h1>Sona</h1>


function One() {
    return <h1>Sumithra</h1>
}

class Two extends React.Component {
    render() {
        return <div>good morning</div>
    }
}
export default Two;

// Basics of JSX and Javascript rendering 

// static text to render in root element
// ReactDOM.render("balamurugan", document.getElementById("root"));

// const variable to render in root element
// ReactDOM.render(nameElement, document.getElementById("root"));

// function variable to render in root element
// ReactDOM.render(one(), document.getElementById("root"));

// function as component to render in root element
// ReactDOM.render(<One></One>, document.getElementById("root"));

// class way of rendering a component 
// ReactDOM.render(<Two></Two>, document.getElementById("root"));

// javascript way of creating simple elements and rendering them
//const myElement = React.createElement("h2",null, "hi bala");
//ReactDOM.render(myElement,document.getElementById("root"));


// javascript way of creating multiple elements and rendeering them 
// const h1tag = React.createElement("h1",null,"something new");
// const ptag = React.createElement("p",null, "balamurugan ");
// const divtag = React.createElement("div",null,h1tag,ptag);
// ReactDOM.render(divtag,document.getElementById("root"));


// Notes 
// function or class name should be "caps", html tags are small like p and h1 and htat is the reason this should be caps. 
// one is jsx way and other one is javascript way. jsx is <one> <h1> etc. and javascript way is "createelement" 
