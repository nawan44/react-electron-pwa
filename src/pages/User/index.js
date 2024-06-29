import React from "react";
 import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/home")
  };

  return (
    <>
         <button onClick={toHome}
      >Back To Home</button>
      <div>User</div>
    </>
  )
}

export default User;