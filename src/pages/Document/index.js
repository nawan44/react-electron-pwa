import React from "react";
 import { useNavigate } from "react-router-dom";

function Document() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/home")
  };

  return (
    <>
      <button onClick={toHome}
      >Back To Home</button>
      <div>Document</div>
    </>
  )
}

export default Document;