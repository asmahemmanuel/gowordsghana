import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../index.css";

const fetchQuery = async ({ uri, method = "GET", body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: user.username,
      password: user.password,
    };
    const data = await fetchQuery({
      uri: "http://localhost:4000/users/signup",
      method: "POST",
      body: newUser,
    });

    localStorage.setItem("token", data.token);
    if (newUser) {
      console.log(newUser);
      navigate("/login");
    }
  };

  return (
    <div>
      <form className="signin-form" action="" onSubmit={handleSubmit}>
        <h2>G🔴Words Ghana <br /> <hr />
          SIGN UP</h2>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">SignUp</button>
        <div className="txt">
          <h4> 
            Already have an account? <Link to="/login">Sign in here</Link>
          </h4>
        </div>
      </form>
    </div>
  );
};

export default Signup;
