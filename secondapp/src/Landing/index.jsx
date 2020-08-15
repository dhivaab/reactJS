import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Content from '../Content';

class Landing extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Content></Content> 
                 <Footer></Footer>
            </div>
        );
    }
}

export default Landing;