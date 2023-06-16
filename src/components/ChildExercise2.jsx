import React, { Component } from "react";
class ChildExercise1 extends Component {
  constructor(props) {
    super(props);

    this.state = { title: "Child component" };

    console.log("CHILD COMPONENT INITIALIZED");
  }

  componentDidMount() {
    console.log(
      "CHILD COMPONENT MOUNTED - NOW COMPONENT DOM IS RENDERED ALREADY"
    );
  }

  componentDidUpdate() {
    console.log(
      "CHILD COMPONENT UPDATED - THERE WAS CHANGE IN STATE AND PROPS - SO COMPONENTDIDUPDATE CALLED"
    );
  }

  componentWillUnmount() {
    console.log("CHILD COMPONENT IS GOING TO BE DESTROYED");
  }

  shouldComponentUpdate() {
    console.log(
      "CHILD COMPONENT - SHOULD COMPONENT UPDATED - DAFAULT VALUE TRUE"
    );
    return true;
  }

  componentDidCatch(error) {
    console.log("CHILD COMPONENT - SOME ERROR OCCURRED");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("CHILD COMPONENT - Previous props", prevProps);
    console.log("CHILD COMPONENT - Previous state", prevState);
    return null;
  }

  static getDerivedStateFromProps() {
    console.log("CHILD COMPONENT - IN GET DERIVED STATE FROM PROPS");
    return null;
  }

  updateCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log("CHILD COMPONENT - IN COMPONENT RENDERED METHOD");
    return (
      <div className="App">
        <h3>{this.state.title}</h3>
      </div>
    );
  }
}

export default ChildExercise1;
