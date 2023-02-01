import React from "react";

const Login = () => {
  return (
    <div>
      <h2> Login Page! </h2>
      <input
        id="username"
        type="text"
        name="name"
        placeholder="username"
        autofocus="autofocus"
      />
      <input
        id="password"
        type="password"
        name="password"
        placeholder="password"
      />
    </div>
  );
};

export default Login;
