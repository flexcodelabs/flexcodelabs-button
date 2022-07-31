import React from "react";
import ReactDOM from "react-dom";
import Button from "@flexcodelabs/button";

ReactDOM.render(
  <React.StrictMode>
    <Button
      label="Button"
      disabled
      loading
      style={{
        padding: 10,
        background: "black",
        position: "relative",
        color: "white",
        overflow: "hidden",
        gap: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "200px",
      }}
    />
    <Button
      label="Button"
      loading
      style={{
        padding: 10,
        background: "black",
        position: "relative",
        color: "white",
        overflow: "hidden",
        gap: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "200px",
      }}
    />
    <Button
      label="Button"
      style={{
        padding: 10,
        background: "black",
        position: "relative",
        color: "white",
        overflow: "hidden",
        gap: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "200px",
      }}
    />
    <Button
      label="Button"
      loading
      spinnerBgColor="green"
      style={{
        padding: 10,
        background: "green",
        position: "relative",
        color: "white",
        overflow: "hidden",
        gap: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "200px",
      }}
    />
    <Button
      label="Button"
      loading
      spinnerBgColor="blue"
      style={{
        padding: 10,
        background: "blue",
        position: "relative",
        color: "white",
        overflow: "hidden",
        gap: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "200px",
      }}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
