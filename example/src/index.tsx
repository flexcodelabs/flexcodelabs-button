import React from "react";
import ReactDOM from "react-dom";
import Button from "@flexcodelabs/button";

ReactDOM.render(
  <React.StrictMode>
    <Button label="Button" icon={<div>Icon</div>} />
  </React.StrictMode>,
  document.getElementById("root")
);
