import React from "react";
import { auth, provider } from "../../firebase";
const Login = ({ history }) => {
  console.log(provider);
  const handleSubmit = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        sessionStorage.setItem("user", JSON.stringify(result.user));
        history.push("/rooms");
      })
      .catch((error) => alert(error));
  };

  return (
    <div
      style={{
        borderRadius: "16px",
        boxShadow: "0 4px 17px rgba(0, 0, 0, 0.35)",
      }}
      className="card d-flex justify-content-center align-items-center flex-column w-300"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/765px-WhatsApp.svg.png"
        alt="whats-app"
        width="60px"
      />
      <button
        className="btn btn-success text-dark mt-20"
        onClick={handleSubmit}
      >
        <strong>Login With Google</strong>
      </button>
    </div>
  );
};

export default Login;
