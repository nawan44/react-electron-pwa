import React from "react";
 import { useNavigate } from "react-router-dom";

function Setting() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/home")
  };

  return (
    <>
         <button onClick={toHome}
      >Back To Home</button>
      <div>Setting</div>
    </>
  )
}

export default Setting;