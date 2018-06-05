import React, { Component } from "react";

class FormKitty extends Component {
  render() {
    const { children } = this.props;
    return <form>{children}</form>;
  }
}

export default FormKitty;
