// src/components/Loader.jsx
import React from "react";
import "../styles/LoadingPage.css";

const LoadingPage = () => {
  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#FEFFF4",
  };

  return (
    <div style={loaderStyle}>
      <div className="loadingspinner" data-testid="loading-spinner">
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="square3"></div>
        <div id="square4"></div>
        <div id="square5"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
