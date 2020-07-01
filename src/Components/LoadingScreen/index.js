import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingScreen = () => {
  return (
    <div style={{minWidth: "100vw", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <ClipLoader style={{margin: "auto"}} size={150} color={"#123abc"} loading={true} />
    </div>
  );
};

export default LoadingScreen;