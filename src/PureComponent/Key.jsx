import React from "react";

class Key extends React.PureComponent {
  render() {
    console.log("Book title:");
    return (
      <p>
        Key: <strong>{this.props.theme}</strong>
      </p>
    );
  }
}

export default Key;