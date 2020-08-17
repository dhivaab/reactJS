import React from 'react';
import ReactDOM from 'react-dom';

// import ClickCounter from './nohoc/clickcounter';
// import MouseHoverCounter from './nohoc/mouseovercounter';
// import KeyUpCounter from './nohoc/keyup';




// without HOC and no resuablity in components 
//ReactDOM.render(<div><ClickCounter/> <br/><br/><br/><MouseHoverCounter/><br/><br/><br/> <KeyUpCounter/></div>, document.getElementById("root"))



// Higher Order Components(HOC)
// Here we are adding three components for button with different behaviour
    // 1. click counter 
    // 2. mouse hover counter
    // 3. key up counter

// There are lot of duplicate here. to avoid this we will use higher order Component(HOC)
// the duplicate here is state counter and H2 and button 
// HOC - to share common functionalities between components
// it is a pattern where a function takes a component as an argument and returns a new component 
// eg const newcomp = higherordercompnent(originalcomponent)
// adds data or additional behaviour to original component 
// const ironman = dress(Man) // adding dress to normal man returns iron man



// render the HOC.js that is reusable component 

import ClickCounter from './hoc/clickcounter';
import MouseHoverCounter from './hoc/mousehovercounter';
import KeyUpCounter from './hoc/keyup';

ReactDOM.render(<div><ClickCounter/> <br/><br/><br/><MouseHoverCounter/><br/><br/><br/> <KeyUpCounter/></div>, document.getElementById("root"))
