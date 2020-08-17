import React from 'react';
import ReactDOM from 'react-dom';


function Header() {
    return <h1>Header</h1>;
}

function Content() {
    return <h1>Content</h1>;
}
function Footer() {
    return <h1>Footer</h1>;
}
function Page() {
    return <div><Header/> ,<Content/>, <Footer/></div>
}

// creating multiple components in same files and rendering them in group as array in the ReactDOM render


// Grouping elements
// ReactDOM.render([<Header/> ,<Content/>, <Footer/> ], document.getElementById("root")); 



// Having a another element to group all components and list it note it shoule be within the <div> if not it wont work ie allways component should 
// have div as parent. 
// ReactDOM.render(<Page/>, document.getElementById("root"));



// you cant use multiple class exports in same file. it will throw error rather use in function as multiple components in same class. 
