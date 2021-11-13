import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../assets/login.jpg";
import Toast from "./Toast/Toast";

const axios = require("axios");

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const Login = async () => {
    try {
      if (username.length < 3 || username.length > 15) {
        alert("Name length be from 3 to 15 characters", 2);
        return;
      }

      if (password.length < 5) {
        alert("Length of the password must be at least 5", 2);
        return;
      }

      const response = await axios.post("/signin", {
        username: username,
        password: password,
      });
      console.log(response);
      console.log(response.data);
      localStorage.setItem("loggedUser", JSON.stringify(response.data));
      navigate("/");
      console.log("object")
      // Toast(response.data.message, 1);
      Toast("LoggedIn Successfully", 1);
    } catch (err) {
      console.log(err.response);
      // Toast(err.response.data.error, 2);
      // Toast(err.response.data.message, 2);
    }
  };
  return (
    <div className="h-screen bg-pink-100">
      {/* <div>
        <h1 className="p-12 font-medium text-2xl ">Wants to Plant More</h1>
      </div> */}
      <div className="flex md:flex-row flex-col justify-around ">
        <div className="h-full w-1/2">
          <h1 className="bg-gray-400 text-center py-2 font-medium text-2xl my-8 ml-4">
            WANT TO PLANT MORE ?
          </h1>{" "}
          <img
            className="shadow-xl mx-auto max-w-xs max-h-96 rounded-full cursor-pointer h-80 w-80"
            src={login}
            alt="dfsd"
          />
        </div>
        <div className="h-screen w-1/2 bg-gray-400 p-20 text-center">
          <h2 className="text-2xl text-center pb-2 bg-pink-100 -ml-20">
            Welcome to Family !
          </h2>{" "}
          <div className="pt-6">
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              id="username"
              placeholder="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={
                "w-3/4 bg-pink-100 p-2 text-primary  transition duration-150 ease-in-out mb-4"
              }
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={
                "w-3/4 bg-pink-100  p-2 text-primary transition duration-150 ease-in-out mb-4"
              }
            />
          </div>
          <div className="flex justify-center item-center">
            <button
              id="signup"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                Login();
              }}
              className={
                "my-4 py-1 px-4 text-white rounded bg-gray-700 hover:bg-pink-100 hover:text-gray-900  active:border-black"
              }
            >
              Login
            </button>
          </div>{" "}
          <div className="py-2 flex justify-center item-center">
            <h2>
              Don't have an account ?
              <Link
                to="/signup"
                className="text-gray-900  hover:text-pink-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                SignUp
              </Link>
            </h2>
          </div>
          <div className="flex justify-center item-center">
            <Link
              to="/resetpassword"
              className="text-gray-900   hover:text-pink-100 px-3 py-2 rounded-md text-sm font-medium"
            >
              Forget Password ?
            </Link>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
