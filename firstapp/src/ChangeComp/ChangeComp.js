import React from 'react';

class ChangeComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol };
    }
    shouldComponentUpdate() {
        return true;
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
      }
      componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
      }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }

export default ChangeComp;