import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(signInStart());
      const result = await fetch("/server/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await result.json();
      
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="flex flex-col max-w-lg mx-auto">
      <div className="">
        <h1 className="my-4 text-4xl font-bold text-center">Sign In</h1>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            className="p-3 rounded bg-slate-200"
            placeholder="Email"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="p-3 rounded bg-slate-200"
            placeholder="Password"
            id="password"
            onChange={handleChange}
          />
          <button
            className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-80"
            disabled={loading}
          >
            {loading ? "Loading" : "Sign In"}
          </button>
          <OAuth/>
        </form>
        <div className="flex gap-2 mt-5 text-2xl">
          <p className="">Dont Have an account?</p>
          <Link to="/sign-up">
            <span className="text-blue-500">Sign Up</span>
          </Link>
        </div>
        <p className="mt-5 text-red-700">{error ? error || "Something went wrong" : ""}</p>
      </div>
    </div>
  );
};

export default SignIn;
