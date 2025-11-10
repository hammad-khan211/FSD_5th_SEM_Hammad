// src/Component/Login.jsx
import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <div>
          <label>Email:</label><br />
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div>
          <label>Password:</label><br />
          <input type="password" placeholder="Enter your password" required />
        </div>

        <div>
          <input type="checkbox" /> Remember me
        </div>

        <button type="submit">Login</button>

        <p>
          Forgot password? <a href="#">Click here</a>
        </p>
        <p>
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
