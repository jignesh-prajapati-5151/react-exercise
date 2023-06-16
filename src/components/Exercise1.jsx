import React, { Component } from "react";
import ChildExercise1 from "./ChildExercise2";
class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    console.log("PARENT COMPONENT INITIALIZED");
  }

  componentDidMount() {
    console.log(
      "PARENT COMPONENT MOUNTED - NOW COMPONENT DOM IS RENDERED ALREADY"
    );
  }

  componentDidUpdate() {
    console.log(
      "PARENT COMPONENT UPDATED - THERE WAS CHANGE IN STATE AND PROPS - SO COMPONENTDIDUPDATE CALLED"
    );
  }

  componentWillUnmount() {
    console.log("PARENT COMPONENT IS GOING TO BE DESTROYED");
  }

  shouldComponentUpdate() {
    console.log(
      "PARENT COMPONENT - SHOULD COMPONENT UPDATED - DAFAULT VALUE TRUE"
    );
    return true;
  }

  componentDidCatch(error) {
    console.log("PARENT COMPONENT - SOME ERROR OCCURRED");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("PARENT COMPONENT - Previous props", prevProps);
    console.log("PARENT COMPONENT - Previous state", prevState);
    return null;
  }

  static getDerivedStateFromProps() {
    console.log("PARENT COMPONENT - IN GET DERIVED STATE FROM PROPS");
    console.log(
      "This method is called before the rendering or before any updation of the component. This method is majorly used to update the state, before the rendering of the component, which depends upon the props received by the component"
    );
    return null;
  }

  updateCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log("PARENT COMPONENT - IN COMPONENT RENDERED METHOD");
    return (
      <div className="App">
        <h3>{this.state.counter}</h3>
        <button onClick={this.updateCounter}>CLICK</button>
        <ChildExercise1 />
      </div>
    );
  }
}

export default Exercise1;
