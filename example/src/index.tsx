import React from "react";
import ReactDOM from "react-dom";
import Button from "@flexcodelabs/button";

ReactDOM.render(
  <React.StrictMode>
    <Button
      label="Button"
      style={{
        padding: 10,
        background: "black",
      }}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
