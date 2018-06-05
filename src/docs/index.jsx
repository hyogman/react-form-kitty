import React from "react";
import { render } from "react-dom";
import FormKitty from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <FormKitty>
        <h3>Form Kitty</h3>
      </FormKitty>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
