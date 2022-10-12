import React from "react";
import Key from "./Key";

class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "highest rating: Legend of blue sea",
      readable: false,
    };
  }

  toggleResponse = () => {
    console.log("Toggled.");
    this.setState((previousState) => ({
        readable: !previousState.readable,
    }));
  };

  render() {
    const { theme, readable } = this.state;
    return (
      <>
        <Key theme={theme} />
        <p>
          Have you read this story?{" "}
          <strong>{readable ? "No" :"Yes"}</strong>
        </p>
        <button onClick={this.toggleResponse}>Response</button>
      </>
    );
  }
}

export default Ticket;