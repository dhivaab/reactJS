import React from 'react';
import ReactDOM from 'react-dom';


const UpdatedComponent = (OldComponent) => {
    class HouseandClick extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        clickme =() => {
            this.setState({count:this.state.count + 1});
        }
        render() {
            return <OldComponent name = "dhiva" count = {this.state.count}></OldComponent>
        }
    }
        return HouseandClick;
    }
export default UpdatedComponent